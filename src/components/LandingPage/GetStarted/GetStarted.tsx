"use client";

import { Button } from "@/components/ui/button";
import { Ubuntu } from "@next/font/google";

const ubuntu = Ubuntu({
    subsets: ["latin"],
    weight: ["500", "700"],
  });


export default function GetStarted() {
  return (
    <section className="w-full py-32 bg-[#070314] flex flex-col items-center justify-center text-center">
        
      <h1 className={`${ubuntu.className} text-4xl md:text-5xl font-bold text-white mb-8`}>
        Let AI handle the heavy lifting while you focus
      </h1>
      <Button className="px-6 py-3 text-lg font-semibold rounded-mdd- bg-white text-black hover:bg-zinc-300 hover:text-black transition-opacity duration-300">
        Get started free
      </Button>
    </section>
  );
}
