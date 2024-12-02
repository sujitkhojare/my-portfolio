import React from "react";
import '../styles/tailwind.css';

const Projects = () => (
  <section className="my-12">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
    {/* Job Portal - User Side */}
    <div className="bg-white p-6 rounded-lg shadow-lg mb-8 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-semibold mb-2">Job Portal - User Side</h3>
      <p className="text-lg mb-4 text-gray-600">A web application for managing job listings, user profiles, and applications.</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Developed a robust job portal application to help users manage their job applications, projects, and personal profiles, providing a seamless experience in finding and applying for job opportunities.</li>
        <li>Implemented full CRUD operations for projects, allowing users to create, view, edit, and delete projects, effectively building a portfolio within the platform.</li>
        <li>Added job application functionality, enabling users to apply for jobs, view their applied jobs, and edit application details, making the job application process more interactive and efficient.</li>
        <li>Integrated robust profile management features, allowing users to update their personal information, work experience, and job preferences for better engagement and job matching.</li>
      </ul>
    </div>

    {/* QuizMaster */}
    <div className="bg-white p-6 rounded-lg shadow-lg mb-8 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-semibold mb-2">QuizMaster</h3>
      <p className="text-lg mb-4 text-gray-600">MCQ-based quiz application with separate roles for Admin and Students.</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Admin Role: Implemented features for managing MCQs, setting exam durations, and overseeing exam configurations, allowing admins to customize and maintain quizzes effectively.</li>
        <li>Student Experience: Designed a step-by-step question navigation system that allows students to answer one question at a time, update responses, and receive immediate feedback, with comprehensive results displayed post-exam.</li>
        <li>Technologies Used: Java, HTML, CSS, Hibernate, Spring Boot, MySQL.</li>
      </ul>
    </div>

    {/* Job Portal - Company/Client Side */}
    <div className="bg-white p-6 rounded-lg shadow-lg mb-8 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-semibold mb-2">Job Portal - Company/Client Side</h3>
      <p className="text-lg mb-4 text-gray-600">A web application for companies to manage job postings and candidate applications.</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Created a company-side portal with tools for job and project management, giving employers control over job listings and recruitment processes.</li>
        <li>Designed comprehensive CRUD operations for job postings, including features to create, update, edit, and delete listings, giving companies flexibility to manage job vacancies.</li>
        <li>Enabled companies to view candidate profiles, applied jobs, and associated projects for effective recruitment, streamlining the hiring process.</li>
      </ul>
    </div>

    {/* Razorpay Payment Application */}
    <div className="bg-white p-6 rounded-lg shadow-lg mb-8 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-semibold mb-2">Razorpay Payment Application</h3>
      <p className="text-lg mb-4 text-gray-600">A payment application integrated with Razorpay for secure transactions.</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Built a payment application integrating Razorpay for secure transactions, supporting a variety of payment methods including UPI, debit/credit cards, and wallets.</li>
        <li>Developed email notification services to enhance user communication and transactional confirmation, ensuring users are kept informed about their payment statuses.</li>
        <li>Utilized additional features like transaction tracking and secure payment processing to guarantee a smooth and trustworthy payment experience for users.</li>
      </ul>
    </div>

    {/* Note Taker App */}
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-semibold mb-2">Note Taker App</h3>
      <p className="text-lg mb-4 text-gray-600">A user-friendly note-taking application with features for registration, login, and note management.</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>This user-friendly note-taking application enables users to register, log in, and efficiently create, edit, and manage their notes, helping users stay organized.</li>
        <li>The application streamlines the user experience with a straightforward registration process, where users can create a unique user ID and password for secure access.</li>
        <li>Once logged in, users can easily add new notes, edit existing ones, and organize their personal notes in a seamless interface.</li>
        <li>Technologies Used: Java, HTML, CSS, Spring Boot, Hibernate, MySQL.</li>
        <li>Role: Full Stack Developer, responsible for both frontend and backend development of the application.</li>
      </ul>
    </div>
  </section>
);

export default Projects;
