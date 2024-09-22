import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const date = searchParams.get("date"); // Get the date from query params

  // Error: Check if the date parameter is missing
  if (!date) {
    return NextResponse.json(
      { error: "Date parameter is missing" },
      { status: 400 }
    );
  }

  // Error: Validate that the date is in a valid format (optional, but recommended)
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD format
  if (!dateRegex.test(date)) {
    return NextResponse.json(
      { error: "Invalid date format. Expected YYYY-MM-DD." },
      { status: 400 }
    );
  }

  try {
    // Fetch all bookings for the specified date
    const bookings = await prisma.booking.findMany({
      where: {
        date: new Date(date), // Parse the date correctly
      },
      select: {
        time: true, // Only retrieve the `time` field
      },
    });

    // Error: Check if no bookings are found for the given date
    if (bookings.length === 0) {
      return NextResponse.json(
        { message: "No bookings found for the selected date" },
        { status: 200 }
      );
    }

    // Extract the booked time slots
    const bookedTimes = bookings.map((booking) => booking.time);

    return NextResponse.json({ bookedTimes }, { status: 200 });
  } catch (error) {
    // Error: Handle database connection issues or other errors
    console.error("Database query failed:", error);

    return NextResponse.json(
      {
        error:
          "Failed to fetch bookings due to a server error. Please try again later.",
      },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  const {
    date,
    time,
    fullName,
    email,
    phoneNumber,
    callNotes,
    checkbox,
  } = await req.json();

  // Basic validation
  if (!date || !time || !fullName || !email || !phoneNumber) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  // Ensure date is in the correct format
  const isoDate = new Date(date);
  if (isNaN(isoDate.getTime())) {
    return NextResponse.json({ error: "Invalid date format" }, { status: 400 });
  }

  // Email format validation
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Invalid email format" },
      { status: 400 }
    );
  }

  try {
    const booking = await prisma.booking.create({
      data: {
        date: isoDate,
        time,
        fullName,
        email,
        phoneNumber,
        callNotes,
        checkbox,
      },
    });
    return NextResponse.json(booking, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 }
    );
  }
}
