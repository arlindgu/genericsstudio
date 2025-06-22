"use client"

import Form from 'next/form'
import { motion } from 'motion/react';
import { useState } from 'react';
import { Check, X } from 'lucide-react'

export default function ContactPage() {

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
            console.error('Error sending message:', error);
            alert('There was an error sending your message. Please try again later.');
        }
        );
    }

    return (
        <main className='flex flex-col items-center justify-center'>
            {sent && !error ? (
                <div className="flex flex-col items-center justify-center gap-4">
                    <Check stroke='green' />
                    <p className='text-center'>Your inquiry has been sent. Please wait patiently for an answer.</p>
                </div>
            ) : !sent && error ? (
                <div className="flex flex-col items-center justify-center gap-4">
                    <X stroke="red" />
                    <p className='text-center'>There has been an Error. Please try again later. If this error persists, feel free to reach out manually.</p>
                    <a href="mailto:hey@arlind.io" className='text-center'> hey@arlind.io</a>
                </div>
            ) :
                <motion.section
                    animate={{ y: 0, opacity: 1 }}
                    initial={{ y: 10, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut", delay: 0 }}
                    className="flex flex-col items-center justify-center w-full">
                    <div className='text-center mb-8'>
                        <h1>Contact</h1>
                        <p>Let&#39;s create something which has a soul to it.</p>
                    </div>

                    <Form action={sendInquiry} className="flex flex-col gap-4 w-full max-w-md bg-background p-8 border border-white">
                        <motion.div
                            animate={{ y: 0, opacity: 1 }}
                            initial={{ y: 10, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut", delay: 0 }}
                            className="flex flex-col">
                            <div className='flex flex-row justify-between items-center'>
                                <p>NAME</p>
                                <p className='font-serif italic opacity-50'>required</p>

                            </div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                className="border px-3 py-2"
                                required
                            />
                        </motion.div>

                        <motion.div
                            animate={{ y: 0, opacity: 1 }}
                            initial={{ y: 10, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
                            className="flex flex-col">
                            <div className='flex flex-row justify-between items-center'>
                                <p>EMAIL</p>
                                <p className='font-serif italic opacity-50'>required</p>

                            </div>

                            <input
                                type="email"
                                name="email"
                                placeholder="example@example.com"
                                className="border px-3 py-2 focus:outline-none focus:bg-neutral- transition-colors duration-200"
                                required
                            />
                        </motion.div >
                        <motion.div
                            animate={{ y: 0, opacity: 1 }}
                            initial={{ y: 10, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
                            className="flex flex-col">
                            <p>WEBSITE</p>
                            <input
                                type="text"
                                name="website"
                                placeholder="Website URL"
                                className="border px-3 py-2"
                            />
                        </motion.div >
                        <motion.div
                            animate={{ y: 0, opacity: 1 }}
                            initial={{ y: 10, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
                            className="flex flex-col">
                            <p>PROJECT NAME</p>
                            <input
                                type="text"
                                name="projectName"
                                placeholder="Project Name"
                                className="border px-3 py-2"
                            />
                        </motion.div>
                        <motion.div
                            animate={{ y: 0, opacity: 1 }}
                            initial={{ y: 10, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
                            className="flex flex-col">
                            <p>DETAILS</p>
                            <textarea
                                name="details"
                                placeholder="Details about your project"
                                className="border px-3 py-2"
                                rows={4}
                            />
                        </motion.div>
                        <motion.button
                            animate={{ y: 0, opacity: 1 }}
                            initial={{ y: 10, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
                            type="submit"
                            className="bg-white text-black p-2"
                        >
                            Send Message
                        </motion.button>
                    </Form>

                </motion.section>
            }
        </main>
    )
}
