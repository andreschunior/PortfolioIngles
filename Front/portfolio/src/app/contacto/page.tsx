// app/contacto/page.tsx
import React from "react";
import ContactForm from "../components/FormularioContacto/FormularioContacto";

const ContactPage: React.FC = () => {
  return (
    <div className="p-4 max-w-md mx-auto">
      <ContactForm />
    </div>
  );
};

export default ContactPage;
