function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-12">

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
            Software Engineering Mentor | Full-Stack Web Developer
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
          <h2 className="text-3xl font-bold mb-4">
            About Me
          </h2>

          <p className="text-gray-700">
            Software Engineering Mentor and Web Developer currently contributing
            to the Tiāki Taonga WAI 262 Trust as a technical
            contributor. Experienced in React.js, TypeScript, C#.NET,
            ASP.NET Core, PostgreSQL, SQL Server, REST APIs,
            database design, system workflows, and software development.
          </p>
        </section>

        {/* Skills */}
        <section className="bg-white rounded-xl shadow p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">
            Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div>React.js</div>
            <div>TypeScript</div>
            <div>C#.NET</div>
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
          <h2 className="text-3xl font-bold mb-6">
            Experience
          </h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">
              Software Engineering Mentor
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
  <h2 className="text-3xl font-bold mb-6">
    Projects
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    <div className="border rounded-lg p-5">
      <h3 className="text-xl font-bold mb-2">
        Tiāki Taonga Trust Website
      </h3>

      <p className="text-gray-600 mb-2">
        <strong>Role:</strong> Web Developer
      </p>

      <p className="text-gray-700 mb-3">
        Developed responsive and accessible website pages to support Trust
        communication, community engagement, and online information sharing.
      </p>

      <p className="text-gray-700">
        <strong>Technologies:</strong> React.js,C#.Net, TypeScript, Tailwind CSS,
        JavaScript, GitHub
      </p>
    </div>

    <div className="border rounded-lg p-5">
      <h3 className="text-xl font-bold mb-2">
        RIL AI Accountancy Software
      </h3>

      <p className="text-gray-600 mb-2">
        <strong>Role:</strong> Web Developer
      </p>

      <p className="text-gray-700 mb-3">
        Built reusable UI components, onboarding screens, dashboard layouts,
        routing, and form validation for an AI-based accounting platform.
      </p>

      <p className="text-gray-700">
        <strong>Technologies:</strong> React.js,C#.Net, TypeScript, Tailwind CSS,
        REST APIs, SQL Server
      </p>
    </div>

    <div className="border rounded-lg p-5">
      <h3 className="text-xl font-bold mb-2">
        Trust Internship Platform Support
      </h3>

      <p className="text-gray-600 mb-2">
        <strong>Role:</strong> Software Engineering Mentor
      </p>

      <p className="text-gray-700 mb-3">
        Guided interns on software architecture, API design, database schema
        design, GitHub workflows, Agile practices, and technical documentation.
      </p>

      <p className="text-gray-700">
        <strong>Technologies:</strong> PostgreSQL, SQL Server, GitHub,
        React.js, ASP.NET Core,C#.Net, Jira, Notion
      </p>
    </div>

    <div className="border rounded-lg p-5">
      <h3 className="text-xl font-bold mb-2">
        WRENCH EPC Product Suite
      </h3>

      <p className="text-gray-600 mb-2">
        <strong>Role:</strong> Product Developer
      </p>

      <p className="text-gray-700 mb-3">
        Developed enterprise engineering management modules and SQL Server
        database components for large-scale industrial applications.
      </p>

      <p className="text-gray-700">
        <strong>Technologies:</strong> C#.NET, ASP.NET, SQL Server
      </p>
    </div>

  </div>
</section>

        {/* Contact */}
       <section className="bg-white rounded-xl shadow p-8">
  <h2 className="text-3xl font-bold mb-6">
    Contact
  </h2>

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
    <p className="mt-4">
    <a
    href="https://mini-se-portfolio.vercel.app"
    target="_blank"
    rel="noopener noreferrer"
    className="block text-blue-600 hover:text-blue-800"
    >
    Portfolio Website
    </a>
  </p>
  </div>
</section>
      </div>
    </div>
  );
}

export default App;