
(() => {


console.log("SECTION 03 JS FILE IS RUNNING");


// ============================================
// SECTION 03 — MY CREATIVE LAB / PROJECTS
// ============================================

const projects = [
    {
        id: 1,
        name: "Textile Inventory Management System",
        category: "development",
        type: "Full Stack Development",
        icon: "fa-solid fa-shirt",
        featured: true,
        description: "A web-based inventory management solution designed for small and medium-sized textile businesses.",
        problem: "Small textile shops often rely on manual records and disconnected systems to manage customers, products, inventory, and sales.",
        solution: "Developed a centralized admin dashboard to manage textile products, customer records, stock, and sales efficiently.",
        features: [
            "Admin authentication",
            "Customer management",
            "Textile product management",
            "Inventory and stock tracking",
            "Sales monitoring",
            "Dashboard with visual analytics"
        ],
        technologies: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "Chart.js", "HTML", "CSS"],
        learning: "Improved my understanding of Spring Boot, database integration, business workflows, and dashboard development.",
        github: "https://github.com/Srushti2003/Textile-Inventory-System",
        demo: ""
    },

    {
        id: 2,
        name: "PathFinder – AI-Based Career Suggestion System",
        category: "ai",
        type: "Artificial Intelligence",
        icon: "fa-solid fa-compass",
        featured: false,
        description: "An AI-based career guidance system that recommends suitable career paths based on individual profiles.",
        problem: "Students often struggle to identify career opportunities that align with their interests, skills, and academic backgrounds.",
        solution: "Designed a system that analyzes user interests, skills, academic performance, and personality to suggest relevant career paths.",
        features: [
            "Interest analysis",
            "Skill assessment",
            "Academic performance analysis",
            "Personality-based inputs",
            "Personalized career recommendations",
            "Machine learning-based predictions"
        ],
        technologies: ["Python", "Machine Learning", "Data Preprocessing"],
        learning: "Explored how machine learning can be applied to recommendation systems and personalized guidance.",
        github: "https://github.com/Srushti2003/PathFinder/tree/master",
        demo: ""
    },

    {
        id: 3,
        name: "LexIQ – AI-Powered Legal Assistant",
        category: "ai",
        type: "AI & Natural Language Processing",
        icon: "fa-solid fa-scale-balanced",
        featured: false,
        description: "An AI-powered legal assistant designed to simplify legal information and support legal document analysis.",
        problem: "Understanding lengthy legal judgments and identifying relevant legal provisions can be time-consuming.",
        solution: "Developed an assistant that supports judgment summarization, legal argument generation, section identification, and legal trend analysis.",
        features: [
            "Court judgment summarization",
            "Legal argument generation from case facts",
            "IPC and CrPC section identification",
            "Legal trend analysis",
            "Client-friendly case briefs",
            "Legal information retrieval"
        ],
        technologies: ["Python", "Flask", "NLP Models", "Indian Kanoon API"],
        learning: "Gained experience with NLP applications, API integration, and applying AI to domain-specific problems.",
        github: "https://github.com/Srushti2003/LexIQ",
        demo: ""
    },

    {
        id: 4,
        name: "HUNT IT UP – 3D Treasure Hunt Game",
        category: "development",
        type: "Game Development",
        icon: "fa-solid fa-gamepad",
        featured: false,
        description: "An interactive 3D treasure hunt game featuring an expansive environment, enemies, challenges, and seven progressive levels.",
        problem: "The goal was to create an engaging game experience with exploration, challenges, and progressive gameplay.",
        solution: "Built a 3D game where players explore a map, overcome enemies, and progress through seven levels to discover the final treasure.",
        features: [
            "Seven progressive levels",
            "Interactive 3D environment",
            "Treasure discovery challenges",
            "Enemy encounters and combat",
            "Level progression",
            "3D animated models and environments"
        ],
        technologies: ["Unity", "C#", "3D Modeling", "3D Animation"],
        learning: "Developed an understanding of game mechanics, 3D environments, animation, and interactive design.",
        github: "https://github.com/Srushti2003/Hunt-It-Up-3D-Game",
        demo: ""
    },

    {
        id: 5,
        name: "CodeJam Fun – Interactive Coding Game Website",
        category: "development",
        type: "Web Development",
        icon: "fa-solid fa-code",
        featured: false,
        description: "An educational coding game website that makes programming practice more interactive through code arrangement and debugging challenges.",
        problem: "Beginners need engaging ways to practice programming logic and understand common coding mistakes.",
        solution: "Created a website with two interactive coding challenges: Code Mess and CrackIt.",
        features: [
            "Interactive coding interface",
            "Code Mess – arrange jumbled code lines",
            "CrackIt – identify and fix code errors",
            "Two learning levels",
            "Practice-oriented gameplay"
        ],
        technologies: ["HTML", "CSS", "JavaScript"],
        learning: "Practiced JavaScript logic, DOM manipulation, and interactive user interface development.",
        github: "https://github.com/Srushti2003/CodeJam-Fun-",
        demo: ""
    },

    {
        id: 6,
        name: "WorkOrder Dashboard",
        category: "analytics",
        type: "Business Intelligence",
        icon: "fa-solid fa-screwdriver-wrench",
        featured: false,
        description: "A Power BI dashboard designed to monitor maintenance work orders, breakdown frequency, equipment performance, and maintenance activities.",
        problem: "Maintenance teams need a clear overview of work orders, equipment breakdowns, and task completion status.",
        solution: "Created an interactive dashboard to analyze maintenance activities and provide visibility into equipment performance.",
        features: [
            "Work order monitoring",
            "Breakdown frequency analysis",
            "Equipment performance analysis",
            "Maintenance task status",
            "Interactive filters",
            "Visual KPI reporting"
        ],
        technologies: ["Power BI", "Excel", "DAX"],
        learning: "Strengthened my skills in dashboard development, data visualization, and business intelligence.",
        github: "https://github.com/Srushti2003/Work-Order-Dashboard",
        demo: ""
    },

    {
        id: 7,
        name: "Predictive Maintenance & Failure Dashboard",
        category: "analytics",
        type: "Data Analytics",
        icon: "fa-solid fa-chart-line",
        featured: false,
        description: "A Power BI analytics dashboard that explores equipment failure patterns and sensor measurements.",
        problem: "Understanding equipment faults and sensor patterns is important for monitoring industrial maintenance performance.",
        solution: "Built an interactive dashboard to analyze fault rates, sensor readings, and equipment-related failure patterns.",
        features: [
            "Fault rate analysis",
            "Average sensor readings",
            "Vibration and temperature analysis",
            "Pressure and humidity monitoring",
            "Fault distribution by equipment type",
            "Location-based analysis and filters"
        ],
        technologies: ["Power BI", "DAX", "Equipment Sensor Data"],
        learning: "Learned to analyze industrial datasets and transform sensor information into meaningful visual insights.",
        github: "https://github.com/Srushti2003/Machine-Equipment-Failure",
        demo: ""
    },

    {
        id: 8,
        name: "HRMS – Human Resource Management System",
        category: "development",
        type: "Microservices Architecture",
        icon: "fa-solid fa-users-gear",
        featured: false,
        description: "A microservices-based Human Resource Management System with separate services for employee management, attendance, and payroll.",
        problem: "Managing multiple HR operations in a single tightly coupled application can make systems harder to maintain and scale.",
        solution: "Designed an HRMS using independent microservices connected through a service discovery and API gateway architecture.",
        features: [
            "Employee management service",
            "Attendance management service",
            "Payroll management service",
            "Service discovery",
            "API Gateway",
            "Centralized configuration",
            "REST API documentation",
            "Docker and Kubernetes support"
        ],
        technologies: ["Java", "Spring Boot", "Eureka Server", "API Gateway", "Config Server", "Docker", "Kubernetes", "Swagger"],
        learning: "Explored microservices architecture, service communication, containerization, and distributed application design.",
        github: "",
        demo: ""
    },

    {
        id: 9,
        name: "CEO Executive Intelligence System",
        category: "analytics",
        type: "End-to-End Data Analytics",
        icon: "fa-solid fa-chart-pie",
        featured: true,
        description: "An end-to-end supply chain analytics solution that transforms more than 180K records into executive-level business insights.",
        problem: "Business decision-makers need reliable, consolidated insights into sales, customers, products, geography, and shipping performance.",
        solution: "Built a complete analytics workflow involving Python data processing, PostgreSQL data modeling, SQL analytical views, and a five-page Power BI dashboard.",
        features: [
            "Data cleaning and profiling",
            "PostgreSQL database development",
            "SQL analytical views",
            "Dimensional data modeling",
            "Sales performance analysis",
            "Customer segmentation",
            "Product and geographic analysis",
            "Shipping efficiency analysis",
            "Five-page interactive dashboard"
        ],
        technologies: ["Python", "SQL", "PostgreSQL", "Power BI", "DAX"],
        results: [
            "180K+ records analyzed",
            "36.78M total sales",
            "65K+ orders",
            "20K+ customers",
            "Five-page dashboard"
        ],
        learning: "Gained hands-on experience in end-to-end analytics workflows, database design, SQL analysis, and executive dashboard development.",
        github: "https://github.com/Srushti2003/CEO-Executive-Intelligence-System",
        demo: ""
    },

    {
        id: 10,
        name: "E-Commerce Customer Intelligence System",
        category: "analytics",
        type: "Customer & Business Analytics",
        icon: "fa-solid fa-cart-shopping",
        featured: false,
        description: "An e-commerce analytics solution using the Olist dataset to explore sales trends, customer behavior, product performance, and regional revenue.",
        problem: "E-commerce businesses need to understand customer behavior and sales performance across multiple business dimensions.",
        solution: "Analyzed nine relational tables using SQL and Python, performed customer segmentation, and developed a five-page Power BI dashboard.",
        features: [
            "Analysis of nine relational tables",
            "Sales trend analysis",
            "Customer behavior analysis",
            "Product performance analysis",
            "Regional revenue analysis",
            "Python data cleaning and EDA",
            "RFM customer segmentation",
            "Five-page Power BI dashboard",
            "DAX-based KPIs"
        ],
        technologies: ["PostgreSQL", "SQL", "Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "DAX"],
        learning: "Strengthened my skills in SQL, exploratory data analysis, customer segmentation, and interactive business reporting.",
        github: "https://github.com/Srushti2003/E-Commerce-Customer-Intelligence-System",
        demo: ""
    },

    {
        id: 11,
        name: "Product Analytics & Checkout A/B Testing System",
        category: "experimentation",
        type: "Product Analytics & Experimentation",
        icon: "fa-solid fa-flask",
        featured: false,
        description: "A simulated e-commerce checkout experiment involving data quality validation, conversion analysis, statistical testing, and Power BI reporting.",
        problem: "Product teams need to understand whether a checkout experience change improves conversion and revenue.",
        solution: "Designed a control-versus-treatment experiment with validation rules, a 72-hour conversion window, statistical tests, and an interactive dashboard.",
        features: [
            "Control and treatment group analysis",
            "Data quality validation",
            "Bot traffic exclusions",
            "Cross-variant exclusion",
            "72-hour conversion window",
            "Hypothesis testing",
            "Confidence intervals",
            "Welch's t-test",
            "Bootstrap analysis",
            "Interactive Power BI dashboard"
        ],
        technologies: ["Python", "SQL", "SQLite", "Power BI", "DAX", "Statistical Testing"],
        results: [
            "Control conversion: 7.72%",
            "Treatment conversion: 9.21%",
            "Relative conversion lift: 19.23%",
            "Revenue per eligible user increased by 16.74% in treatment"
        ],
        learning: "Learned how to structure experiments, validate analytical datasets, perform statistical testing, and communicate results.",
        github: "https://github.com/Srushti2003/Product-Analytics---Checkout-AB-Testing-System",
        demo: ""
    },

    {
        id: 12,
        name: "Data Quality Detective – AI-Powered Data Reliability Platform",
        category: "ai",
        type: "Data Science & AI",
        icon: "fa-solid fa-magnifying-glass-chart",
        featured: true,
        description: "An end-to-end data reliability platform for profiling, validation, anomaly detection, distribution drift monitoring, and root cause investigation.",
        problem: "Unreliable data, hidden anomalies, and distribution changes can affect the quality of analytics and machine learning outcomes.",
        solution: "Developed a platform combining statistical techniques, machine learning methods, database storage, and an interactive Streamlit interface.",
        features: [
            "Data profiling and validation",
            "IQR anomaly detection",
            "Z-score and Modified Z-score",
            "Isolation Forest",
            "Distribution drift detection",
            "Root cause investigation workflows",
            "Problematic segment detection",
            "PostgreSQL storage",
            "Interactive Streamlit and Plotly interface",
            "Automated tests and CI pipeline"
        ],
        technologies: ["Python", "SQL", "PostgreSQL", "Pandas", "Scikit-learn", "SciPy", "Streamlit", "Plotly", "GitHub Actions"],
        results: [
            "Four anomaly detection methods",
            "227 passing tests",
            "98% code coverage",
            "GitHub Actions CI integration"
        ],
        learning: "Explored statistical anomaly detection, machine learning-based reliability checks, data drift, automated testing, and deployment workflows.",
        github: "https://github.com/Srushti2003/data-quality-detective",
        demo: ""
    }
];


// ============================================
// DOM ELEMENTS
// ============================================

const projectGrid = document.getElementById("projects-grid");
const filterButtons = document.querySelectorAll(".filter-btn");
const projectModal = document.getElementById("project-modal");


// Move the modal directly under body.
// This avoids stacking and overflow issues from parent sections.

if (projectModal && projectModal.parentElement !== document.body) {
    document.body.appendChild(projectModal);
}


// ============================================
// RENDER PROJECT CARDS
// ============================================

function renderProjects(filter = "all") {

    if (!projectGrid) return;

    const filteredProjects = filter === "all"
        ? projects
        : projects.filter(project => project.category === filter);

    projectGrid.innerHTML = filteredProjects.map(project => `

        <article class="project-card ${project.featured ? "featured-project" : ""}">

            <div class="project-card-top">

                <span class="project-icon">
                    <i class="${project.icon}"></i>
                </span>

                ${project.featured
                    ? '<span class="featured-label">✦ Featured</span>'
                    : ""
                }

            </div>

            <span class="project-type">${project.type}</span>

            <h3>${project.name}</h3>

            <p>${project.description}</p>

            <div class="project-tech-preview">

                ${project.technologies.slice(0, 4).map(tech =>
                    `<span>${tech}</span>`
                ).join("")}

                ${project.technologies.length > 4
                    ? `<span>+${project.technologies.length - 4}</span>`
                    : ""
                }

            </div>

            <button
                class="project-view-btn"
                data-project-id="${project.id}"
                type="button"
            >
                Explore Project
                <i class="fa-solid fa-arrow-right"></i>
            </button>

        </article>

    `).join("");


    // Add click event to Explore Project buttons

    document.querySelectorAll(".project-view-btn, .view-project-btn").forEach(button => {
    button.addEventListener("click", () => {
        openProject(Number(button.dataset.projectId));
    });
});

}


// ============================================
// OPEN PROJECT MODAL
// ============================================

function openProject(id) {

    const project = projects.find(item => item.id === id);

    if (!project || !projectModal) return;


    // Basic project information

    document.getElementById("modal-category").textContent = project.type;

    document.getElementById("modal-title").textContent = project.name;

    document.getElementById("modal-description").textContent = project.description;


    // Project problem and solution

    document.getElementById("modal-problem").textContent = project.problem;

    document.getElementById("modal-approach").textContent = project.solution;


    // Project number

    const modalNumber = document.getElementById("modal-number");

    if (modalNumber) {

        modalNumber.textContent =
            `PROJECT ${String(project.id).padStart(2, "0")}`;

    }


    // Project features

    document.getElementById("modal-features").innerHTML =
        project.features.map(feature => `<li>${feature}</li>`).join("");


    // Results and highlights

    const outcomes = document.getElementById("modal-outcomes");

    if (project.results && project.results.length) {

        outcomes.textContent = project.results.join(" • ");

    } else {

        outcomes.textContent =
            "A practical project developed through experimentation and continuous learning.";

    }


    // Technologies used

    document.getElementById("modal-tech").innerHTML =
        project.technologies.map(tech => `<span>${tech}</span>`).join("");


    // What I learned

    document.getElementById("modal-learning").textContent = project.learning;


    // Project note

    const note = document.getElementById("modal-note");

    if (note) {

        note.textContent = "";

    }


    // ========================================
    // GITHUB BUTTON
    // ========================================

    const githubBtn = document.getElementById("modal-github");

    if (githubBtn) {

        const githubUrl =
            typeof project.github === "string"
                ? project.github.trim()
                : "";

        if (githubUrl) {

            githubBtn.href = githubUrl;

            githubBtn.target = "_blank";

            githubBtn.rel = "noopener noreferrer";

            githubBtn.classList.remove("disabled");

            githubBtn.removeAttribute("aria-disabled");

            githubBtn.style.pointerEvents = "auto";

            githubBtn.style.display = "inline-flex";

        } else {

            githubBtn.removeAttribute("href");

            githubBtn.classList.add("disabled");

            githubBtn.setAttribute("aria-disabled", "true");

            githubBtn.style.pointerEvents = "none";

            githubBtn.style.display = "none";

        }

    }


    // ========================================
    // LIVE DEMO BUTTON
    // ========================================

    const demoBtn = document.getElementById("modal-demo");

    if (demoBtn) {

        const demoUrl =
            typeof project.demo === "string"
                ? project.demo.trim()
                : "";

        if (demoUrl) {

            demoBtn.href = demoUrl;

            demoBtn.target = "_blank";

            demoBtn.rel = "noopener noreferrer";

            demoBtn.classList.remove("disabled");

            demoBtn.removeAttribute("aria-disabled");

            demoBtn.style.pointerEvents = "auto";

            demoBtn.style.display = "inline-flex";

        } else {

            // Hide the button when no actual live demo URL exists.

            demoBtn.removeAttribute("href");

            demoBtn.classList.add("disabled");

            demoBtn.setAttribute("aria-disabled", "true");

            demoBtn.style.pointerEvents = "none";

            demoBtn.style.display = "none";

        }

    }


    // ========================================
    // DISPLAY MODAL
    // ========================================

    projectModal.classList.add("active");

    projectModal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");


    // Focus close button

    const closeButton = document.getElementById("modal-close");

    if (closeButton) {

        closeButton.focus();

    }

}


// ============================================
// CLOSE PROJECT MODAL
// ============================================

function closeProject() {

    if (!projectModal) return;

    projectModal.classList.remove("active");

    projectModal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");

}


// ============================================
// PROJECT FILTERS
// ============================================

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(item => {

            item.classList.remove("active");

        });

        button.classList.add("active");

        renderProjects(button.dataset.filter);

    });

});


// ============================================
// MODAL CLOSE BUTTON
// ============================================

const modalCloseButton = document.getElementById("modal-close");

if (modalCloseButton) {

    modalCloseButton.addEventListener("click", closeProject);

}


// ============================================
// CLICK OUTSIDE MODAL TO CLOSE
// ============================================

const modalOverlay = document.getElementById("modal-overlay");

if (modalOverlay) {

    modalOverlay.addEventListener("click", closeProject);

}


// ============================================
// ESCAPE KEY TO CLOSE MODAL
// ============================================

document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        projectModal &&
        projectModal.classList.contains("active")
    ) {

        closeProject();

    }

});


// ============================================
// INITIALIZE PROJECT SECTION
// ============================================

renderProjects();

// Make modal functions globally accessible
window.openProject = openProject;
window.closeProject = closeProject;

console.log("SECTION 03 JS FILE FINISHED");
console.log("OPEN PROJECT:", typeof window.openProject);
})();