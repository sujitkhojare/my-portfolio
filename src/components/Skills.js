import React from "react";
import '../styles/tailwind.css';

const Skills = () => (
  <section className="my-12">
    <h2 className="text-2xl font-bold mb-4">Skills</h2>

    {/* Core Skills */}
    <div className="bg-white p-6 rounded-lg shadow-lg mb-8 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-semibold mb-4">Programming Languages</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>Core Java (Java 8, 11, 17)</li>
        <li>JavaScript / React.js / Next.js / TypeScript</li>
        <li>HTML / CSS / Tailwind CSS</li>
      </ul>
    </div>

    {/* Backend & Frameworks */}
    <div className="bg-white p-6 rounded-lg shadow-lg mb-8 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-semibold mb-4">Backend Technologies & Frameworks</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>Spring, Spring Boot, Spring MVC</li>
        <li>REST APIs & Microservices Architecture</li>
        <li>Spring Cloud, Spring Gateway</li>
        <li>JDBC (JdbcTemplate)</li>
        <li>Hibernate ORM, Spring Data JPA</li>
        <li>Servlets, JSP</li>
        <li>MySQL (including triggers)</li>
        <li>PHP (PhpAdmin)</li>
        <li>Swagger Tool</li>
        <li>AWS (Amazon Web Services)</li>
      </ul>
    </div>

    {/* Testing & Tools */}
    <div className="bg-white p-6 rounded-lg shadow-lg mb-8 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-semibold mb-4">Testing & Development Tools</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>JUnit Testing </li>
        <li>Jest Unit Testing, Mockito</li>
        <li>Postman (API Testing)</li>
        <li>SLF4J, Log4j2 (Logging Frameworks)</li>
        <li>Git & GitHub</li>
        <li>JIRA (Project Management)</li>
        <li>Figma (Design Prototyping)</li>
        <li>Agile Methodology</li>
        <li>Maven (Build Tools)</li>
      </ul>
    </div>

  </section>
);

export default Skills;
