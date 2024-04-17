"use client";

import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col justify-center items-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-50 to-blue-400 tracking-tight">
          Master The Art Of Music
        </h1>
        <p className="text-2xl mt-4 bg-clip-text text-transparent bg-gradient-to-b from-blue-50 to-blue-400 tracking-tight text-wrap">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nisi
          fugiat natus molestias adipisci fuga aliquam iusto expedita, quia et
          minus illo quidem accusantium in vel quae quisquam voluptatibus fugit.
        </p>
        <div className="mt-4 bg-clip-text text-transparent bg-gradient-to-b from-blue-50 to-blue-400 ">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-netural-200 dark:border-slate-800"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
