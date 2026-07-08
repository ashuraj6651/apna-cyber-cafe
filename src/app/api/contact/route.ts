import { NextRequest, NextResponse } from 'next/server';

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

    console.log('Contact message received:', { name, email, message });

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully!',
    });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid request' },
      { status: 400 }
    );
  }
}