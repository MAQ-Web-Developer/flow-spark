/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Lead` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Booking_email_key" ON "Booking"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Lead_email_key" ON "Lead"("email");
