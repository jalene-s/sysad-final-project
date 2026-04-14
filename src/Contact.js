import { members } from "./data";

export default function Contact() {
  return (
    <div className="container">
      <div className="hero">
        <h1>Contact Us</h1>
        <p>Reach out to each team member via email</p>
      </div>

      <div className="grid">
        {members.map((m, i) => (
          <div key={i} className="card contact-card">
            <img src={m.image} alt={m.name} />
            <h3>{m.name}</h3>
            <p style={{ opacity: 0.7 }}>{m.role}</p>

            <p className="email">{m.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}