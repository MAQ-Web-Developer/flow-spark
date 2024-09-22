import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { fullName, email, checkbox } = await req.json();

    // Basic validation
    if (!fullName || !email || typeof checkbox === "undefined") {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Checkbox validation (ensure it's a boolean)
    if (typeof checkbox !== "boolean") {
      return NextResponse.json(
        { error: "Checkbox must be set to true or false" },
        { status: 400 }
      );
    }

    // Store validated data in the Lead table
    const lead = await prisma.lead.create({
      data: {
        fullName,
        email,
        checkbox,
      },
    });

    return NextResponse.json(lead, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create lead" },
      { status: 500 }
    );
  }
}
