"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import SearchForm from "@/components/SearchForm";
import { ThreeDCardDemo } from "@/components/ThreeDCard";

export function BackgroundBoxesDemo() {
  return (
    <>
      <div className="h-[730px] relative w-full overflow-hidden bg-slate-900 flex flex-col justify-center items-center">
      <div className="absolute inset-0 w-full h-full  z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className="heading relative">
        Tailwind is Awesome
      </h1>
      <p className="sub-heading !max-w-3xl relative">
        Framer motion is the best animation library ngl
      </p>
      <SearchForm />
    </div>

    <section className="section_container">
      <p className="text-30-semibold">
        Trendy Project
      </p>
      <ul className="mt-7 card_grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 justify-center">
        {
          ['1','2','3','4','5'].map((curElem, i) => {
            return <div key={i}>
              <ThreeDCardDemo />
            </div>
          })
        }
      </ul>
    </section>
    </>
  );
}
