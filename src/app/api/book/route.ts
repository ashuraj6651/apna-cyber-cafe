import { NextRequest, NextResponse } from 'next/server';

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

    // In production, save to database
    console.log('Booking received:', { name, phone, service, date, time });

    return NextResponse.json({
      success: true,
      message: 'Appointment booked successfully!',
    });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid request' },
      { status: 400 }
    );
  }
}