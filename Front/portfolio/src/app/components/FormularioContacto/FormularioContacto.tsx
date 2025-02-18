"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Text length validation
    if (formData.name.length < 2 || formData.name.length > 50) {
      Swal.fire({
        icon: "warning",
        title: "Invalid Name",
        text: "The name must be between 2 and 50 characters.",
      });
      return;
    }

    if (!/^[\w-.]+@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)) {
      Swal.fire({
        icon: "warning",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
      });
      return;
    }

    if (formData.message.length < 10 || formData.message.length > 500) {
      Swal.fire({
        icon: "warning",
        title: "Invalid Message",
        text: "The message must be between 10 and 500 characters.",
      });
      return;
    }

    setIsSending(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Message Sent",
          text: "Your message has been sent successfully.",
        });
        setFormData({ name: "", email: "", message: "" }); // Clear the form
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "There was a problem sending the message. Please try again.",
        });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <div className="flex justify-center mb-6">
        <h2 className="text-4xl font-bold text-gray-800">Contact</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              minLength={2}
              maxLength={50}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg text-black !important"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg text-black !important"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            minLength={10}
            maxLength={500}
            rows={6}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg text-black !important"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSending}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {isSending ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
