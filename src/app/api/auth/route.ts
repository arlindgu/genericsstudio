import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  const { password } = await req.json();

  const isValid = await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH!);

  if (!isValid) {
    return NextResponse.json({ success: false }, { status: 401 });
  }

  const res = NextResponse.json({ success: true });
  res.cookies.set('admin-auth', '1', { httpOnly: false, maxAge: 60 * 60 * 24 }); // 1 Tag
  return res;
}