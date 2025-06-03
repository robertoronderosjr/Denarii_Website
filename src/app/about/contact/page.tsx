"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // No backend logic yet
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900" />
        <Image
          src="/grid.svg"
          alt="Background Grid"
          fill
          className="opacity-10"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-[url('/contact-bg.jpg')] bg-cover bg-center opacity-5" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Let's Build Something
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600">
                    {" "}
                    Amazing Together
                  </span>
                </h1>
                <p className="text-xl text-gray-300 max-w-xl">
                  Have a question or want to work with Denarii Labs? Our team is
                  here to help you succeed in the Web3 space.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-purple-500/10 p-3">
                    <Mail className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Email Us
                    </h3>
                    <p className="text-gray-300">contact@denariilabs.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-purple-500/10 p-3">
                    <MapPin className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Visit Us
                    </h3>
                    <p className="text-gray-300">San Francisco, CA</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-purple-500/10 p-3">
                    <Phone className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Call Us
                    </h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 rounded-2xl border border-purple-700/30 shadow-2xl p-8 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-purple-200 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-700 bg-gray-900/50 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-purple-200 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-700 bg-gray-900/50 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-purple-200 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full rounded-lg border border-gray-700 bg-gray-900/50 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition-all duration-200"
                    placeholder="How can we help you?"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold py-3 text-lg rounded-lg shadow-md hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {submitted ? (
                    "Message Sent!"
                  ) : (
                    <>
                      Send Message
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
