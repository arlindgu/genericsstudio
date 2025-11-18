"use client";

import { Button } from "../ui/button";
import { Chair } from "../svgs/chair";

export default function Hero() {
    return (
      <section
        className="text-center relative min-h-screen
       flex flex-col items-center justify-center"
      >
        <div className="z-1">
          <h1 className="text-7xl font-bold">
            Until logic breaks <br /> or beauty wins
          </h1>
          <div>
            <Button className="mt-8" size="lg">
              Get in touch
            </Button>
            <Button className="mt-8 ml-4" variant="ghost" size="lg">
              See our work
            </Button>
          </div>
        </div>
        <Chair className="w-64 h-64 mt-12 z-1" />
      </section>
    );
}
