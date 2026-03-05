import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";

const HatModel = dynamic(() => import("@/components/models/HatModel"), {
  ssr: false,
});

export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="About background"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      {/* 3D Model */}
      <div
        className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] 
                h-3/5 xs:h-3/4 sm:h-screen 
                absolute top-1/2 -translate-y-1/2 
                left-1/2 -translate-x-1/2 
                z-0 pointer-events-none"
      >
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div>
      {/* HERO SECTION */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center text-center">
        {/* Profile Image */}
<div className="mb-4 relative w-[130px] h-[130px] backdrop-blur-lg bg-white/10 border border-white/20 p-2 rounded-full shadow-xl overflow-hidden">
  <Image
    src="/profile2.jpg"
    alt="Profile Image"
    fill
    className="object-cover rounded-full"
  />
</div>

        {/* Name */}
        <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-accent">
          Mokim
        </h1>

        {/* Title */}
        <p className="mt-2 font-light text-sm sm:text-base text-foreground opacity-80">
          Full Stack Developer | React & Next.js Enthusiast
        </p>
      </div>

      <AboutDetails />
    </>
  );
}
