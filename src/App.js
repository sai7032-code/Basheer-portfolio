import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import profileImg from "./basheer_profile.jpg"; // Make sure this image is in src folder

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-100 via-white to-purple-50 text-gray-800 font-sans">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-800 text-white py-20 px-6 text-center animate-fade-in">
        <img
          src={profileImg}
          alt="Mohammed Basheer Ahmed"
          className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-white shadow-lg"
        />
        <h1 className="text-5xl font-extrabold mb-2 tracking-wide animate-slide-up">Mohammed Basheer Ahmed</h1>
        <p className="text-xl font-medium animate-slide-up">DevOps Engineer | AWS | Terraform | Kubernetes | Jenkins</p>
        <a
          href="/Basheer_AZG2_Resume.pdf"
          download
          className="inline-block mt-6 bg-white text-purple-900 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-purple-200 transition duration-300"
        >
          ⬇️ Download Resume
        </a>
      </section>

      {/* Summary */}
      <section className="p-8 max-w-5xl mx-auto animate-fade-in-up">
        <h2 className="text-3xl font-bold mb-4 text-purple-900 border-b-4 border-purple-300 pb-2">🧾 Professional Summary</h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          Cloud DevOps Engineer with 4 years of experience in hybrid cloud environments including AWS, Azure, and GCP. Expertise in CI/CD, containerization, infrastructure as code, automation, and cloud cost optimization. Proficient in tools like Terraform, Kubernetes, Jenkins, Ansible, and more. Proven record in reducing deployment time, optimizing infrastructure, and improving delivery cycles.
        </p>
      </section>

      {/* Education */}
      <section className="bg-white p-8 max-w-5xl mx-auto animate-fade-in-up">
        <h2 className="text-3xl font-bold mb-6 text-purple-900 border-b-4 border-purple-300 pb-2">🎓 Education</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "B.Tech – Electronics & Communication Engineering",
              college: "Kakatiya Institute of Technology and Science, Warangal",
              score: "CGPA: 7.2"
            },
            {
              title: "Diploma – ECE",
              college: "SVS Group of Institutions",
              score: "Percentage: 71.3%"
            },
            {
              title: "S.S.C – Class X",
              college: "ZPHS, Kothapalli",
              score: "CGPA: 7.5"
            }
          ].map((edu, index) => (
            <div key={index} className="bg-indigo-50 rounded-lg p-6 shadow hover:shadow-lg transition-transform hover:scale-105">
              <h3 className="text-xl font-semibold text-black mb-2">{edu.title}</h3>
              <p className="text-gray-800 font-medium">{edu.college}</p>
              <p className="text-purple-900 font-bold mt-2">{edu.score}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="bg-white p-8 max-w-5xl mx-auto animate-fade-in-up">
        <h2 className="text-3xl font-bold mb-6 text-purple-900 border-b-4 border-purple-300 pb-2">🧠 Technical Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Cloud Platforms", items: ["AWS(EC2,S3,IAM,RDS,ALB/NLB,Cloud Formation, Lambda),Azure pipelines, Monitoring, Log analytics,)", "Azure", "GCP"] },
            { title: "IaC", items: ["Terraform", "CloudFormation"] },
            { title: "CI/CD Tools", items: ["Jenkins", "GitHub Actions", "GitLab", "Octopus"] },
            { title: "Containers & Orchestration", items: ["Docker", "Kubernetes"] },
            { title: "Monitoring & Logging", items: ["CloudWatch", "New Relic", "Prometheus", "Grafana", "Splunk"] },
            { title: "Version Control", items: ["Git", "GitHub"] },
            { title: "Operating Systems", items: ["Linux", "Ubuntu", "Windows"] },
            { title: "Scripting", items: ["Python", "Bash", "Shell"] }
          ].map((skill, idx) => (
            <div key={idx} className="bg-indigo-50 rounded-lg p-6 shadow hover:shadow-lg transition-transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-black mb-3">{skill.title}</h3>
              <ul className="list-disc pl-6 text-gray-800 text-lg space-y-1">
                {skill.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="bg-indigo-50 p-8 max-w-5xl mx-auto animate-fade-in-up rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-purple-900 border-b-4 border-purple-400 pb-2">💼 Work Experience</h2>
        <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-transform hover:scale-105">
          <h3 className="text-xl font-semibold text-black mb-2">
            DevOps Engineer – Tata Consultancy Services <span className="text-sm text-gray-600">(May 2021 – Present)</span>
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-md">
            <li>Automated deployment pipelines using Jenkins and Terraform.</li>
            <li>Managed AWS infrastructure including EC2, RDS, S3, IAM.</li>
            <li>Built Kubernetes clusters for container orchestration.</li>
            <li>Reduced AWS cost by 20% via optimization strategies.</li>
            <li>Integrated Octopus for AMI patching and deployment.</li>
            <li>Configured Auto Scaling with Load Balancers for high availability.</li>
            <li>Developed Bash, Shell, and Python scripts for automation tasks.</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-purple-50 p-8 max-w-5xl mx-auto animate-fade-in-up rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-purple-900 border-b-4 border-purple-400 pb-2">🚀 Key Projects</h2>
        {[
          {
            title: "Cloud Migration for Enterprise Applications",
            points: [
              "Migrated 50+ apps to AWS using Terraform, reducing provisioning time by 60%.",
              "Deployed Kubernetes clusters for microservices reliability.",
              "Set up Jenkins pipelines for CI/CD automation."
            ]
          },
          {
            title: "Cost Optimization & Infrastructure Automation",
            points: [
              "Reduced AWS expenses by 20% with smart monitoring.",
              "Automated AMI patching using Octopus Deployment.",
              "Created CloudFormation templates for rapid infrastructure setup."
            ]
          }
        ].map((proj, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-transform hover:scale-105 mb-6">
            <h3 className="text-xl font-semibold text-black mb-2">{proj.title}</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              {proj.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Certifications */}
      <section className="bg-white p-8 max-w-5xl mx-auto animate-fade-in-up rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-purple-900 border-b-4 border-purple-300 pb-2">📜 Certifications</h2>
        <div className="bg-indigo-50 rounded-lg p-6 shadow hover:shadow-lg transition-transform hover:scale-105">
          <ul className="list-disc pl-6 space-y-2 text-gray-800 text-lg">
            <li>AWS Certified Solutions Architect – Associate</li>
            <li>Certified Kubernetes Administrator (Planned)</li>
          </ul>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-purple-50 p-8 max-w-5xl mx-auto animate-fade-in-up rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-purple-900 border-b-4 border-purple-400 pb-2">🏆 Key Achievements</h2>
        <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-transform hover:scale-105">
          <ul className="list-disc pl-6 space-y-2 text-gray-800 text-lg">
            <li>Improved system uptime by 15% through optimized Kubernetes deployment.</li>
            <li>Reduced deployment failures by 20% with better CI/CD automation.</li>
            <li>Saved 30% on AWS costs via effective resource optimization.</li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-purple-900 text-white p-8 text-center animate-fade-in-up">
        <h2 className="text-3xl font-bold mb-4">📬 Get in Touch</h2>
        <p className="mb-2">📧 basheermohammad537@gmail.com</p>
        <p>📞 +91 8008147954</p>
        <p>📍 Warangal, Telangana, India</p>
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://github.com/basheerclouddevops?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-200 transition">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/basheer-mohammed-242b241b7" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-200 transition">
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:basheermohammad537@gmail.com" className="hover:text-indigo-200 transition">
            <MdEmail size={30} />
          </a>
          <a href="tel:8008147954" className="hover:text-indigo-200 transition">
            <MdPhone size={30} />
          </a>
        </div>
      </section>

    </main>
  );
}
