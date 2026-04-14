import { useNavigate } from "react-router-dom";
import { members } from "./data";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="hero">
        <h1>Team Portfolio Dashboard</h1>
        <p>A clean showcase of our academic outputs and contributions</p>
      </div>

      <div className="grid">
        {members.map((m, i) => (
          <div
            key={i}
            className="card"
            onClick={() => navigate(`/member/${m.name}`)}
          >
            <img src={m.image} alt={m.name} />
            <h3>{m.name}</h3>
            <p style={{ opacity: 0.6 }}>{m.role}</p>
          </div>
        ))}
      </div>

      <div className="footer">
        <p>
          This web system was developed as part of the requirements for CPE212: Automating Server Management.
          It demonstrates structured team collaboration, role-based contributions, and organized digital file handling
          through a responsive web-based portfolio system.
        </p>
      </div>
    </div>
  );
}