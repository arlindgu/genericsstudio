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
        <main className='flex flex-col items-center justify-center'
        >
            {sent && !error ? (
                <div className="flex flex-col items-center justify-center gap-4">
                    <Check stroke='#211912' />
                    <p className='text-center'>Your inquiry has been sent. Please wait patiently for an answer.</p>
                </div>
            ) : !sent && error ? (
                <div className="flex flex-col items-center justify-center gap-4">
                    <X stroke="#211912" />
                    <p className='text-center'>There has been an Error. Please try again later. If this error persists, feel free to reach out manually.</p>
                    <a href="mailto:hey@arlind.io" className='text-center'>info@generics.studio</a>
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

                    <Form action={sendInquiry} className="flex flex-col gap-4 w-full max-w-xl p-8 border border-licorice">
                        <motion.div
                            animate={{ y: 0, opacity: 1 }}
                            initial={{ y: 10, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut", delay: 0 }}
                            className="flex flex-col">
                            <div className='flex flex-row justify-between items-center'>
                                <p>Full Name</p>
                                <p className='text-sm italic text-neutral-400'>required</p>

                            </div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Max Mustermann"
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
                                <p>E-Mail Adress</p>
                                <p className='italic text-sm text-neutral-400'>required</p>

                            </div>

                            <input
                                type="email"
                                name="email"
                                placeholder="max.mustermann@example.com"
                                className="border px-3 py-2 focus:outline-none focus:bg-neutral- transition-colors duration-200"
                                required
                            />
                        </motion.div >
                        <motion.div
                            animate={{ y: 0, opacity: 1 }}
                            initial={{ y: 10, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
                            className="flex flex-col">
                            <p>Website</p>
                            <input
                                type="text"
                                name="website"
                                placeholder="example.com"
                                className="border px-3 py-2"
                            />
                        </motion.div >
                        <motion.div
                            animate={{ y: 0, opacity: 1 }}
                            initial={{ y: 10, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
                            className="flex flex-col">
                            <p>Prject Name</p>
                            <input
                                type="text"
                                name="projectName"
                                placeholder="Max Clothing Store"
                                className="border px-3 py-2"
                            />
                        </motion.div>
                        <motion.div
                            animate={{ y: 0, opacity: 1 }}
                            initial={{ y: 10, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
                            className="flex flex-col">
                            <p>Details</p>
                            <textarea
                                name="details"
                                placeholder="My project is about creating a modern e-commerce website for my clothing brand. I need a responsive design, SEO optimization, and a user-friendly interface."
                                className="border px-3 py-2"
                                rows={4}
                            />
                        </motion.div>
                        <motion.button
                            animate={{ y: 0, opacity: 1 }}
                            initial={{ y: 10, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
                            type="submit"
                        >
                            Send Message
                        </motion.button>
                    </Form>

                </motion.section>
            }
        </main>
    )
}
