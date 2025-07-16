
"use client";

import React, { useState } from "react";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("skills");

  const projects = [
    {
      title: "Phishing and C2 Control - Red Team Lab",
      desc: "Simulated a phishing attack and established command-and-control (C2) infrastructure for red team operations. Included payload delivery, listener setup, and privilege escalation tracking.",
      link: "https://www.notion.so/Phishing-and-C2-Control-Red-Team-21ab3b78551d8033b05afea6f709bd9d"
    },
    {
      title: "Splunk SIEM Monitoring Project",
      desc: "Configured Sysmon to monitor Windows logs, exported data to Splunk, and created alerts for reverse shell detection.",
      link: "https://enchanted-snowboard-a2d.notion.site/Splunk-22eb3b78551d8053851ddfd7e41fe24c?pvs=73"
    },
    {
      title: "Phishing Website with NGINX & Zphisher",
      desc: "Hosted a phishing site using Zphisher and NGINX, with a custom domain and public IP routing. Included Wazuh-based detection rule for blue team visibility.",
      link: "https://enchanted-snowboard-a2d.notion.site/Phishing-Website-232b3b78551d80369249f511ce4e6afc"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <header className="bg-black text-white py-10 text-center">
        <h1 className="text-4xl font-bold">Shubham Pandhare</h1>
        <p className="text-lg mt-2">
          Network & Cybersecurity Enthusiast | Trainee at Indoco Remedies
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">Hi, I’m Shubham Pandhare</h2>
          <p className="text-lg leading-relaxed">
            I’m a tech enthusiast specializing in <strong>cybersecurity analysis</strong>,
            <strong> network defense</strong>, and <strong>threat detection</strong>. I'm passionate about securing digital environments and helping
            individuals and organizations stay safe from evolving cyber threats.
            Whether you need to assess vulnerabilities, monitor for suspicious
            activity, or strengthen your overall security posture, I’ve got you
            covered. Let’s team up and safeguard your digital world.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Skills</h2>
          <div className="flex space-x-4 mb-4">
            <button
              className={\`px-4 py-2 rounded \${activeTab === "skills" ? "bg-blue-600 text-white" : "border border-blue-600 text-blue-600"}\`}
              onClick={() => setActiveTab("skills")}
            >Skills</button>
            <button
              className={\`px-4 py-2 rounded \${activeTab === "tools" ? "bg-blue-600 text-white" : "border border-blue-600 text-blue-600"}\`}
              onClick={() => setActiveTab("tools")}
            >Tools</button>
            <button
              className={\`px-4 py-2 rounded \${activeTab === "languages" ? "bg-blue-600 text-white" : "border border-blue-600 text-blue-600"}\`}
              onClick={() => setActiveTab("languages")}
            >Languages</button>
          </div>

          {activeTab === "skills" && (
            <ul className="list-disc list-inside space-y-2">
              <li>SIEM Tools: Wazuh, Splunk</li>
              <li>Log Analysis: Sysmon, Event Viewer</li>
              <li>Networking: VLAN, TCP/IP, Rack Setup</li>
            </ul>
          )}
          {activeTab === "tools" && (
            <ul className="list-disc list-inside space-y-2">
              <li>Git</li>
              <li>GitHub</li>
              <li>Wireshark</li>
              <li>Nmap</li>
            </ul>
          )}
          {activeTab === "languages" && (
            <ul className="list-disc list-inside space-y-2">
              <li>Bash</li>
              <li>PowerShell</li>
            </ul>
          )}
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Projects</h2>
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-white rounded shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold mb-2">🔹 {proj.title}</h3>
              <p className="mb-4">{proj.desc}</p>
              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                View Project
              </a>
            </div>
          ))}
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Certifications</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Git & GitHub – Simplilearn</li>
            <li>Linux Essentials – Self Study</li>
            <li>CEH – In Progress</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Contact</h2>
          <ul className="space-y-2">
            <li>Email: shubhampandhare072@gmail.com</li>
            <li>
              GitHub: <a href="https://github.com/spandhare11" className="text-blue-600">spandhare11</a>
            </li>
            <li>
              LinkedIn: <a href="https://www.linkedin.com/in/shubham-pandhare/" className="text-blue-600">shubham-pandhare</a>
            </li>
          </ul>
          <div className="mt-4">
            <a
              href="/Shubham_Pandhare_Resume.pdf"
              download
              className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              📄 Download Resume
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white text-center py-6 text-sm">
        © 2025 Shubham Pandhare • Hosted on GitHub Pages
      </footer>
    </div>
  );
}
