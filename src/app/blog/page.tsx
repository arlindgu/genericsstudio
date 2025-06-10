import Image from "next/image";

export default function BlogPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-row gap-8">
          <div className="flex flex-col max-w-80">
            <h1>WELCOME TO MY BLOG</h1>
            <div className="flex flex-col text-sm">
              <a className="text-sm">this is my portfolio website, have fun with (you can't do much with it tbh.)</a>
            </div>
          </div>
          </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a className="link">blog</a>
        <a className="link" href="https://github.com/arlindgu/">github</a>
        <a className="link">case studies</a>
      </footer>
    </div>
  );
}
