import { useParams } from "react-router-dom";

const memberFiles = {
  "Jalene Santiago": [
    {
      title: "Prelim HOA",
      items: [
        {
          name: "HOA 1 - Docker Setup",
          link: "https://github.com/YOUR-LINK-1",
        },
        {
          name: "HOA 2 - Dockerfile",
          link: "https://github.com/YOUR-LINK-2",
        },
      ],
    },
    {
      title: "Midterm HOA",
      items: [],
    },
  ],

  "Ruel Benedicto JR.": [
    {
      title: "Prelim HOA",
      items: [
        {
          name: "HOA 1 - Dockerfile",
          link: "https://github.com/YOUR-LINK-2",
        },
      ],
    },
  ],

  "Jayvee Fetalino": [
    {
      title: "Prelim HOA",
      items: [],
    },
  ],
};

export default function Member() {
  const { name } = useParams();
  const files = memberFiles[name] || [];

  return (
    <div className="container">
      <div className="hero">
        <h1>{name}</h1>
        <p>Available documents and submissions</p>
      </div>

      <div className="accordion">
        {files.map((item, i) => (
          <details key={i} className="accordion-item">
            <summary>{item.title}</summary>

            <div className="accordion-content">
              {item.items.length > 0 ? (
                item.items.map((file, j) => (
                  <div 
                    key={j}
                    className="file-card"
                    onClick={() => window.open(file.link, "_blank")}
                  >
                  
                    <div className="file-icon">📄</div>
                    <div className="file-info">
                      <span className="file-name">{file.name}</span>
                      <span className="file-action">Open File</span>
                    </div>
                  </div>
                ))
              ) : (
                <p style={{ opacity: 0.7 }}>
                  No files uploaded yet.
                </p>
              )}
            </div>

          </details>
        ))}
      </div>
    </div>
  );
}