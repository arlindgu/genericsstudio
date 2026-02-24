import { Button } from "../ui/button";
import { Chair } from "../svgs/chair";
import Link from "next/link";

export default function Hero() {
    return (
      <section
        className="text-center relative min-h-screen
       flex flex-col items-center justify-center -mt-16
       "
      >
        <div className="z-1 px-4">
          <h1 className="text-5xl lg:text-7xl font-bold font-mono">
            Until logic breaks <br /> or beauty wins
          </h1>
        </div>
        <Chair className="w-16 lg:w-64 lg:h-64 mt-12 z-1" />
      </section>
    );
}
