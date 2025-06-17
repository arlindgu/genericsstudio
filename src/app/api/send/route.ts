import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';
import * as React from 'react';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

console.log('Resend API Key:', process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    const body = await request.json();
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['arlind.gurgurovci@gmail.com'],
      subject: "NEW INQUIRY",
      react: EmailTemplate({ 
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