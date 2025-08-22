// ===== Smooth Scrolling =====
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "GraphQL", level: 60, category: "backend" },
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Burp-Suite", level: 95, category: "tools" },
  { name: "N-Map", level: 95, category: "tools" },
  { name: "XSS", level: 90, category: "client" },
  { name: "CSRF", level: 90, category: "client" },
  { name: "CORS Misconfig", level: 90, category: "client" },
  { name: "Access Control", level: 90, category: "server" },
  { name: "IDOR", level: 90, category: "server" },
  { name: "Privilege Escalation", level: 90, category: "server" },
  { name: "Logic Bugs", level: 90, category: "server" },
  { name: "Race Conditions", level: 90, category: "server" },
  { name: "OSI Model", level: 85, category: "network" },
  { name: "TCP/IP Model", level: 85, category: "network" },
  { name: "Subnetting", level: 80, category: "network" },
  { name: "Protocols (HTTP, DNS, FTP)", level: 85, category: "network" },
  { name: "VPN & Firewalls", level: 75, category: "network" },
  { name: "Linux Basics", level: 90, category: "os" },
  { name: "Linux Services & SSH", level: 85, category: "os" },
  { name: "Windows CMD & PowerShell", level: 80, category: "os" },
  { name: "Windows Registry & Services", level: 75, category: "os" },
];

const categories = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "tools", label: "Tools" },
  { key: "client", label: "Client-Side Vulnerabilities" },
  { key: "server", label: "Server-Side Vulnerabilities" },
  { key: "network", label: "Network Basics" },
  { key: "os", label: "Operating Systems" },
];

const categoriesContainer = document.getElementById("categories");
const skillsGrid = document.getElementById("skills-grid");
let activeCategory = "all";

// Render categories
categories.forEach((cat) => {
  const btn = document.createElement("button");
  btn.innerText = cat.label;
  if (cat.key === activeCategory) btn.classList.add("active");
  btn.addEventListener("click", () => {
    activeCategory = cat.key;
    document
      .querySelectorAll(".categories button")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderSkills();
  });
  categoriesContainer.appendChild(btn);
});

// Render skills
function renderSkills() {
  skillsGrid.innerHTML = "";
  skills
    .filter((s) => activeCategory === "all" || s.category === activeCategory)
    .forEach((skill) => {
      const card = document.createElement("div");
      card.className = "skill-card";
      card.innerHTML = `
        <div class="skill-name">${skill.name}</div>
        <div class="progress-bar"><div class="progress" style="width:0%"></div></div>
        <div class="progress-text">${skill.level}%</div>
      `;
      skillsGrid.appendChild(card);

      setTimeout(() => {
        card.querySelector(".progress").style.width = skill.level + "%";
      }, 100);
    });
}

renderSkills();


// ===== Project Card Hover Animation =====
const projects = document.querySelectorAll(".project");
projects.forEach((project) => {
  project.addEventListener("mouseenter", () => {
    project.style.transform = "translateY(-10px) scale(1.03)";
    project.style.boxShadow = "0 15px 30px rgba(0,0,0,0.2)";
  });
  project.addEventListener("mouseleave", () => {
    project.style.transform = "translateY(0) scale(1)";
    project.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
  });
});

// ===== Contact Form Submission =====
const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;

  // Send email using mailto
  const mailtoLink = `mailto:youssifalshafey@gmail.com?subject=Portfolio Message from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
  window.location.href = mailtoLink;

  form.reset();
  alert("Thank you! Your message is ready to send.");
});
