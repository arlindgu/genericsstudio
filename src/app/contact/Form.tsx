"use client";

import Form from 'next/form'
import { useState } from 'react';
import { Check, X } from 'lucide-react'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

export default function FormComponent() {

    const [sent, isSent] = useState(false)
    const [error, setError] = useState(false)

    function sendInquiry(FormData: FormData) {

        const data = {
            name: FormData.get('name'),
            email: FormData.get('email'),
            website: FormData.get('website'),
            projectName: FormData.get('projectName'),
            details: FormData.get('details'),
        };

        fetch('/api/send', {
            method: 'POST',
            body: JSON.stringify(data),
        }).then(response => {
            if (response.ok) {
                isSent(true);
                setError(false);
            } else {
                isSent(false);
                setError(true);
            }
        }
        ).catch(error => {
            console.error('Fehler beim senden der Nachricht:', error);
            alert('Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.');
        }
        );
    }

    return (
      <div className="flex md:w-xl lg:w-3xl mx-auto">
        {sent && !error ? (
          <div className="flex flex-col items-center justify-center gap-4 mx-auto">
            <Check stroke="#211912" />
            <p className="text-center">
              Vielen Dank für Ihre Nachricht! Wir werden uns so schnell wie
              möglich bei Ihnen melden.
            </p>
          </div>
        ) : !sent && error ? (
          <div className="flex flex-col items-center justify-center gap-4 mx-auto">
            <X stroke="#211912" />
            <p className="text-center">
              Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen
              Sie es später erneut oder kontaktieren Sie uns direkt per E-Mail.
            </p>
            <a href="mailto:info@generics.studio" className="text-center">
              info@generics.studio
            </a>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center w-full">
            <Card className='w-full'>
              <CardContent>
                <Form
                  action={sendInquiry}
                  className="flex flex-col gap-4"
                >
                  <div className="flex flex-col">
                    <div className="flex flex-row justify-between items-center mb-1">
                      <Label>Vollständiger Name</Label>
                      <Label className="italic text-sm text-muted-foreground">
                        erforderlich
                      </Label>
                    </div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Max Mustermann"
                      className="border px-3 py-2"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-row justify-between items-center mb-1">
                      <Label>E-Mail Adresse</Label>
                      <Label className="italic text-sm text-muted-foreground">
                        erforderlich
                      </Label>
                    </div>

                    <Input
                      type="email"
                      name="email"
                      placeholder="max.mustermann@example.com"
                      className="border px-3 py-2 focus:outline-none focus:bg-neutral- transition-colors duration-200"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <Label className="mb-1">Webseite</Label>
                    <Input
                      type="text"
                      name="website"
                      placeholder="example.com"
                      className="border px-3 py-2"
                    />
                  </div>
                  <div className="flex flex-col">
                    <Label className="mb-1">Projektname</Label>
                    <Input
                      type="text"
                      name="projectName"
                      placeholder="Max Bekleidungsstore"
                      className="border px-3 py-2"
                    />
                  </div>
                  <div className="flex flex-col">
                    <Label className="mb-1">Details</Label>
                    <Textarea
                      name="details"
                      placeholder="Mein Projekt besteht darin, eine moderne E-Commerce-Website für meine Bekleidungsmarke zu erstellen. Ich benötige ein responsives Design, SEO-Optimierung und eine benutzerfreundliche Oberfläche."
                      className="border px-3 py-2 h-fit min-h-36"
                    />
                  </div>
                  <Button type="submit">Nachricht versenden</Button>
                </Form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    );
}