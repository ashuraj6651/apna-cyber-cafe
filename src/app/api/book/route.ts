import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, service, date, time } = body;

    if (!name || !phone || !service || !date || !time) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    const appointment = await db.appointment.create({
      data: { name, phone, service, date, time },
    });

    return NextResponse.json({
      success: true,
      message: 'Appointment booked successfully!',
      appointment,
    });
  } catch (err) {
    console.error('Booking error:', err);
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

// Optional: list all bookings (useful for an admin page later)
export async function GET() {
  const appointments = await db.appointment.findMany({
    orderBy: { createdAt: 'desc' },
  });
  return NextResponse.json({ success: true, appointments });
}