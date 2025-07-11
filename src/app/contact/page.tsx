import { MessageCircleHeart } from "lucide-react";
import FormComponent from "./components/Form"
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
        </main>
    )
}
