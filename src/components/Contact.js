// src/components/Contact.js
import React from "react";
import '../styles/tailwind.css';

const Contact = () => (
  <section className="my-12">
    <h2 className="text-2xl font-bold mb-4">Contact</h2>
    <div className="bg-white p-6 rounded shadow-lg">
      <p>Email: sujitkhojare24@gmail.com</p>
      <p>Phone: 7887415519</p>
      <p>Location: Pune, India</p>
      <p>LinkedIn: <a href="https://linkedin.com/in/sujit-khojare-intelalgos-technologies-pvt-ltd-a6376421b" className="text-blue-600">linkedin.com/in/sujit-khojare</a></p>
    </div>
  </section>
);

export default Contact;
