// src/components/Experience.js
import React from "react";
import '../styles/tailwind.css';

const Experience = () => (
  <section className="my-12">
    <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
    <div className="bg-white p-6 rounded shadow-lg">
      <h3 className="text-xl font-semibold">Software Engineer</h3>
      <p className="text-gray-600">Intelalgos Technologies Pvt Ltd | 07/2024 – Present | Pune, India</p>
      <ul className="list-disc pl-5 mt-2">
        <li>Collaborated with cross-functional teams to identify system requirements, improving software functionality and user experience.</li>
        <li>Enhanced coding proficiency by 30% through Agile practices, active code reviews, and expert integration of RESTful services.</li>
        <li>Developed high-quality, scalable code for various projects, utilizing tools like Postman, Swagger, JWT, and Spring Boot.</li>
        <li>Followed security best practices, including data encryption, access control, and input validation to safeguard user data.</li>
      </ul>
    </div>
  </section>
);

export default Experience;
