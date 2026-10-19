const projects = [
  { title: "Luma Finance", type: "product", label: "Product design · 2026", color: "#cef564", url: "https://github.com/your-username/", featured: true },
  { title: "Sonder Studio", type: "web", label: "Web development · 2025", color: "#9fbcff", url: "https://github.com/your-username/" },
  { title: "Echoes", type: "experiment", label: "Interactive experiment · 2025", color: "#ff9a78", url: "https://github.com/your-username/" },
  { title: "Field Notes", type: "web", label: "Editorial platform · 2024", color: "#e6a8ff", url: "https://github.com/your-username/" },
];

const skills = ["JavaScript", "React", "Next.js", "TypeScript", "CSS", "Figma", "Framer Motion", "Node.js"];
const projectGrid = document.querySelector("#project-grid");
const toolkit = document.querySelector("#toolkit");

function drawProjects(filter = "all") {
  projectGrid.innerHTML = projects
    .filter((project) => filter === "all" || project.type === filter)
    .map((project, index) => `
      <a class="project" href="${project.url}" target="_blank" rel="noreferrer" style="background:${project.color}" aria-label="View ${project.title}">
        <span class="project-number">0${index + 1}</span>
        <span class="project-shape" aria-hidden="true"></span>
        <div class="project-info">
          <div><h3>${project.title}</h3><p>${project.label}</p></div>
          <span class="project-arrow" aria-hidden="true">↗</span>
        </div>
      </a>`)
    .join("");
}

toolkit.innerHTML = skills.map((skill) => `<span>${skill}</span>`).join("");
drawProjects();
document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelectorAll(".filters button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filters .active").classList.remove("active");
    button.classList.add("active");
    drawProjects(button.dataset.filter);
  });
});
