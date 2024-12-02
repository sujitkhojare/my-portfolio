// src/components/Education.js
import React from "react";
import '../styles/tailwind.css';

const Education = () => (
  <section className="my-12">
    <h2 className="text-2xl font-bold mb-4">Education</h2>
    
    {/* Bachelor of Engineering Section */}
    <div className="bg-white p-6 rounded shadow-lg mb-6">
      <h3 className="text-xl font-semibold">Bachelor of Engineering</h3>
      <p className="text-gray-600">Sipna College of Engineering and Technology, Amravati | 08/2020 – 07/2023</p>
      <p>Graduated with an overall percentage of 83.10%, awarded the University Topper Academic Achievement Award.</p>
    </div>

    {/* Diploma Section */}
    <div className="bg-white p-6 rounded shadow-lg">
      <h3 className="text-xl font-semibold">Diploma</h3>
      <p className="text-gray-600">Government Polytechnic, Amravati | 08/2007 – 07/2020</p>
      <p>Graduated with a percentage of 77.63%.</p>
    </div>
  </section>
);

export default Education;
