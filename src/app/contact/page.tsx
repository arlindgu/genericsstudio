"use client"

import FormComponent from "./components/Form"
import Steps from "./components/Steps"
import PageTitle from "@/components/ui/PageTitle";



export default function ContactPage() {



    return (
        <main className='flex flex-col items-center justify-center gap-8'>
            <div className='text-center'>
                <PageTitle title="Contact Us">We are here to help you with your project. Fill out the form below to get in touch with us.</PageTitle>
            </div>
            <FormComponent />
            <div className="text-center hidden">
                <h2>How will the process be?</h2>
                <p>After you submitted your inquiry, the following steps will occur.</p>
            </div>

            <div className="flex-col items-center justify-center gap-4 w-full hidden">
                <Steps step={0}>You send us an inquiry.</Steps>
                <Steps step={1}>We review it.</Steps>
                <Steps step={2}>We get in touch with you.</Steps>
                <Steps step={3}>We talk about your ideas and vision.</Steps>
                <Steps step={4}>We send you an offer.</Steps>
                <Steps step={5}>If you accept the offer, we start building your magical new website.</Steps>
                <Steps step={6}>You’ll always get support whenever needed or if changes come up.</Steps>
                <Steps step={7}>We’ll keep in touch and make sure your website stays up to date.</Steps>
            </div>
        </main>
    )
}
