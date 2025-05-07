"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";
import Link from 'next/link';
export function BackgroundBoxes() {
    return (
        <div className="h-screen absolute top-0 left-0 w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            <Boxes />
            <h1 className={cn("md:text-4xl  text-4xl text-white relative z-20")}>
                Welcome!
            </h1>
            <p className="text-center  max-w-300 px-2  mt-4 text-neutral-300 relative z-20">
                This is a collection of notes that I've taken during my exploration into cybersecurity.
            </p>
            <p className="text-center  max-w-300 px-2 mt-6 text-neutral-300 relative z-20">
                These are for my own personal purposes as a way to have global access to my notes without the need of 3rd party software.
            </p>
            <p className="text-center italic max-w-300 mt-8 px-2 text-neutral-300 relative z-20">
                There is nothing found in these documents that can't be found elsewhere.
                That is how I compiled these notes!
                Should anyone discover this, I congratulate you!
                There is a lot to discover and learn, and everything here is free and for educational purposes only!
                I will not be held responsible for anything, anyone is able to learn from my documentation, and all
                experiments should be done with written permission or not be experimented with at all.
            </p>
            <Link href={'/docs'} className="z-10">
                <button className="px-8 py-2 mt-10 rounded-lg bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
                    Get Started
                </button>
            </Link>
        </div>
    );
}
