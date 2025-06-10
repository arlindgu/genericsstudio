import Image from "next/image";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between h-full w-full">
      <h1 className="font-bold text-3xl italic">arlind's portfolio</h1>
        <div className="flex flex-row gap-8 items-start border p-10">
          <div className="flex flex-col gap-1">
            <h1>Profile</h1>
            <div className="flex flex-col">
              <a>Student</a>
              <a>Self-Taught</a>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h1>Contact</h1>
            <div className="flex flex-col">
              <a href="mailto:hey@arlind.io?subject=hey">hey@arlind.io</a>
              <a href="tel:0798966996">+41 79 896 69 96</a>
            </div>
            
          </div>
          
        </div>
      <div className="flex flex-row gap-4" />
    </main>
  );
}
