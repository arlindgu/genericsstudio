import Image from "next/image";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between h-full w-full">
      <h1 className="font-bold text-3xl italic">arlind's portfolio</h1>

      <div className="flex flex-col gap-8">
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-2">
            <h1>Content</h1>
            <a className="text-sm break-words max-w-xs">this is my portfolio website, have fun with it (you can't do much with it tbh.)</a>
          </div>
          <div className="flex flex-col gap-2">
            <h1>Profile</h1>
            <div className="flex flex-col">
              <a href="mailto:hey@arlind.io?subject=hey">self-taught programmer</a>
              <a href="tel:0798966996">self-taught designer</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full justify-center text-center">
          <h1>Contact</h1>
          <div className="flex flex-col justify-between">
            <a href="mailto:hey@arlind.io?subject=hey">hey@arlind.io</a>
            <a href="tel:0798966996">+41 79 896 69 96</a>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4" />
    </main>
  );
}
