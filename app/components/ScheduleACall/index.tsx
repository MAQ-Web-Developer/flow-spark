"use client";

import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const generateCalendar = (month: number, year: number, minDate: Date) => {
  const date = new Date(year, month, 1);
  const days = [];
  const firstDay = date.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return days;
};

interface ScheduleACallProps {
  setpopup: (value: boolean) => void;
}
export const ScheduleACall: React.FC<ScheduleACallProps> = ({
  setpopup,
}): JSX.Element => {
  const [selectedDate, setSelectedDate] = useState("");
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [status, setstatus] = useState("Schedule my call");
  const [currentDay, setCurrentDay] = useState<number | undefined>(undefined);
  const [booked, setBooked] = useState<string[]>([]);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = new Date(
    tomorrow.getFullYear(),
    tomorrow.getMonth(),
    tomorrow.getDate()
  );

  // Set the initial selected date to tomorrow's date in YYYY-MM-DD format
  useEffect(() => {
    const formattedDate = `${tomorrow.getFullYear()}-${String(
      tomorrow.getMonth() + 1
    ).padStart(2, "0")}-${String(tomorrow.getDate()).padStart(2, "0")}`;
    setSelectedDate(formattedDate);
    handleDateClick(Number(String(tomorrow.getDate()).padStart(2, "0")));
  }, []);

  const times = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
  ];

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const days = generateCalendar(currentMonth, currentYear, minDate);

  const handlePreviousMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    if (currentMonth === 0) {
      setCurrentYear((prevYear) => prevYear - 1);
    }
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    if (currentMonth === 11) {
      setCurrentYear((prevYear) => prevYear + 1);
    }
  };

  const padWithZero = (num: number): string =>
    num < 10 ? `0${num}` : String(num);

  const handleDateClick = async (day: number) => {
    setCurrentDay(day);
    if (day) {
      const formattedDate = `${currentYear}-${padWithZero(
        currentMonth + 1
      )}-${padWithZero(day)}`;
      setSelectedDate(formattedDate);
      console.log(formattedDate);
    }

    try {
      const formattedDate = `${currentYear}-${padWithZero(
        currentMonth + 1
      )}-${padWithZero(day)}`;
      const response = await axios.get(`/api/bookings?date=${formattedDate}`);
      console.log(response.data.bookedTimes);
      setSelectedTime(null);
      setBooked(response.data.bookedTimes);
    } catch (error) {
      console.error("Error fetching booked times", error);
    }
  };

  const divRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (divRef.current && !divRef.current.contains(event.target as Node)) {
      setpopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {}, [tomorrow]);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [callNotes, setCallNotes] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ fullName, email, phone, callNotes, consent });

    if (!selectedTime) {
      setstatus("Please Select Time");
      setTimeout(() => setstatus("Schedule my call"), 3000);
      return;
    }

    try {
      const formattedDate = `${currentYear}-${padWithZero(
        currentMonth + 1
      )}-${padWithZero(selectedDate.split("-")[2])}`;
      const response = await axios.post(`/api/bookings`, {
        date: formattedDate,
        time: selectedTime,
        fullName,
        email,
        phoneNumber: phone,
        callNotes,
        checkbox: consent,
      });
      console.log(formattedDate);
      console.log(response);
      setSelectedTime(null);
      setstatus("Booking successful!");
      setTimeout(() => {
        setstatus("Schedule my call");
        setpopup(false);
      }, 1500);
    } catch (error) {
      console.error("Error creating booking", error);
      setstatus("Error creating booking. Please try again.");
      setTimeout(() => setstatus("Schedule my call"), 3000);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen z-50 bg-[#0000003d] flex justify-center items-center">
      <div className="w-[1152px] relative">
        <div
          className="flex flex-col w-[1152px] items-center justify-center p-8 rounded-lg bg-[#ffffff]"
          ref={divRef}
        >
          <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative w-fit mt-[-1.00px] font-heading-h2 text-neutral-800 text-2xl leading-6">
              Schedule a call at a time that suits you
            </p>
            <div className="flex flex-col items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-start gap-16 relative flex-[0_0_auto]">
                <div className="flex flex-col w-[345px] items-start justify-end gap-2 relative">
                  <div className="relative w-fit font-body-small text-neutral-600">
                    Select a date
                  </div>
                  <p className="rounded-md border border-solid border-primary-400 p-4 w-full text-neutral-600">
                    {selectedDate}
                  </p>
                  <div className="calendar-container bg-neutral-100 rounded-md border border-solid border-primary-400 p-4 w-full text-black">
                    <div className="calendar-header flex justify-between items-center mb-4">
                      <button onClick={handlePreviousMonth}>&larr;</button>
                      <p>
                        {new Date(currentYear, currentMonth).toLocaleString(
                          "default",
                          {
                            month: "long",
                            year: "numeric",
                          }
                        )}
                      </p>
                      <button onClick={handleNextMonth}>&rarr;</button>
                    </div>

                    <div className="calendar-days grid grid-cols-7 gap-2">
                      {daysOfWeek.map((day) => (
                        <div key={day} className="text-center font-semibold">
                          {day}
                        </div>
                      ))}
                    </div>

                    <div className="calendar-dates grid grid-cols-7 gap-2">
                      {days.map((day, index) => {
                        const isBeforeTomorrow =
                          day &&
                          new Date(currentYear, currentMonth, day) < minDate;

                        return (
                          <div
                            key={index}
                            className={`text-center p-2 rounded ${
                              isBeforeTomorrow
                                ? "!text-gray-400 cursor-not-allowed"
                                : "cursor-pointer"
                            } ${
                              day === Number(selectedDate.split("-")[2])
                                ? "bg-primary-400 text-white"
                                : "text-neutral-600"
                            } ${
                              !isBeforeTomorrow ? "hover:bg-primary-200" : ""
                            }`}
                            onClick={() =>
                              !isBeforeTomorrow &&
                              day !== null &&
                              handleDateClick(day)
                            }
                          >
                            {day}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-[340px] items-start gap-4 relative">
                  <div className="relative w-fit mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-neutral-600 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                    Select a time
                  </div>
                  <div className="flex flex-wrap items-center gap-[16px_16px] relative self-stretch w-full flex-[0_0_auto]">
                    {times.map((time, index) => (
                      <button
                        key={time}
                        onClick={() => {
                          if (!booked || !booked.includes(time)) {
                            handleTimeSelect(time); // Only select the time if it's not booked
                          }
                        }}
                        className={`all-[unset] box-border flex w-[100px] items-center justify-center px-0 py-4 relative rounded-[100px] overflow-hidden border border-solid ${
                          selectedTime === time
                            ? "bg-primary-400 text-white border-primary-400"
                            : booked && booked.includes(time) // Check if booked contains the time
                            ? "scale-80 opacity-80" // Adjust styles as needed
                            : "border-primary-400 text-primary-600"
                        }`}
                      >
                        <div className="relative w-fit mt-[-1.00px] font-body-normal-heavy font-[number:var(--body-normal-heavy-font-weight)] text-[length:var(--body-normal-heavy-font-size)] tracking-[var(--body-normal-heavy-letter-spacing)] leading-[var(--body-normal-heavy-line-height)] whitespace-nowrap [font-style:var(--body-normal-heavy-font-style)]">
                          {time}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-8 p-8 relative self-stretch w-full flex-[0_0_auto] bg-primary-100 rounded-[20px] text-black"
            >
              <div className="flex flex-col items-start gap-4 relative flex-1 grow">
                <div className="justify-end gap-[7px] flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="mt-[-1.00px] relative w-fit font-body-normal text-neutral-600">
                    Full name
                  </div>
                  <input
                    type="text"
                    name="Full-Name"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="pl-2 relative self-stretch w-full h-12 bg-[color:var(--variable-collection-white)] rounded-md border border-solid border-neutral-600"
                  />
                </div>
                <div className="justify-end gap-[7px] flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="mt-[-1.00px] relative w-fit font-body-normal text-neutral-600">
                    Email address
                  </div>
                  <input
                    type="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-2 relative self-stretch w-full h-12 bg-[color:var(--variable-collection-white)] rounded-md border border-solid border-neutral-600"
                  />
                </div>
                <div className="flex flex-col items-start gap-4 relative w-full">
                  <div className="relative w-fit font-body-normal text-neutral-600">
                    Phone number
                  </div>
                  <PhoneInput
                    country={"us"}
                    value={phone}
                    onChange={setPhone}
                    inputProps={{ required: true }}
                    inputStyle={{
                      width: "100%",
                      height: "48px",
                      border: "1px solid #4d5973",
                      borderRadius: "4px",
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col items-end gap-4 relative flex-1 self-stretch grow">
                <div className="flex flex-col items-start gap-2 relative flex-1 self-stretch w-full grow rounded-md">
                  <div className="relative w-fit font-body-normal text-neutral-600">
                    Call notes
                  </div>
                  <textarea
                    required
                    value={callNotes}
                    onChange={(e) => setCallNotes(e.target.value)}
                    className="relative flex-1 grow mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-[color:var(--variable-collection-white)] rounded-md border border-solid border-neutral-600 w-full"
                  ></textarea>
                </div>
                <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-6 h-6">
                    <input
                      type="checkbox"
                      required
                      checked={consent}
                      onChange={() => setConsent(!consent)}
                      className="relative w-5 h-5 top-0.5 left-0.5 bg-neutral-100 rounded-[3px] border-2 border-solid border-primary-400"
                    />
                  </div>
                  <p className="relative flex-1 mt-[-1.00px] font-body-normal text-neutral-600">
                    <span className="font-body-normal text-[#4c5872]">
                      I consent to my details being processed in line with the{" "}
                    </span>
                    <span className="underline font-body-normal text-[#4c5872]">
                      privacy policy
                    </span>
                    <span className="font-body-normal text-[#4c5872]">.</span>
                  </p>
                </div>
                <div className="all-[unset] box-border inline-flex flex-col items-end gap-2.5 relative flex-[0_0_auto]">
                  <button
                    type="submit"
                    className="all-[unset] box-border inline-flex h-12 items-center justify-center gap-4 px-8 py-4 relative bg-primary-400 rounded-[100px] overflow-hidden"
                  >
                    <div className="text-white relative w-fit font-body-normal-heavy text-[length:var(--body-normal-heavy-font-size)]">
                      {status}
                    </div>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div
          onClick={() => setpopup(false)}
          className="inline-flex items-center justify-center w-10 h-10 cursor-pointer   absolute top-[22px] right-[22px] bg-accent-400 rounded-md overflow-hidden"
        >
          x
        </div>
      </div>{" "}
    </div>
  );
};
