import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";
import { FiSend } from "react-icons/fi";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Contact background"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 space-y-10">
        {/* 🔹 PROFILE IMAGE (TOP) */}
        <div className="mb-4 relative w-[130px] h-[130px] backdrop-blur-lg bg-white/10 border border-white/20 p-2 rounded-full shadow-xl overflow-hidden">
          <Image
            src="/profile2.jpg"
            alt="Profile Image"
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          {/* 🔹 TITLE WITH ICON */}
          <div className="flex items-center gap-3">
            <FiSend className="text-accent text-3xl" />
            <h1 className="text-accent font-semibold text-center text-4xl capitalize">
              Get In Touch
            </h1>
          </div>

          {/* DESCRIPTION */}
          <p className="text-center font-light text-sm xs:text-base">
            I am always open to new opportunities, collaborations, freelance
            projects, and professional roles where I can contribute and grow as
            a developer. Feel free to send a message and let’s build something
            meaningful together.
          </p>
        </div>

        <Form />
      </article>
    </>
  );
}
