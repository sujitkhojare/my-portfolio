import React from "react";
import '../styles/tailwind.css';

const UniversityTopper = () => (
  <section className="my-12">
    {/* Heading outside the card */}
    <h2 className="text-2xl font-bold mb-4">University Topper</h2>

    {/* Card for the description */}
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <p className="text-lg text-gray-700">
        Awarded the University Topper Academic Achievement Award for exceptional performance and academic excellence throughout the course of study.
      </p>
    </div>
  </section>
);

export default UniversityTopper;
