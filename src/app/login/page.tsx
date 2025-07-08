export default function LoginPage() {
return (
    <main className="flex flex-col items-center justify-center">
        <div className="flex flex-col card gap-8">
            <div>
            <h2 className="text-center border-b">RESTRICTED</h2>
            <p className="text-xs">Please enter your credentials to access the protected area.</p>
            </div>
            <div className="flex flex-col gap-2">
            <input className="border-2 p-1 text-center" placeholder="" type="password" maxLength={6} inputMode="numeric"></input>
            <button>Login</button>
            </div>
      </div>
    </main>
)
}