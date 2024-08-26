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

    // Validación de longitud de texto
    if (formData.name.length < 2 || formData.name.length > 50) {
      Swal.fire({
        icon: "warning",
        title: "Nombre inválido",
        text: "El nombre debe tener entre 2 y 50 caracteres.",
      });
      return;
    }

    if (!/^[\w-.]+@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)) {
      Swal.fire({
        icon: "warning",
        title: "Correo inválido",
        text: "Introduce un correo electrónico válido.",
      });
      return;
    }

    if (formData.message.length < 10 || formData.message.length > 500) {
      Swal.fire({
        icon: "warning",
        title: "Mensaje inválido",
        text: "El mensaje debe tener entre 10 y 500 caracteres.",
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
          title: "Mensaje Enviado",
          text: "Tu mensaje ha sido enviado con éxito.",
        });
        setFormData({ name: "", email: "", message: "" }); // Limpia el formulario
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un problema al enviar el mensaje. Inténtalo de nuevo.",
        });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <div className="flex justify-center mb-6">
        <h2 className="text-4xl font-bold text-gray-800">Contacto</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nombre
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
              Correo Electrónico
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
            Mensaje
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
            {isSending ? "Enviando..." : "Enviar"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
