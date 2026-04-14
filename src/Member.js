import { useParams } from "react-router-dom";

const files = [
  "Prelim HOA",
  "Midterm HOA",
  "Finals HOA",
  "Prelim Exam",
  "Midterm Exam",
  "Final Exam",
  "Reflection and Learnings",
];

export default function Member() {
  const { name } = useParams();

  return (
    <div className="container">
      <div className="hero">
        <h1>{name}</h1>
        <p>Available documents and submissions</p>
      </div>

      <div className="accordion">
        {files.map((item, i) => (
          <details key={i} className="accordion-item">
            <summary>{item}</summary>

            <div className="accordion-content">
              <p style={{ opacity: 0.7 }}>
                No files uploaded yet. Coming soon...
              </p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}