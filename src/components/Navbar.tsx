"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image"; // Import Image component

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-4xl mx-auto z-50  ",
        className
      )}
    >
      <div className="">
        <Menu setActive={setActive}>
          <div className="grid grid-cols-3 ">
            <div className="">
              <div className="text-black dark:text-black text-2xl">
                <Link href={"/"}>
                  {/* Replace <img> with <Image> */}
                  <Image
                    src="/logo.jpg"
                    alt="Company Logo"
                    width={50} // Adjust width as needed
                    height={50} // Adjust height as needed
                    className="h-6 w-auto rounded-full"
                  ></Image>
                </Link>
              </div>
            </div>

            <div></div>

            <div className="flex space-x-4">
              <Link href={"/"}>
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="Home"
                ></MenuItem>
              </Link>
              <Link href={"/courses"}>
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="Our Courses"
                >
                  <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/courses">All Courses</HoveredLink>
                    <HoveredLink href="/basicmusictheory">
                      Basic Music Theory
                    </HoveredLink>
                    <HoveredLink href="/advancecomposition">
                      Advance Composition
                    </HoveredLink>
                    <HoveredLink href="/songwriting">Songwriting</HoveredLink>
                    <HoveredLink href="/musicproduction">
                      Music Production
                    </HoveredLink>
                  </div>
                </MenuItem>
              </Link>
              <Link href={"/contact"}>
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="Contact Us"
                ></MenuItem>
              </Link>
            </div>
          </div>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
