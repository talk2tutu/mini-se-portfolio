import TaskManager from "./Components/TaskManager";
import Certifications from './Components/Certifications.jsx';
import { useState } from "react";
function App() {

      const [page, setPage] = useState("home");

    if (page === "task-manager") {
      return <TaskManager goHome={() => setPage("home")} />;
    }

return ( <div className="min-h-screen bg-gray-100"> <div className="max-w-6xl mx-auto px-6 py-12">

```
    {/* Hero Section */}
    <div className="text-center mb-16">
      <img
        src="/images/profile.png"
        alt="Mini M S"
        className="w-48 h-48 rounded-full mx-auto mb-6 object-contain bg-white shadow-xl border-4 border-white"
      />

      <h1 className="text-5xl font-bold text-gray-900">
        Mini M S
      </h1>

      <p className="text-2xl text-gray-600 mt-3">
        Software Engineering Mentor | Full-Stack Developer
      </p>

      <p className="text-gray-500 mt-2">
        Auckland, New Zealand | Permanent Resident
      </p>

      <p className="mt-2">
        <a
          href="https://mini-se-portfolio.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 hover:underline"
        >
          https://mini-se-portfolio.vercel.app
        </a>
      </p>
<Certifications />
      <a
        href="/Mini_MS_Software_Developer_CV_NZ.pdf"
        download
        className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Download CV
      </a>
    </div>

    {/* About */}
    <section className="bg-white rounded-xl shadow p-8 mb-8">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>

      <p className="text-gray-700">
        Software Engineering Mentor and Full-Stack Developer currently
        contributing to the Tiāki Taonga WAI 262 Trust as a technical
        contributor. Experienced in React.js, TypeScript, C#.NET,
        ASP.NET Core, Node.js, PostgreSQL, SQL Server, REST APIs,
        database design, system workflows, and software development.
      </p>
    </section>
    <section className="bg-white rounded-xl shadow p-8 mb-8">
  <h2 className="text-3xl font-bold mb-4">
    Professional Summary
  </h2>

  <p className="text-gray-700">
    Software Engineering Mentor and Full-Stack Developer with
    experience in web application development, database design,
    REST API integration, cloud deployment, and technical mentoring.
    Experienced in React.js, Node.js, ASP.NET Core, PostgreSQL,
    SQL Server, and Agile development practices. Passionate about
    building scalable applications, mentoring emerging developers,
    and delivering high-quality software solutions.
  </p>
  </section>
    {/* Skills */}
    <section className="bg-white rounded-xl shadow p-8 mb-8">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div>React.js</div>
        <div>TypeScript</div>
        <div>C#.NET</div>
        <div>Node.js</div>
        <div>Express.js</div>
        <div>JavaScript</div>
        <div>Vite</div>
        <div>Cloud Deployment</div>
        <div>ASP.NET Core</div>
        <div>PostgreSQL</div>
        <div>SQL Server</div>
        <div>REST APIs</div>
        <div>Git & GitHub</div>
        <div>Tailwind CSS</div>
        <div>AWS</div>
        <div>Database Design</div>
        <div>Query Optimisation</div>
        <div>Agile & Scrum</div>
        <div>CI/CD</div>
      </div>
    </section>

    {/* Experience */}
    <section className="bg-white rounded-xl shadow p-8 mb-8">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>

      <div>
        <h3 className="text-xl font-semibold">
          Software Engineering Mentor / Web Developer
        </h3>

        <p className="text-gray-500">
          Tiāki Taonga Trust | 2025 – Present
        </p>

        <ul className="list-disc ml-6 mt-3">
          <li>Mentor Software Engineering interns.</li>
          <li>Review API designs and database schemas.</li>
          <li>Guide Agile and GitHub workflows.</li>
        </ul>
      </div>
    </section>

    {/* Projects */}
    <section className="bg-white rounded-xl shadow p-8 mb-8">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      
        <div className="border rounded-lg p-5 bg-green-50">
      <h3 className="text-xl font-bold mb-2">
        Trust Attendance Application
      </h3>

      <p className="text-gray-700 mb-3">
        Designed and developed a full-stack staff attendance system for the
        Trust, enabling employees to clock in and out with automatic
        late/on-time status detection and admin visibility into daily
        attendance across all staff.
      </p>

      <p className="text-gray-600 mb-2">
        <strong>Role:</strong> Full-Stack Developer
      </p>

      <p className="text-gray-700 mb-3">
        React.js, TypeScript, C#/.NET (ASP.NET Core Web API), Entity
        Framework Core, PostgreSQL, JWT Authentication
      </p>
    </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="border rounded-lg p-5 bg-blue-50">
          <h3 className="text-xl font-bold mb-2">
            Full-Stack Task Manager Application
          </h3>
          
          <p className="text-gray-700 mb-3">
            Designed and developed a full-stack task management application
            demonstrating frontend development, backend API development,
            database integration, and deployment readiness. The application
            supports task creation, updates, completion tracking, and deletion
            through a RESTful architecture.
          </p>

          <p className="text-gray-600 mb-2">
            <strong>Role:</strong> Full-Stack Developer
          </p>

          <p className="text-gray-700 mb-3">
            Developed a full-stack CRUD application using React.js,
            Node.js, Express.js, and PostgreSQL.
          </p>

          <p className="text-gray-700">
            <strong>Technologies:</strong> React.js, Vite,
            Tailwind CSS, Node.js, Express.js, PostgreSQL,
            REST APIs, Vercel
          </p>

          <div className="mt-4 flex gap-3">
            <a
              href="https://github.com/talk2tutu/mini-se-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              GitHub Repository
            </a>

            <button
                onClick={() => setPage("task-manager")}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                View Live Demo
              </button>
          </div>
          
        </div>
        <div className="border rounded-lg p-5">
          <h3 className="text-xl font-bold mb-2">
            Tiāki Taonga Trust Website
          </h3>
          <p className="text-gray-700 mb-3">
            Contributed to the development and enhancement of the Trust's
            public-facing website by implementing responsive user interfaces,
            improving accessibility, supporting content management workflows,
            and ensuring a consistent user experience across devices.
          </p>
           <p className="text-gray-600 mb-2">
            <strong>Role:</strong> Full-Stack Developer/Co-Manager
          </p>
          <p className="text-gray-700">
            React.js, C#.NET, TypeScript, Tailwind CSS, PostgreSQL
          </p>
        </div>

        <div className="border rounded-lg p-5">
          <h3 className="text-xl font-bold mb-2">
            RIL AI Accountancy Software
          </h3>
          <p className="text-gray-700 mb-3">
          Developed reusable frontend components, dashboard modules,
          onboarding workflows, form validation, and API integrations
          for an AI-powered accounting platform. Collaborated with
          cross-functional teams to improve usability and application
          performance.
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Role:</strong> Full-Stack Developer
          </p>
          <p className="text-gray-700">
            React.js, REST APIs, SQL Server
          </p>
        </div>

        <div className="border rounded-lg p-5">
          <h3 className="text-xl font-bold mb-2">
            Trust Internship Platform Support
          </h3>
          <p className="text-gray-700 mb-3">
            Provided technical mentorship and software engineering guidance
            for internship projects, including system architecture reviews,
            API design standards, database schema validation, GitHub workflow
            management, Agile practices, and deployment readiness planning.
           </p>
           <p className="text-gray-600 mb-2">
            <strong>Role:</strong> Software Engineering Mentor
           </p>
          <p className="text-gray-700">
            PostgreSQL, ASP.NET Core, GitHub, Jira, C#, Python, TypeScript
          </p>
        </div>
        {/* WRENCH */} <div className="border rounded-lg p-5"> 
          <h3 className="text-xl font-bold mb-2"> WRENCH EPC Product Suite </h3> 
          <p className="text-gray-600 mb-2"> <strong>Role:</strong> Product Developer </p>
           <p className="text-gray-700 mb-3">
            Participated in the development and maintenance of enterprise
            engineering and project management software solutions. Worked on
            business modules, database development, reporting features, and
            performance improvements for large-scale industrial projects.
          </p>
           <p className="text-gray-700"> 
            <strong>Technologies:</strong> C#.NET, ASP.NET, SQL Server </p>
           </div>
      </div>
    </section>

    {/* Contact */}
    <section className="bg-white rounded-xl shadow p-8">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <p>Email: talk2tutu@gmail.com</p>
      <p>Mobile: 021 090 74092</p>

      <div className="mt-4 space-y-2">
        <a
          href="https://www.linkedin.com/in/minimssoftwareprofessional"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-blue-600 hover:text-blue-800"
        >
          LinkedIn Profile
        </a>

        <a
          href="https://github.com/talk2tutu"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-blue-600 hover:text-blue-800"
        >
          GitHub Profile
        </a>
      </div>
    </section>

  </div>
</div>
);
}

export default App;
