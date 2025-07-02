"use client"

import FormComponent from "./components/Form"
import Steps from "./components/Steps"



export default function ContactPage() {



    return (
        <main className='flex flex-col items-center justify-center gap-8'>
            <div className='text-center mb-8'>
                <h1>Contact</h1>
                <p>Let&#39;s create something which has a soul to it.</p>
            </div>
            <FormComponent />
            <div className="text-center">
                <h2>How will the process be?</h2>
                <p>After you submitted your inquiry, the following steps will occur.</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 w-full max-w-2xl">
<Steps step={1}>You send us an inquiry.</Steps>
<Steps step={2}>We review it.</Steps>
<Steps step={3}>We get in touch with you.</Steps>
<Steps step={4}>We talk about your ideas and vision.</Steps>
<Steps step={5}>We send you an offer.</Steps>
<Steps step={6}>If you accept the offer, we start building your magical new website.</Steps>
<Steps step={7}>You’ll always get support whenever needed or if changes come up.</Steps>
<Steps step={8}>We’ll keep in touch and make sure your website stays up to date.</Steps>
            </div>
        </main>
    )
}
