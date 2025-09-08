"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import SearchForm from "@/components/SearchForm";

export function BackgroundBoxesDemo() {
  return (
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
  );
}
