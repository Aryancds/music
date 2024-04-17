"use client";

import Link from "next/link";
import { Spotlight, Spotlightr } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div
      className="h-auto
     space-y-4 md:h-[40rem] w-full rounded-md flex flex-col justify-center items-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="p-4 relative z-10 w-full text-center text-wrap space-y-4">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-black dark:text-cyan-200 ">
          Master The Art Of Music
        </h1>

        <p className="text-2xl  mt-4 bg-clip-text text-black dark:text-cyan-200 tracking-tight text-wrap">
          Unlock your musical potential at 17 Music School.
        </p>
      </div>

      <div className="mt-4 bg-clip-text">
        <Link href={"/courses"}>
          <Button borderRadius="1.75rem" className="">
            Explore Courses
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
