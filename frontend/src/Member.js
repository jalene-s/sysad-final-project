import { useParams } from "react-router-dom";
import { useState } from "react";

const memberFiles = {
  "Jalene Santiago": [
    {
      title: "Prelim HOA",
      items: [
        {
          name: "HOA-01 – Creating Virtual Machines in Microsoft Azure",
          link: "https://drive.google.com/file/d/1gdTUObvh38RU9fvPYHWdgB7zUo_GfyO0/preview",
        },
        {
          name: "HOA-02 – SSH Key-Based Authentication and GIT Setup",
          link: "https://drive.google.com/file/d/1sczDipjO3kVPKWoyRNWaGKDuaNaKbZfB/preview",
        },
        {
          name: "HOA-03 – Install SSH server on CentOS or RHEL 8",
          link: "https://drive.google.com/file/d/1JgomDF4amCU3RnsTugC4oDfjndYpnJuF/preview",
        },
        {
          name: "HOA-3.1 – Creating Ansible Setup & Installing MariaDB Using Playbook",
          link: "https://drive.google.com/file/d/1dhS2aCnW5QzC-T0Llub0v0iusZ3ACSbq/preview",
        },
        {
          name: "HOA-04 – Running Elevated Ad hoc Commands",
          link: "https://drive.google.com/file/d/1f5AbxSYugy31ZRoJXiEOzPkFkfUyAyeM/preview",
        },
        {
          name: "HOA-4.1 – Setting Up Ansible for Server Management",
          link: "https://drive.google.com/file/d/12Hw3iU8JZHSmmFQBkm6phgiftfvlKnc3/preview",
        },
        {
          name: "HOA-05 – Implement Ansible roles in Playbooks",
          link: "https://drive.google.com/file/d/1XtR5CQjfAIjnu1Fr5ORC3cJRMi-zxNTd/preview",
        },
      ],
    },
    {
      title: "Midterm HOA",
      items: [
        {
          name: "HOA-06 – Targeting Specific Nodes",
          link: "https://drive.google.com/file/d/1UYE3h5vfYtvV1dwIf6CL92UYfbBe_9hG/preview",
        },
        {
          name: "HOA-6.1 – Ansible Roles",
          link: "https://drive.google.com/file/d/1eNGRRafjh8YZLSiL2-X4NZ86Jragw2yB/preview",
        },
        {
          name: "HOA-07 – Managing Files and Creating Roles in Ansible",
          link: "https://drive.google.com/file/d/1QEhzFs5ZdmGRNEeDzlBh9p_r0tphU4Hf/preview",
        },
        {
          name: "HOA-08 – Install, Configure, and Manage Availability Monitoring Tools",
          link: "https://drive.google.com/file/d/1QOmmz2NYB9c7HVVvTewu9zWFjCbo-Rjd/preview",
        },
        {
          name: "HOA-09 – Install, Configure, and Manage Performance Monitoring Tools",
          link: "https://drive.google.com/file/d/1V-dMDosx5nBEGBQtwOS6dwyv8fMnB2Pf/preview",
        },
      ],
    },
    {
      title: "Finals HOA",
      items: [
        {
          name: "HOA-11 – Containerization",
          link: "https://drive.google.com/file/d/1vjWw1bknOpfsvExJxC6r1ZZ86n9arZ5q/preview",
        },
      ],
    },
    {
      title: "Examinations",
      items: [
        {
          name: "Prelim Skills Exam",
          link: "https://drive.google.com/file/d/1rkuf9IAmSWIgwm3p6KR8751qjT2DWQDO/preview",
        },
        {
          name: "Midterm Skills Exam",
          link: "https://drive.google.com/file/d/1BXGA_A3_2zmOaB8UTQ-B5bgdJFgE6sjE/preview",
        },
        {
          name: "Final Skills Exam",
          link: "",
        },
      ],
    },
    {
      title: "Reflection",
      items: [],
    },
  ],

  "Ruel Benedicto JR.": [
    {
      title: "Prelim HOA",
      items: [
        {
          name: "HOA-01 – Creating Virtual Machines in Microsoft Azure",
          link: "https://drive.google.com/file/d/16QnMAu2A_sPbhfKBtLQqMn4Q_NMsGVjr/preview",
        },
        {
          name: "HOA-02 – SSH Key-Based Authentication and GIT Setup",
          link: "https://drive.google.com/file/d/1LMGT2LEcB_ddPqcw2FVXEDYbKYlzdoh-/preview",
        },
        {
          name: "HOA-03 – Install SSH server on CentOS or RHEL 8",
          link: "https://drive.google.com/file/d/1Zg9mnBpnX2ljOj5H7qIyEa5raKYYxELl/preview",
        },
        {
          name: "HOA-04 – Running Elevated Ad hoc Commands",
          link: "https://drive.google.com/file/d/1UsRQU6w3-47IdOSPngObhjQHmm3y957I/preview",
        },
        {
          name: "HOA-05 – Implement Ansible roles in Playbooks",
          link: "https://drive.google.com/file/d/1XcjpvYy_kJLunfSqnSaCvqkkBf0Ew72D/preview",
        },
      ],
    },
    {
      title: "Midterm HOA",
      items: [
        {
          name: "HOA-06 – Targeting Specific Nodes",
          link: "https://drive.google.com/file/d/1X2iy66p91Y5Bfy4RAR7cMK0gbBt77e73/preview",
        },
        {
          name: "HOA-07 – Managing Files and Creating Roles in Ansible",
          link: "https://drive.google.com/file/d/1lVvvGfS3ycxNE_UZ9Negi0ar-t2Wf18m/preview",
        },
        {
          name: "HOA-08 – Install, Configure, and Manage Availability Monitoring Tools",
          link: "https://drive.google.com/file/d/1zpwUjcpCuo1qXNweOpans6Tck-Ypg-0t/preview",
        },
      ],
    },
    {
      title: "Finals HOA",
      items: [],
    },
    {
      title: "Examinations",
      items: [
        {
          name: "Prelim Skills Exam",
          link: "https://drive.google.com/file/d/146q7Kid1toCPtWe5zwmMgxLeKdAK9F8k/preview",
        },
        {
          name: "Midterm Skills Exam",
          link: "https://drive.google.com/file/d/1coWpP73OsHC0H6vTHJXX1TnU_a6g5baK/preview",
        },
        {
          name: "Final Skills Exam",
          link: "https://github.com/YOUR-LINK-2",
        },
      ],
    },
    {
      title: "Reflection",
      items: [],
    },
  ],

  "Jayvee Fetalino": [
    {
      title: "Prelim HOA",
      items: [
        {
          name: "HOA-03 – Install SSH server on CentOS or RHEL 8",
          link: "https://drive.google.com/file/d/1s1UXO9w3iAynDAaN2AKHzy2H5m_nHUds/preview",
        },
        {
          name: "HOA-05 – Implement Ansible roles in Playbooks",
          link: "https://drive.google.com/file/d/1px4BXnqA3OPxDwZV_OGq2WJ2BNXi5qj2/preview",
        },
      ],
    },
    {
      title: "Midterm HOA",
      items: [
        {
          name: "HOA-06 – Targeting Specific Nodes",
          link: "https://drive.google.com/file/d/19Grui9vlx0IPM_3XkMkuPzT9CjmpWsLJ/preview",
        },
        {
          name: "HOA-6.1 – Ansible Roles",
          link: "https://drive.google.com/file/d/1PaIE5Qcu0Gd_kg_ljLZOIFJIt-SbiHKx/preview",
        },
        {
          name: "HOA-07 – Managing Files and Creating Roles in Ansible",
          link: "https://drive.google.com/file/d/1dU7V_s7I17fXbxbuWmT37DHQAhS_njVE/preview",
        },
        {
          name: "HOA-08 – Install, Configure, and Manage Availability Monitoring Tools",
          link: "https://drive.google.com/file/d/1Ep8fwmqBoJOdsXrhVrVNhRb3kfo1K4lg/preview",
        },
      ],
    },
    {
      title: "Finals HOA",
      items: [],
    },
    {
      title: "Examinations",
      items: [
        {
          name: "Prelim Skills Exam",
          link: "https://drive.google.com/file/d/11asa_iomjHva6asCoepCNMGr9XuzfKpX/preview",
        },
        {
          name: "Midterm Skills Exam",
          link: "https://drive.google.com/file/d/1_SmUW1lnAtxFYIZOAxJzuS56MyH4SlpJ/preview",
        },
        {
          name: "Final Skills Exam",
          link: "https://github.com/YOUR-LINK-2",
        },
      ],
    },
    {
      title: "Reflection",
      items: [],
    },
  ],
};

