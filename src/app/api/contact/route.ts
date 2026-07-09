import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !message) {
      return NextResponse.json(
        { success: false, message: 'Name and message are required' },
        { status: 400 }
      );
    }

    const saved = await db.message.create({
      data: { name, email: email || '', message },
    });

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully!',
      saved,
    });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

// Optional: list all messages (useful for an admin page later)
export async function GET() {
  const messages = await db.message.findMany({
    orderBy: { createdAt: 'desc' },
  });
  return NextResponse.json({ success: true, messages });
}