function Certifications() {
  return (
    <section id="trust-software-engineer-mentor" className="certifications">
      <h2>Certifications</h2>

      <div className="cert-card">
        <img
          src="/images/Mini_SE_Mentor.jpeg"
          alt="Trust Software Engineer Mentor Certificate"
          className="cert-image"
        />

        <div className="cert-details">
          <h3>Trust Software Engineer Mentor</h3>
          <a
            href="https://www.tiakitaonga.org.nz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tiaki Taonga Trust – Wai 262
          </a>
          <p className="cert-date">April 27 – August 21, 2026</p>
          <p>
            Mentored interns during the Trust's Software Engineer Internship
            program, guiding their work on the Trust Integrated Platform
            under the mana and kaitiakitanga (guardianship) of the Trust.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Certifications;