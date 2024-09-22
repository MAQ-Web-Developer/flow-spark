import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const date = searchParams.get("date");

  if (!date) {
    return NextResponse.json(
      { error: "Date parameter is missing" },
      { status: 400 }
    );
  }

  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(date)) {
    return NextResponse.json(
      { error: "Invalid date format. Expected YYYY-MM-DD." },
      { status: 400 }
    );
  }

  try {
    const bookings = await prisma.booking.findMany({
      where: {
        date: new Date(date),
      },
      select: {
        time: true,
      },
    });

    if (bookings.length === 0) {
      return NextResponse.json(
        { message: "No bookings found for the selected date" },
        { status: 200 }
      );
    }

    const bookedTimes = bookings.map((booking) => booking.time);

    return NextResponse.json({ bookedTimes }, { status: 200 });
  } catch (error) {
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

  if (!date || !time || !fullName || !email || !phoneNumber) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const isoDate = new Date(date);
  if (isNaN(isoDate.getTime())) {
    return NextResponse.json({ error: "Invalid date format" }, { status: 400 });
  }

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
