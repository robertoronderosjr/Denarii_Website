"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

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
    <section className="py-24 min-h-[60vh] flex items-center">
      <div className="container px-4 md:px-6 mx-auto max-w-xl">
        <h1 className="text-4xl font-bold md:text-5xl text-white mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-lg text-gray-300 mb-10 text-center">
          Have a question or want to work with Denarii Labs? Fill out the form
          below and our team will get back to you.
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 rounded-2xl border border-purple-700/30 shadow-xl p-8 space-y-6"
        >
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
              className="w-full rounded-lg border border-gray-700 bg-gray-900 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
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
              className="w-full rounded-lg border border-gray-700 bg-gray-900 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
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
              className="w-full rounded-lg border border-gray-700 bg-gray-900 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold py-3 text-lg rounded-lg shadow-md hover:scale-105 transition-all duration-300"
          >
            {submitted ? "Submitted!" : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
}
