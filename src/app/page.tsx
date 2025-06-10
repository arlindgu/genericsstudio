import Image from "next/image";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-8">
              <h1 className="font-bold text-3xl italic">arlind's portfolio</h1>
      <main className="flex flex-col row-start-2 items-center sm:items-start">

        <div className="flex flex-row gap-8">
          <div className="flex flex-col max-w-80">
            <h1>Content</h1>
            <div className="flex flex-col text-sm">
              <a className="text-sm">this is my portfolio website, have fun with (you can't do much with it tbh.)</a>
            </div>
          </div>
          <div className="flex flex-col max-w-80">
            <h1>Contact</h1>
            <div className="flex flex-col text-sm">
              <a href="mailto:hey@arlind.io?subject=hey">hey@arlind.io</a>
              <a href="tel:0798966996">+41 79 896 69 96</a>
            </div>
          </div>
        </div>
      </main>
      </div>
  );
}
