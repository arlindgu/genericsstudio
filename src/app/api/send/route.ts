import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';
import * as React from 'react';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
    const body = await request.json();
  try {
    const { data, error } = await resend.emails.send({
      from: 'INQUIRY <inquiry@generics.studio>',
      to: ['info@generics.studio'],
      subject: "NEW INQUIRY "+ code,
      react: EmailTemplate({ 
        Code: code,
        Name: body.name, 
        Website: body.website,
        Email: body.email, 
        ProjectName: body.projectName,
        Details: body.details
    }) as React.ReactElement,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}