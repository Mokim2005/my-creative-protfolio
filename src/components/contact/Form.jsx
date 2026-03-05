"use client";
import React, { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import gsap from "gsap";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export default function Form() {
  const formRef = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  const onSubmit = async (data) => {
    const result = await Swal.fire({
      title: "Send Message?",
      text: "Are you sure you want to send this message?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#6366f1",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, Send",
      background: "#1f2937",
      color: "#ffffff",
    });

    if (!result.isConfirmed) return;

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        {
          from_name: data.name,
          reply_to: data.email,
          message: data.message,
        },
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      );

      Swal.fire({
        title: "Success!",
        text: "Message sent successfully.",
        icon: "success",
        confirmButtonColor: "#22c55e",
        background: "#1f2937",
        color: "#ffffff",
      });

      reset();
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to send message.",
        icon: "error",
        confirmButtonColor: "#ef4444",
        background: "#1f2937",
        color: "#ffffff",
      });
    }
  };

  return (
    <section className="w-full py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* LEFT SIDE */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-6 rounded-2xl shadow-xl space-y-6 text-white">
          <h2 className="text-2xl font-semibold">Contact Information</h2>

          <div className="space-y-4 text-sm md:text-base">

            <div className="flex items-center gap-3">
              <FiMail className="text-indigo-400 text-lg" />
              <span className="text-gray-200">
                mamokim2005@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FiPhone className="text-indigo-400 text-lg" />
              <span className="text-gray-200">
                +8801729434323
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FiMapPin className="text-indigo-400 text-lg" />
              <span className="text-gray-200">
                Dinajpur, Bangladesh
              </span>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className="backdrop-blur-lg bg-white/10 border border-white/20 p-6 rounded-2xl shadow-xl space-y-4"
        >

          <input
            type="text"
            placeholder="Your Name"
            {...register("name", { required: true })}
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.name && (
            <p className="text-red-400 text-sm">Name is required</p>
          )}

          <input
            type="email"
            placeholder="Your Email"
            {...register("email", { required: true })}
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.email && (
            <p className="text-red-400 text-sm">Email is required</p>
          )}

          <textarea
            rows="5"
            placeholder="Your Message"
            {...register("message", { required: true })}
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.message && (
            <p className="text-red-400 text-sm">Message is required</p>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition text-white font-semibold"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}