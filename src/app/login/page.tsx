"use client";

import { useRouter } from 'next/navigation';

export default function LoginPage() {

    const Router = useRouter()

function handleLogin() {
    const password = document.querySelector('#inputpw') as HTMLInputElement;
    fetch('/api/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: password.value }),
    })
    .then(response => {
        if (response.ok) {
            Router.push('/admin/dashboard/');
            console.log("Login successful");
        } else {
            console.log("Login failed");
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
    console.log("Login attempted");
}

return (
    <main className="flex flex-col items-center justify-center">
        <div className="flex flex-col card gap-8">
            <div>
            <h2 className="text-center border-b">RESTRICTED</h2>
            <p className="text-xs">Please enter your credentials to access the protected area.</p>
            </div>
            <div className="flex flex-col gap-2">
            <input id="inputpw" className="border-2 p-1 text-center" placeholder="" type="password" maxLength={6} inputMode="numeric"></input>
            <button onClick={handleLogin}>Login</button>
            </div>
      </div>
    </main>
)}