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
      isReflection: true,
      text: "This project focuses on developing and deploying a web application using tools like Docker and Ansible. It helped us better understand how web applications are built and deployed in real-world scenarios. At first, the process was confusing, especially with concepts like containerization and automation, but as we followed each step, we saw how everything connects to create a more efficient system. One of the main challenges we encountered was running everything in VirtualBox, which often caused laptops to crash, lag, and take a long time to complete tasks, making the process more difficult. Despite this, Docker made it easier to manage dependencies by packaging the application into a single image, while Ansible simplified deployment through automation, reducing errors and saving time. We also learned the importance of proper planning and decision-making, such as choosing the right setup for deployment, as well as the value of group collaboration in completing complex tasks. Through deploying this project, we were also able to better understand all the lessons from prelim up until finals, as we applied them in a practical and hands-on way. Even with challenges and errors along the way, we improved our problem-solving skills and became more confident in handling technical tasks.",
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
          link: "",
        },
      ],
    },
    {
      title: "Reflection",
      isReflection: true,
      text: "Working on this project helped me understand how Ansible playbooks can automate deployment tasks instead of doing everything manually, which saved time and reduced errors. Even though I did not create the front-end myself, I gained a better understanding of how the HTML file works as the interface that users see after deployment. I also learned how Docker helps package the web application so it can run properly on both Ubuntu and CentOS systems. Overall, this project helped me appreciate how automation tools and containerization make deploying applications easier and more organized across multiple machines.",
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
          link: "",
        },
      ],
    },
    {
      title: "Reflection",
      isReflection: true,
      text: "Throughout this course, my journey in System Administration has been both challenging and rewarding. My main contribution to our final project was writing the Ansible playbooks, specifically the playbook for building the Docker image and the playbook for running the Docker containers across our three virtual machines. The hardest part of the entire journey was during the prelim, when we were still setting up our virtual machines for the first time. Getting the VMs to communicate with each other, configuring SSH properly, and understanding how Ansible connects to remote hosts was confusing at first. There were a lot of moving parts and it was easy to make mistakes. However, once we got past that stage, everything started to click and the rest of the course went much more smoothly. For the final project specifically, writing the Ansible playbooks came with its own set of errors. One of the first issues we encountered was the Python Docker SDK failing to install on Ubuntu, throwing an externally managed environment error. This was caused by Ubuntu 22.04's new restriction on system-wide pip installations, which we fixed by adding the --break-system-packages flag specifically for Debian-based systems. We also ran into SSH connection errors because the private key path was set to id_rsa when our actual key was id_ed25519, which we corrected in the inventory file. Another issue was that the Ansible copy module was not overwriting old files on the VMs, so the outdated Dockerfile kept being used and we fixed this by adding a task to delete the remote directory before copying fresh files. On top of that, the package.json had react-scripts set to an invalid version causing npm to install only 34 packages instead of the full dependencies, which we corrected to the proper version. Despite all these errors, each one taught me something new about how Linux systems, Python environments, SSH authentication, and Docker all interact with each other. What started as frustrating roadblocks became valuable lessons that I now understand deeply. This course showed me that system administration is not just about running commands — it is about understanding why things fail and knowing how to fix them methodically.",
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
              {section.isReflection ? (
                <p style={{ lineHeight: "1.8", opacity: 0.85, fontSize: "0.88rem" }}>
                  {section.text}
                </p>
              ) : section.items.length > 0 ? (
                section.items.map((file, j) => (
                  <div
                    key={j}
                    className="file-card"
                    onClick={() => file.link && setSelectedFile(file.link)}
                    style={{ opacity: file.link ? 1 : 0.4, cursor: file.link ? "pointer" : "default" }}
                  >
                    <div className="file-icon">📄</div>
                    <div className="file-info">
                      <span className="file-name">{file.name}</span>
                      <span className="file-action">{file.link ? "Open File" : "Coming soon"}</span>
                    </div>
                  </div>
                ))
              ) : (
                <p style={{ opacity: 0.6 }}>No files uploaded yet.</p>
              )}
            </div>
          </details>
        ))}
      </div>

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
          </div>
        </div>
      )}
    </div>
  );
}
