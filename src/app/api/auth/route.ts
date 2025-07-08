import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { password } = await req.json();

  console.log('Received password:', password);

  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ success: false }, { status: 401 });
  }

  const res = NextResponse.json({ success: true });
  res.cookies.set('admin-auth', '1', { httpOnly: false, maxAge: 60 * 60 * 24 }); // 1 Tag
  return res;
}