export default function Member() {
  const { name } = useParams();
  const files = memberFiles[name] || [];
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="container">
      <div className="hero">
        <h1>{name}</h1>
        <p>Available documents and submissions</p>
      </div>

      <div className="accordion">
        {files.map((section, i) => (
          <details key={i} className="accordion-item">
            <summary>{section.title}</summary>

            <div className="accordion-content">
              {section.items.length > 0 ? (
                section.items.map((file, j) => (
                  <div
                    key={j}
                    className="file-card"
                    onClick={() => setSelectedFile(file.link)}
                  >
                    <div className="file-icon">📄</div>
                    <div className="file-info">
                      <span className="file-name">{file.name}</span>
                      <span className="file-action">Open File</span>
                    </div>
                  </div>
                ))
              ) : (
                <p style={{ opacity: 0.6 }}>
                  No files uploaded yet.
                </p>
              )}
            </div>
          </details>
        ))}
      </div>

      {/* ✅ PDF VIEWER INSIDE RETURN */}
      {selectedFile && (
        <div className="pdf-modal">
          <div className="pdf-box">
            <div className="pdf-header">
              <button onClick={() => setSelectedFile(null)}>Close</button>
            </div>

            <iframe
              src={selectedFile}
              title="PDF Viewer"
              width="100%"
              height="600px"
            />
      
          </div> {/* ✅ CLOSE pdf-box */}
        </div>
      )} {/* ✅ CLOSE PDF MODAL */}
    </div>
  );
}