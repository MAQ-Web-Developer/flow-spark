"use client";

import React, { useState } from "react";
import { Button } from "./components/Button";
import { Checkbox } from "./components/Checkbox";
import { IconButtons } from "./components/IconButtons";
import { StylePrimaryWrapper } from "./components/StylePrimaryWrapper";
import { TextInputField } from "./components/TextInputField";
import { ArrowLeft } from "./icons/ArrowLeft";
import { ArrowRight1 } from "./icons/ArrowRight1";
import { ChatAlt21 } from "./icons/ChatAlt21";
import { DesktopComputer1 } from "./icons/DesktopComputer1";
import { GlobeAlt1 } from "./icons/GlobeAlt1";
import { Moon1 } from "./icons/Moon1";
import { Sun1 } from "./icons/Sun1";
import { Support1 } from "./icons/Support1";
import { UserCircle1 } from "./icons/UserCircle1";
import Slider from "./components/Slider";
import { ScheduleACall } from "./components/ScheduleACall";
import axios from "axios";

export default function Home() {
  const [popup, setpopup] = useState(false);
  const [status, setStatus] = useState("Book Your Demo");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ fullName, email, consent });

    try {
      const response = await axios.post(`/api/leads`, {
        fullName: fullName,
        email: email,
        checkbox: consent,
      });

      console.log(response);
      setStatus("Request Received");
      statusTimeout = setTimeout(() => {
        setStatus("Book Your Demo");
      }, 1000);
    } catch (error) {
      console.error("Error creating booking", error);
      setStatus("Error creating request.");

      statusTimeout = setTimeout(() => {
        setStatus("Book Your Demo");
      }, 3000);
    }
  };
  let statusTimeout;

  return (
    <>
      {popup && <ScheduleACall setpopup={setpopup} />}
      <div className="bg-[#E8E9EB] flex justify-center py-10">
        <div className="inline-flex flex-col items-center gap-24 pt-4 pb-0 px-0 relative bg-[color:var(--variable-collection-white)] rounded-[20px_20px_60px_60px]">
          <div className="flex flex-col items-center gap-4 px-4 py-0 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-start gap-[29px] relative flex-[0_0_auto]">
                <div className="inline-flex items-center gap-3 px-2 py-1 relative flex-[0_0_auto] bg-neutral-200 rounded-[100px]">
                  <GlobeAlt1 className="!relative !w-4 !h-4" />
                  <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Isidora_Sans_Alt-SemiBold',Helvetica] font-semibold text-neutral-600 text-[10px] tracking-[0] leading-[11px] whitespace-nowrap">
                      EN
                    </div>
                    <img
                      className="relative w-2 h-[4.84px]"
                      alt="Group"
                      src="/img/group.png"
                    />
                  </div>
                </div>
                <div className="inline-flex items-center gap-3 px-2 py-1 relative flex-[0_0_auto] bg-neutral-200 rounded-[100px]">
                  <ChatAlt21 className="!relative !w-4 !h-4" />
                  <div className="relative w-fit [font-family:'Isidora_Sans_Alt-SemiBold',Helvetica] font-semibold text-neutral-600 text-[10px] tracking-[0] leading-[11px] whitespace-nowrap">
                    CHAT TO SALES
                  </div>
                </div>
                <div className="inline-flex items-center gap-3 px-2 py-1 relative flex-[0_0_auto] bg-neutral-200 rounded-[100px]">
                  <Support1 className="!relative !w-4 !h-4" />
                  <div className="relative w-fit [font-family:'Isidora_Sans_Alt-SemiBold',Helvetica] font-semibold text-neutral-600 text-[10px] tracking-[0] leading-[11px] whitespace-nowrap">
                    SUPPORT
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
                <div className="inline-flex items-center gap-3 px-2 py-0 relative self-stretch flex-[0_0_auto] bg-neutral-200 rounded-[100px]">
                  <div className="inline-flex flex-col items-start gap-0.5 relative flex-[0_0_auto]">
                    <DesktopComputer1 className="!relative !w-3.5 !h-3.5" />
                    <div className="relative self-stretch w-full h-px bg-primary-400 rounded-[20px]" />
                  </div>
                  <div className="inline-flex flex-col items-start gap-0.5 relative flex-[0_0_auto]">
                    <Sun1 className="!relative !w-3.5 !h-3.5" />
                    <div className="relative self-stretch w-full h-px bg-primary-400 rounded-[20px] opacity-0" />
                  </div>
                  <div className="inline-flex flex-col items-start gap-0.5 relative flex-[0_0_auto]">
                    <Moon1 className="!relative !w-3.5 !h-3.5" />
                    <div className="relative self-stretch w-full h-px bg-primary-400 rounded-[20px] opacity-0" />
                  </div>
                </div>
                <div className="inline-flex items-center gap-3 px-2 py-1 relative flex-[0_0_auto] bg-neutral-200 rounded-[100px]">
                  <UserCircle1 className="!relative !w-4 !h-4" />
                  <div className="relative w-fit [font-family:'Isidora_Sans_Alt-SemiBold',Helvetica] font-semibold text-neutral-600 text-[10px] tracking-[0] leading-[11px] whitespace-nowrap">
                    LOG IN
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center px-4 py-0 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex w-[1064px] items-center justify-between px-4 py-8 relative flex-[0_0_auto] bg-primary-100 rounded-[124px] overflow-hidden">
                <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
                  <img
                    className="relative w-[170px] h-[30.81px]"
                    alt="Logo"
                    src="/img/logo.svg"
                  />
                  <div className="inline-flex items-end gap-2.5 px-4 py-2 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-semibold text-primary-600 text-base tracking-[0] leading-[11px] whitespace-nowrap">
                      Features
                    </div>
                  </div>
                  <div className="inline-flex items-end gap-2.5 px-4 py-2 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-semibold text-primary-600 text-base tracking-[0] leading-[11px] whitespace-nowrap">
                      Industries
                    </div>
                  </div>
                  <div className="inline-flex items-end gap-2.5 px-4 py-2 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-semibold text-primary-600 text-base tracking-[0] leading-[11px] whitespace-nowrap">
                      Pricing
                    </div>
                  </div>
                  <div className="inline-flex items-end gap-2.5 px-4 py-2 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Quicksand',Helvetica] font-semibold text-primary-600 text-base tracking-[0] leading-[11px] whitespace-nowrap">
                      Resources
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
                  <div
                    onClick={() => setpopup(true)}
                    className=" cursor-pointer"
                  >
                    <Button
                      className="!flex-[0_0_auto]"
                      divClassName="!text-primary-100"
                      label="Schedule a call"
                      leadingIcon={false}
                      size="regular"
                      state="default"
                      trailingIcon={false}
                      type="primary"
                    />
                  </div>
                  <Button
                    className="!flex-[0_0_auto]"
                    divClassName=""
                    label="Free trial"
                    leadingIcon={false}
                    size="regular"
                    state="default"
                    trailingIcon={false}
                    type="outline"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-[848px] gap-8 flex-[0_0_auto] items-center relative">
            <div className="flex flex-col gap-8 flex-1 grow items-center relative">
              <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-neutral-800 text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] whitespace-nowrap [font-style:var(--heading-h1-font-style)]">
                  FlowSpark
                </div>
                <div className="relative w-[430px] mr-[-22.00px] font-body-normal-heavy font-[number:var(--body-normal-heavy-font-weight)] text-neutral-600 text-[length:var(--body-normal-heavy-font-size)] tracking-[var(--body-normal-heavy-letter-spacing)] leading-[var(--body-normal-heavy-line-height)] [font-style:var(--body-normal-heavy-font-style)]">
                  DIGITAL MARKETING SOLUTIONS
                </div>
              </div>
              <p className="relative self-stretch font-body-normal font-[number:var(--body-normal-font-weight)] text-neutral-800 text-[length:var(--body-normal-font-size)] tracking-[var(--body-normal-letter-spacing)] leading-[var(--body-normal-line-height)] [font-style:var(--body-normal-font-style)]">
                We believe that marketing shouldn’t be a headache, so we’ve
                crafted a&nbsp;&nbsp;platform that’s super easy to use but
                doesn’t skimp on the powerful&nbsp;&nbsp;stuff.
              </p>
              <img
                className="relative w-[223px] h-[225.8px]"
                alt="Illustration"
                src="/img/illustration.png"
              />
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-start justify-center gap-8 relative flex-1 grow"
            >
              <div className="w-full">
                <div className="font-body-normal w-fit mt-[-1.00px] tracking-[var(--body-normal-letter-spacing)] text-[length:var(--body-normal-font-size)] [font-style:var(--body-normal-font-style)] text-neutral-600 font-[number:var(--body-normal-font-weight)] leading-[var(--body-normal-line-height)] whitespace-nowrap relative">
                  Full Name
                </div>
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  type="text"
                  className={`p-2 text-black border border-solid border-[#4d5973] w-full self-stretch h-12 rounded-md relative $`}
                />
              </div>
              <div className="w-full">
                <div className="font-body-normal w-fit mt-[-1.00px] tracking-[var(--body-normal-letter-spacing)] text-[length:var(--body-normal-font-size)] [font-style:var(--body-normal-font-style)] text-neutral-600 font-[number:var(--body-normal-font-weight)] leading-[var(--body-normal-line-height)] whitespace-nowrap relative">
                  Email address
                </div>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className={`p-2 text-black border border-solid border-[#4d5973] w-full self-stretch h-12 rounded-md relative $`}
                />
              </div>

              <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <input
                  checked={consent}
                  onChange={() => setConsent(!consent)}
                  type="checkbox"
                  required
                  className="scale-125"
                />
                <p className="relative flex-1 mt-[-1.00px] font-body-normal font-[number:var(--body-normal-font-weight)] text-neutral-600 text-[length:var(--body-normal-font-size)] tracking-[var(--body-normal-letter-spacing)] leading-[var(--body-normal-line-height)] [font-style:var(--body-normal-font-style)]">
                  <span className="font-body-normal font-[number:var(--body-normal-font-weight)] text-[#4c5872] text-[length:var(--body-normal-font-size)] tracking-[var(--body-normal-letter-spacing)] leading-[var(--body-normal-line-height)] [font-style:var(--body-normal-font-style)]">
                    I consent to my details being processed in line with the{" "}
                  </span>
                  <span className="underline font-body-normal [font-style:var(--body-normal-font-style)] font-[number:var(--body-normal-font-weight)] tracking-[var(--body-normal-letter-spacing)] leading-[var(--body-normal-line-height)] text-[length:var(--body-normal-font-size)]">
                    privacy policy
                  </span>
                  <span className="font-body-normal font-[number:var(--body-normal-font-weight)] text-[#4c5872] text-[length:var(--body-normal-font-size)] tracking-[var(--body-normal-letter-spacing)] leading-[var(--body-normal-line-height)] [font-style:var(--body-normal-font-style)]">
                    .
                  </span>
                </p>
              </div>
              <div className="flex items-start self-stretch w-full flex-col gap-4 relative flex-[0_0_auto]">
                <div className="inline-flex gap-4 flex-[0_0_auto] items-center relative">
                  <button
                    type="submit"
                    className="all-[unset] box-border inline-flex h-12 items-center justify-center gap-4 px-8 py-4 relative bg-primary-400 rounded-[100px] overflow-hidden"
                  >
                    <div className="text-white relative w-fit font-body-normal-heavy text-[length:var(--body-normal-heavy-font-size)]">
                      {status}
                    </div>
                  </button>
                  <Button
                    className="!flex-[0_0_auto]"
                    label="Start a free trial"
                    divClassName=""
                    leadingIcon={false}
                    size="regular"
                    state="default"
                    trailingIcon={false}
                    type="outline"
                  />
                </div>
                <p className="relative w-[430px] mr-[-22.00px] font-body-normal font-[number:var(--body-normal-font-weight)] text-neutral-400 text-[length:var(--body-normal-font-size)] tracking-[var(--body-normal-letter-spacing)] leading-[var(--body-normal-line-height)] [font-style:var(--body-normal-font-style)]">
                  Free 14-day trial. Cancel anytime.
                </p>
              </div>
            </form>
          </div>
          <Slider />

          <div className="flex flex-col w-[632px] items-center gap-8 relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
              <p className="relative w-fit mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-neutral-800 text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] whitespace-nowrap [font-style:var(--heading-h2-font-style)]">
                Want to see how we can help?
              </p>
            </div>
            <p className="relative w-[430px] font-body-normal font-[number:var(--body-normal-font-weight)] text-neutral-800 text-[length:var(--body-normal-font-size)] tracking-[var(--body-normal-letter-spacing)] leading-[var(--body-normal-line-height)] [font-style:var(--body-normal-font-style)]">
              Ready to transform your marketing? Book a demo or start your free
              trial&nbsp;&nbsp;today and see firsthand how we can make your
              marketing efforts more&nbsp;&nbsp;effective and enjoyable!
            </p>
            <div className="inline-flex items-center flex-col gap-4 relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
                <div onClick={() => setpopup(true)} className=" cursor-pointer">
                  <Button
                    className="!flex-[0_0_auto]"
                    divClassName="!text-primary-100"
                    label="Schedule a call"
                    leadingIcon={false}
                    size="regular"
                    state="default"
                    trailingIcon={false}
                    type="primary"
                  />
                </div>
                <Button
                  className="!flex-[0_0_auto]"
                  divClassName=""
                  label="Start a free trial"
                  leadingIcon={false}
                  size="regular"
                  state="default"
                  trailingIcon={false}
                  type="outline"
                />
              </div>
              <p className="relative w-[430px] font-body-normal font-[number:var(--body-normal-font-weight)] text-neutral-400 text-[length:var(--body-normal-font-size)] text-center tracking-[var(--body-normal-letter-spacing)] leading-[var(--body-normal-line-height)] [font-style:var(--body-normal-font-style)]">
                Free 14-day trial. Cancel anytime.
              </p>
            </div>
          </div>
          <footer className="flex flex-col w-[1216px] items-center gap-16 px-0 py-16 relative flex-[0_0_auto] bg-neutral-600 rounded-[60px]">
            <div className="inline-flex items-start gap-[188px] relative flex-[0_0_auto]">
              <div className="inline-flex items-start gap-8 relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-body-normal-heavy font-[number:var(--body-normal-heavy-font-weight)] text-neutral-200 text-[length:var(--body-normal-heavy-font-size)] tracking-[var(--body-normal-heavy-letter-spacing)] leading-[var(--body-normal-heavy-line-height)] whitespace-nowrap [font-style:var(--body-normal-heavy-font-style)]">
                    Product
                  </div>
                  <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                    <div className="mt-[-1.00px] font-body-normal font-[number:var(--body-normal-font-weight)] text-[length:var(--body-normal-font-size)] leading-[var(--body-normal-line-height)] relative w-fit text-neutral-200 tracking-[var(--body-normal-letter-spacing)] whitespace-nowrap [font-style:var(--body-normal-font-style)]">
                      Overview
                    </div>
                    <div className="font-body-normal font-[number:var(--body-normal-font-weight)] text-[length:var(--body-normal-font-size)] leading-[var(--body-normal-line-height)] relative w-fit text-neutral-200 tracking-[var(--body-normal-letter-spacing)] whitespace-nowrap [font-style:var(--body-normal-font-style)]">
                      Key Features
                    </div>
                    <div className="font-body-normal font-[number:var(--body-normal-font-weight)] text-[length:var(--body-normal-font-size)] leading-[var(--body-normal-line-height)] relative w-fit text-neutral-200 tracking-[var(--body-normal-letter-spacing)] whitespace-nowrap [font-style:var(--body-normal-font-style)]">
                      Integrations
                    </div>
                    <div className="font-body-normal font-[number:var(--body-normal-font-weight)] text-[length:var(--body-normal-font-size)] leading-[var(--body-normal-line-height)] relative w-fit text-neutral-200 tracking-[var(--body-normal-letter-spacing)] whitespace-nowrap [font-style:var(--body-normal-font-style)]">
                      Customisation Options
                    </div>
                    <div className="font-body-normal font-[number:var(--body-normal-font-weight)] text-[length:var(--body-normal-font-size)] leading-[var(--body-normal-line-height)] relative w-fit text-neutral-200 tracking-[var(--body-normal-letter-spacing)] whitespace-nowrap [font-style:var(--body-normal-font-style)]">
                      AI-led Insights
                    </div>
                  </div>
                </div>
                <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-body-normal-heavy font-[number:var(--body-normal-heavy-font-weight)] text-neutral-200 text-[length:var(--body-normal-heavy-font-size)] tracking-[var(--body-normal-heavy-letter-spacing)] leading-[var(--body-normal-heavy-line-height)] whitespace-nowrap [font-style:var(--body-normal-heavy-font-style)]">
                    Academy
                  </div>
                  <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                    <div className="mt-[-1.00px] font-body-normal font-[number:var(--body-normal-font-weight)] text-[length:var(--body-normal-font-size)] leading-[var(--body-normal-line-height)] relative w-fit text-neutral-200 tracking-[var(--body-normal-letter-spacing)] whitespace-nowrap [font-style:var(--body-normal-font-style)]">
                      Training programme
                    </div>
                    <div className="font-body-normal font-[number:var(--body-normal-font-weight)] text-[length:var(--body-normal-font-size)] leading-[var(--body-normal-line-height)] relative w-fit text-neutral-200 tracking-[var(--body-normal-letter-spacing)] whitespace-nowrap [font-style:var(--body-normal-font-style)]">
                      Webinars
                    </div>
                    <div className="font-body-normal font-[number:var(--body-normal-font-weight)] text-[length:var(--body-normal-font-size)] leading-[var(--body-normal-line-height)] relative w-fit text-neutral-200 tracking-[var(--body-normal-letter-spacing)] whitespace-nowrap [font-style:var(--body-normal-font-style)]">
                      Education blog
                    </div>
                    <div className="font-body-normal font-[number:var(--body-normal-font-weight)] text-[length:var(--body-normal-font-size)] leading-[var(--body-normal-line-height)] relative w-fit text-neutral-200 tracking-[var(--body-normal-letter-spacing)] whitespace-nowrap [font-style:var(--body-normal-font-style)]">
                      FAQs
                    </div>
                  </div>
                </div>
                <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-body-normal-heavy font-[number:var(--body-normal-heavy-font-weight)] text-neutral-200 text-[length:var(--body-normal-heavy-font-size)] tracking-[var(--body-normal-heavy-letter-spacing)] leading-[var(--body-normal-heavy-line-height)] whitespace-nowrap [font-style:var(--body-normal-heavy-font-style)]">
                    Support
                  </div>
                  <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                    <div className="mt-[-1.00px] font-body-normal font-[number:var(--body-normal-font-weight)] text-[length:var(--body-normal-font-size)] leading-[var(--body-normal-line-height)] relative w-fit text-neutral-200 tracking-[var(--body-normal-letter-spacing)] whitespace-nowrap [font-style:var(--body-normal-font-style)]">
                      Support Center
                    </div>
                    <div className="font-body-normal font-[number:var(--body-normal-font-weight)] text-[length:var(--body-normal-font-size)] leading-[var(--body-normal-line-height)] relative w-fit text-neutral-200 tracking-[var(--body-normal-letter-spacing)] whitespace-nowrap [font-style:var(--body-normal-font-style)]">
                      Account login
                    </div>
                    <div
                      onClick={() => setpopup(true)}
                      className=" cursor-pointer"
                    >
                      <StylePrimaryWrapper
                        className="!flex-[0_0_auto]"
                        style="primary"
                        text="Schedule a call"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-body-normal-heavy font-[number:var(--body-normal-heavy-font-weight)] text-neutral-200 text-[length:var(--body-normal-heavy-font-size)] tracking-[var(--body-normal-heavy-letter-spacing)] leading-[var(--body-normal-heavy-line-height)] whitespace-nowrap [font-style:var(--body-normal-heavy-font-style)]">
                  Company
                </div>
                <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                  <div className="mt-[-1.00px] font-body-normal font-[number:var(--body-normal-font-weight)] text-[length:var(--body-normal-font-size)] leading-[var(--body-normal-line-height)] relative w-fit text-neutral-200 tracking-[var(--body-normal-letter-spacing)] whitespace-nowrap [font-style:var(--body-normal-font-style)]">
                    Partnerships
                  </div>
                  <div className="font-body-normal font-[number:var(--body-normal-font-weight)] text-[length:var(--body-normal-font-size)] leading-[var(--body-normal-line-height)] relative w-fit text-neutral-200 tracking-[var(--body-normal-letter-spacing)] whitespace-nowrap [font-style:var(--body-normal-font-style)]">
                    Media + Press
                  </div>
                  <div className="font-body-normal font-[number:var(--body-normal-font-weight)] text-[length:var(--body-normal-font-size)] leading-[var(--body-normal-line-height)] relative w-fit text-neutral-200 tracking-[var(--body-normal-letter-spacing)] whitespace-nowrap [font-style:var(--body-normal-font-style)]">
                    Contact Us
                  </div>
                  <div className="font-body-normal font-[number:var(--body-normal-font-weight)] text-[length:var(--body-normal-font-size)] leading-[var(--body-normal-line-height)] relative w-fit text-neutral-200 tracking-[var(--body-normal-letter-spacing)] whitespace-nowrap [font-style:var(--body-normal-font-style)]">
                    About
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col items-center gap-8 relative flex-[0_0_auto]">
              <img
                className="relative flex-[0_0_auto]"
                alt="Frame"
                src="/img/frame-51.svg"
              />
              <div className="inline-flex items-start gap-8 relative flex-[0_0_auto]">
                <div className="mt-[-1.00px] font-body-normal font-[number:var(--body-normal-font-weight)] text-[length:var(--body-normal-font-size)] leading-[var(--body-normal-line-height)] relative w-fit text-neutral-200 tracking-[var(--body-normal-letter-spacing)] whitespace-nowrap [font-style:var(--body-normal-font-style)]">
                  Terms of service
                </div>
                <div className="mt-[-1.00px] font-body-normal font-[number:var(--body-normal-font-weight)] text-[length:var(--body-normal-font-size)] leading-[var(--body-normal-line-height)] relative w-fit text-neutral-200 tracking-[var(--body-normal-letter-spacing)] whitespace-nowrap [font-style:var(--body-normal-font-style)]">
                  Privacy policy
                </div>
              </div>
              <p className="font-body-small-heavy font-[number:var(--body-small-heavy-font-weight)] text-[length:var(--body-small-heavy-font-size)] leading-[var(--body-small-heavy-line-height)] relative w-fit text-neutral-200 tracking-[var(--body-small-heavy-letter-spacing)] whitespace-nowrap [font-style:var(--body-small-heavy-font-style)]">
                © 2024 FlowSpark Digital LLC
              </p>
            </div>
          </footer>
        </div>
      </div>{" "}
    </>
  );
}
