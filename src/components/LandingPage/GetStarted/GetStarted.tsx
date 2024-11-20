"use client";

import { Button } from "@/components/ui/button";
  import { Ubuntu } from "next/font/google";

  const ubuntu = Ubuntu({
    subsets: ["latin"],
    weight: ["500", "700"],
  });

interface GetStartedProps {
  background?: string;
  title?: string;
  buttonText?: string;
  buttonLink?: string;
  paddingy?: string;
}

export default function GetStarted({
  background = "bg-[#070314]",
  title = "Let AI handle the heavy lifting while you focus",
  buttonText = "Get started free",
  buttonLink = "#",
  paddingy = "py-32"
  
}: GetStartedProps) {
  return (
    <section className={`w-full ${paddingy} ${background} flex flex-col items-center justify-center text-center`}>
      <h1 className={`${ubuntu.className} m-3 text-4xl md:text-5xl font-bold text-white mb-8`}>
        {title}
      </h1>
      <Button 
        className="px-6 py-3 text-lg font-semibold rounded-md bg-white text-black hover:bg-zinc-300 hover:text-black transition-all duration-300"
        asChild
      >
        <a href={buttonLink}>{buttonText}</a>
      </Button>
    </section>
  );
}