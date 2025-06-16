"use client"

import Form from 'next/form'

export default function ContactPage() {

    function sendMessage(formData: FormData) {
        const name = formData.get('name')
        console.log(name)
    }

    return (
        <main className='flex-1 flex flex-col'>
            <div className="flex flex-col m-auto align-center justify-center">
                <a className='font-sans text-center'>Hate your shit?</a>
                <Form action={sendMessage} className='flex flex-col gap-4 mt-4'>
                    <div className='flex flex-col gap-1'>
                        <a>name please</a>
                        <input className="border-white rounded p-2 border" type="text" name="name" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <a>email please</a>
                        <input className="" type="email" name="name" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <a>current website</a>
                        <input className="border-white border" type="url" name="name" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <a>name please</a>
                        <textarea className="border-white border" name="inquiry" />
                    </div>
                    <button>Send Inquiry</button>
                </Form>
            </div>


        </main>
    )
}
