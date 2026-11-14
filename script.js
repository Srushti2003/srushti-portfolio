
/* =====================================
   SEOUL LIFE - TYPING ANIMATION
===================================== */

const typingElement = document.getElementById("typing-text");

const roles = [
    "Data Analyst",
    "Power BI Developer",
    "Data Scientist",
    "Full Stack Developer",
    "Java Developer",
    "Machine Learning & AI Developer"
];

let roleIndex = 0;
let characterIndex = 0;

let isDeleting = false;

const typingSpeed = 90;
const deletingSpeed = 45;
const pauseDuration = 1600;

const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;


function typeRole() {

    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (reducedMotion) {
        typingElement.textContent = currentRole;
        roleIndex = (roleIndex + 1) % roles.length;

        setTimeout(typeRole, 3000);
        return;
    }

    if (!isDeleting) {

        // Add one character
        typingElement.textContent =
            currentRole.substring(0, characterIndex + 1);

        characterIndex++;

        // Complete word
        if (characterIndex === currentRole.length) {

            isDeleting = true;

            setTimeout(typeRole, pauseDuration);

            return;
        }

        setTimeout(typeRole, typingSpeed);

    } else {

        // Delete one character
        typingElement.textContent =
            currentRole.substring(0, characterIndex - 1);

        characterIndex--;

        // Word completely deleted
        if (characterIndex === 0) {

            isDeleting = false;

            roleIndex = (roleIndex + 1) % roles.length;

            setTimeout(typeRole, 400);

            return;
        }

        setTimeout(typeRole, deletingSpeed);

    }

}


// Start typing animation
document.addEventListener("DOMContentLoaded", () => {

    typeRole();

});


/* =========================================
   SECTION 02 — ABOUT ME TABS
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const aboutTabs = document.querySelectorAll(".about-tab");
    const aboutPanels = document.querySelectorAll(".about-panel");

    aboutTabs.forEach((tab) => {

        tab.addEventListener("click", () => {

            const targetId = tab.dataset.tab;

            // Remove active state from all tabs
            aboutTabs.forEach((item) => {
                item.classList.remove("active");
                item.setAttribute("aria-selected", "false");
            });

            // Hide all panels
            aboutPanels.forEach((panel) => {
                panel.classList.remove("active");
                panel.hidden = true;
            });

            // Activate selected tab
            tab.classList.add("active");
            tab.setAttribute("aria-selected", "true");

            // Display selected panel
            const targetPanel = document.getElementById(targetId);

            if (targetPanel) {
                targetPanel.hidden = false;
                targetPanel.classList.add("active");
            }

        });

    });

});

/* ================= SECTION 03: PROJECT DATA ================= */

const projects = [

    {
        id: 1,
        name: "Textile Inventory Management System",
        category: "development",
        categoryName: "Full-Stack Development",
        icon: "fa-solid fa-boxes-stacked",
        featured: false,
        description: "A web-based inventory management application designed to simplify daily operations for small-to-medium textile businesses.",
        problem: "Small textile shops often rely on manual records or disconnected systems to manage inventory, customer information, and sales. This makes stock tracking and business monitoring difficult.",
        approach: "Designed a centralized administrative application around the shop owner's workflow. Structured the database with MySQL, implemented backend functionality using Spring Boot, developed interfaces using Thymeleaf, and integrated Chart.js for visual analytics.",
        features: [
            "Admin authentication and management",
            "Customer information management",
            "Textile product management",
            "Inventory and stock tracking",
            "Sales monitoring",
            "Interactive dashboard and visual analytics",
            "Centralized database management"
        ],
        outcomes: "Developed a practical inventory management solution that centralizes shop operations, simplifies stock monitoring, organizes customer records, and provides visual sales insights.",
        tech: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "Chart.js", "HTML", "CSS"],
        type: "Full-Stack Web Application",
        learning: "Spring Boot backend development, MySQL database design, server-side rendering, business workflow implementation, and dashboard development.",
        note: "Customers place orders through phone calls or in-store visits. This is an administrative inventory system, not an online shopping portal."
    },

    {
        id: 2,
        name: "PathFinder – AI-Based Career Suggestion System",
        category: "ai",
        categoryName: "AI & Machine Learning",
        icon: "fa-solid fa-compass",
        featured: false,
        description: "An AI-powered career guidance system that analyzes interests, skills, academic performance, and personality traits to recommend suitable career paths.",
        problem: "Students and job seekers can struggle to identify career paths that align with their abilities, interests, and academic backgrounds.",
        approach: "Explored career recommendation requirements, prepared relevant input features, applied data preprocessing, and developed a machine learning-based recommendation workflow.",
        features: [
            "User interest analysis",
            "Skill-based evaluation",
            "Academic information analysis",
            "Personality-based assessment",
            "Personalized career recommendations",
            "Machine learning-based prediction"
        ],
        outcomes: "Developed an AI-based career suggestion concept demonstrating how machine learning can support personalized career exploration.",
        tech: ["Python", "Machine Learning", "Data Preprocessing"],
        type: "AI / ML Application",
        learning: "Data preprocessing, feature engineering, machine learning model development, recommendation system concepts, and applying AI to real-world problems.",
        note: "Designed to support career exploration, not replace professional career counseling."
    },

    {
        id: 3,
        name: "LexIQ – AI-Powered Legal Assistant",
        category: "ai",
        categoryName: "AI & NLP",
        icon: "fa-solid fa-scale-balanced",
        featured: false,
        description: "An AI-powered legal assistant that simplifies legal research through judgment summaries, legal argument generation, section identification, and case briefs.",
        problem: "Analyzing lengthy court judgments and complex legal documents manually can be time-consuming for legal professionals, students, and researchers.",
        approach: "Designed the legal assistant workflow, developed a Flask backend, integrated Indian Kanoon API-based information retrieval, and implemented NLP-based processing.",
        features: [
            "Court judgment summarization",
            "Legal argument generation from case facts",
            "IPC / CrPC section identification",
            "Legal trend analysis",
            "Client-friendly case brief generation",
            "Legal information retrieval through API"
        ],
        outcomes: "Developed a legal assistance platform bringing multiple legal research and document simplification functionalities into one application.",
        tech: ["Python", "Flask", "NLP Models", "Indian Kanoon API"],
        type: "AI / NLP Application",
        learning: "NLP application development, Flask backend development, third-party API integration, legal text processing, and AI-assisted information retrieval.",
        note: "A research and productivity assistant, not a replacement for qualified legal advice."
    },

    {
        id: 4,
        name: "HUNT IT UP – 3D Treasure Hunt Game",
        category: "development",
        categoryName: "Game Development",
        icon: "fa-solid fa-gamepad",
        featured: false,
        description: "An immersive 3D treasure hunt game developed using Unity and C#, featuring seven levels, treasure discovery, enemy combat, and an expansive environment.",
        problem: "A creative entertainment project exploring interactive gameplay, level progression, and immersive 3D experiences.",
        approach: "Planned seven progressive levels, designed a large 3D environment, created animated models, and implemented gameplay mechanics using C# in Unity.",
        features: [
            "Seven progressive game levels",
            "Large 3D exploration map",
            "Hidden treasure discovery",
            "Enemy combat mechanics",
            "Level progression system",
            "Final treasure objective",
            "3D animated models and environments"
        ],
        outcomes: "Created a seven-level 3D treasure hunt game featuring exploration, combat, animated models, and progressive gameplay challenges.",
        tech: ["Unity", "C#", "3D Modeling", "3D Animation"],
        type: "3D Game Development",
        learning: "Unity game development, C# programming, 3D environment design, animation integration, gameplay mechanics, and level design.",
        note: "The seventh level concludes with the discovery of the main treasure."
    },

    {
        id: 5,
        name: "CodeJam Fun – Interactive Coding Game",
        category: "development",
        categoryName: "Web Development",
        icon: "fa-solid fa-code",
        featured: false,
        description: "An interactive educational website that makes coding practice engaging through fun challenges involving code arrangement and debugging.",
        problem: "Traditional programming practice can feel repetitive, while beginners may need more engaging ways to develop code-reading and debugging skills.",
        approach: "Designed the website interface, structured two interactive game levels, and implemented game interactions using JavaScript.",
        features: [
            "Interactive web-based game interface",
            "Two gameplay levels",
            "Code Mess: Arrange jumbled code lines",
            "CrackIt: Identify and fix code errors",
            "Interactive programming challenges"
        ],
        outcomes: "Developed an educational website that combines programming practice with game-based learning.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        type: "Interactive Web Application",
        learning: "Frontend development, JavaScript interactivity, DOM manipulation, game logic implementation, and user interface design.",
        note: "The two challenges are designed to encourage logical thinking and programming knowledge."
    },

    {
        id: 6,
        name: "WorkOrder Dashboard",
        category: "analytics",
        categoryName: "Data Analytics",
        icon: "fa-solid fa-clipboard-list",
        featured: false,
        description: "An interactive Power BI dashboard for monitoring maintenance work orders, breakdown frequency, equipment performance, and maintenance task status.",
        problem: "Maintenance teams need clear visibility into equipment breakdowns, maintenance activities, and work order progress to monitor operational performance.",
        approach: "Prepared source data using Excel, structured reporting data, developed DAX calculations, and designed interactive Power BI visuals and filters.",
        features: [
            "Work order monitoring",
            "Breakdown frequency analysis",
            "Equipment performance visualization",
            "Maintenance task status tracking",
            "Date-based filtering",
            "Category and status filtering",
            "Interactive visualizations"
        ],
        outcomes: "Created an interactive maintenance dashboard supporting work order tracking, breakdown analysis, and equipment performance monitoring.",
        tech: ["Power BI", "Excel", "DAX"],
        type: "Business Intelligence Dashboard",
        learning: "Data cleaning, Power BI dashboard development, DAX calculations, KPI design, and operational data analysis.",
        note: "Focused on maintenance analytics and operational performance monitoring."
    },

    {
        id: 7,
        name: "Predictive Maintenance & Failure Dashboard",
        category: "analytics",
        categoryName: "Data Analytics",
        icon: "fa-solid fa-gauge-high",
        featured: false,
        description: "An interactive Power BI dashboard analyzing equipment failure patterns and sensor measurements to support maintenance analysis.",
        problem: "Unexpected equipment failures can disrupt operations. Understanding fault patterns and sensor behavior can help organizations investigate potential risks and plan maintenance activities.",
        approach: "Prepared equipment data, identified relevant sensor and failure metrics, created analytical calculations, and developed interactive dashboard visuals.",
        features: [
            "Fault rate visualization",
            "Average sensor readings",
            "Vibration monitoring",
            "Temperature analysis",
            "Pressure and humidity analysis",
            "Fault distribution by equipment type",
            "Location-based failure analysis",
            "Interactive filters"
        ],
        outcomes: "Developed a consolidated dashboard showing equipment faults, sensor measurements, and failure distributions for maintenance analysis.",
        tech: ["Power BI", "DAX", "Equipment Sensor Data"],
        type: "Maintenance Analytics Dashboard",
        learning: "Equipment data analysis, predictive maintenance concepts, Power BI visualization, sensor metric interpretation, and failure trend analysis.",
        note: "This is an analytics dashboard. A machine learning-based failure prediction model is not confirmed."
    },

    {
        id: 8,
        name: "HRMS – Human Resource Management System",
        category: "development",
        categoryName: "Backend & Microservices",
        icon: "fa-solid fa-users-gear",
        featured: false,
        description: "A microservices-based Human Resource Management System with independent services for employee information, attendance, and payroll.",
        problem: "Managing employee records, attendance, and payroll through disconnected systems can create operational complexity.",
        approach: "Structured the application using microservices architecture, separated HR functionalities into independent services, and configured service discovery, API routing, and centralized configuration.",
        features: [
            "Employee management service",
            "Attendance management service",
            "Payroll management service",
            "Eureka service discovery",
            "API Gateway request routing",
            "Centralized Config Server",
            "Docker containerization",
            "Kubernetes orchestration",
            "Swagger API documentation"
        ],
        outcomes: "Developed a modular HRMS architecture demonstrating microservices-based application design, distributed service communication, API management, and containerization.",
        tech: ["Java", "Spring Boot", "Eureka", "API Gateway", "Config Server", "REST APIs", "Docker", "Kubernetes", "Swagger"],
        type: "Microservices Application",
        learning: "Microservices architecture, Spring Boot, service discovery, API Gateway, REST communication, Docker, Kubernetes, and Swagger documentation.",
        note: "Designed to separate HR business functionalities into independently manageable services."
    },

    {
        id: 9,
        name: "CEO Executive Intelligence System",
        category: "analytics",
        categoryName: "Business Intelligence",
        icon: "fa-solid fa-chart-pie",
        featured: true,
        description: "An end-to-end supply chain analytics solution transforming 180K+ records into executive-level insights using Python, PostgreSQL, SQL, and Power BI.",
        problem: "Decision-makers need a consolidated understanding of sales, customers, product performance, geographical trends, and shipping efficiency.",
        approach: "Processed and profiled 180K+ records using Python, structured analytical data in PostgreSQL, developed SQL views and a dimensional model, and built a five-page Power BI dashboard.",
        features: [
            "Python-based data cleaning and profiling",
            "PostgreSQL data warehouse",
            "SQL analytical views",
            "Dimensional data modeling",
            "Sales performance analysis",
            "Customer segmentation",
            "Product and geographic analysis",
            "Shipping efficiency analysis",
            "Five-page Power BI dashboard"
        ],
        outcomes: "Processed 180K+ records, analyzed 36.78M in sales, evaluated 65K+ orders and 20K+ customers, and developed a five-page interactive dashboard.",
        tech: ["Python", "SQL", "PostgreSQL", "Power BI", "DAX"],
        type: "End-to-End Analytics Solution",
        learning: "Data engineering, data warehousing, PostgreSQL, SQL business analysis, dimensional modeling, Power BI, DAX, and executive KPI reporting.",
        note: "The sales figure is shown without a currency symbol because the project details do not specify a currency."
    },

    {
        id: 10,
        name: "E-Commerce Customer Intelligence System",
        category: "analytics",
        categoryName: "Customer Analytics",
        icon: "fa-solid fa-cart-shopping",
        featured: true,
        description: "An end-to-end e-commerce analytics solution using the Olist dataset to understand sales, customer behavior, product performance, and regional revenue.",
        problem: "E-commerce businesses generate large volumes of transactional data. Without analysis, identifying sales trends, valuable customer segments, and product performance can be challenging.",
        approach: "Explored a nine-table PostgreSQL database, performed Python-based cleaning and EDA, implemented RFM customer segmentation, and developed a five-page Power BI dashboard.",
        features: [
            "Nine-table relational database analysis",
            "Sales trend analysis",
            "Customer behavior analysis",
            "Product performance analysis",
            "Regional revenue analysis",
            "Python-based data cleaning and EDA",
            "RFM customer segmentation",
            "Five-page interactive dashboard",
            "DAX-based KPI reporting"
        ],
        outcomes: "Combined SQL, Python, RFM analysis, and Power BI into a structured workflow, with a five-page dashboard covering sales, customers, products, geography, and customer value.",
        tech: ["PostgreSQL", "SQL", "Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "DAX"],
        type: "End-to-End Data Analytics",
        learning: "Relational database analysis, advanced SQL, Python EDA, RFM segmentation, data visualization, DAX, and e-commerce performance analysis.",
        note: "Built using the Olist e-commerce dataset."
    },

    {
        id: 11,
        name: "Product Analytics & Checkout A/B Testing",
        category: "experimentation",
        categoryName: "Product Analytics",
        icon: "fa-solid fa-flask",
        featured: true,
        description: "A simulated e-commerce checkout experiment combining data quality checks, conversion analysis, statistical testing, and an interactive Power BI dashboard.",
        problem: "Without proper experimentation and statistical analysis, it can be difficult to determine whether a new checkout experience meaningfully improves conversions and revenue.",
        approach: "Processed experimental data using Python, SQL, and SQLite; applied eligibility and exclusion rules; measured conversions over a 72-hour window; and evaluated results using statistical tests.",
        features: [
            "Control and treatment group comparison",
            "Data quality validation",
            "Bot traffic exclusions",
            "Cross-variant user exclusions",
            "72-hour conversion measurement",
            "Hypothesis testing",
            "Confidence interval analysis",
            "Welch's t-test and bootstrap",
            "Interactive Power BI dashboard"
        ],
        outcomes: "Control conversion: 7.72%. Treatment conversion: 9.21%. Relative conversion lift: 19.23%. Revenue per eligible user was 16.74% higher in the treatment group.",
        tech: ["Python", "SQL", "SQLite", "Power BI", "DAX", "Statistical Testing"],
        type: "Product Analytics & Experimentation",
        learning: "A/B testing, hypothesis testing, confidence intervals, Welch's t-test, bootstrap analysis, conversion optimization, and product analytics.",
        note: "This was a simulated experiment. The reported lift is an analytical result, not a verified improvement from a live commercial deployment."
    },

    {
        id: 12,
        name: "Data Quality Detective – AI-Powered Data Reliability Platform",
        category: "ai",
        categoryName: "Data Science & Engineering",
        icon: "fa-solid fa-magnifying-glass-chart",
        featured: true,
        description: "An end-to-end data reliability platform for dataset profiling, validation, anomaly detection, distribution drift monitoring, and root cause investigation.",
        problem: "Poor data quality, unexpected anomalies, and changing data distributions can affect analytics and machine learning systems. Finding these problems manually can be time-consuming.",
        approach: "Built a modular Python platform combining statistical and machine learning-based anomaly detection, drift monitoring, root cause workflows, PostgreSQL storage, a Streamlit interface, automated tests, and CI.",
        features: [
            "Dataset profiling and validation",
            "IQR anomaly detection",
            "Z-score anomaly detection",
            "Modified Z-score detection",
            "Isolation Forest",
            "Statistical distribution drift detection",
            "Root cause investigation workflows",
            "Problematic data segment identification",
            "PostgreSQL persistent storage",
            "Streamlit and Plotly interface",
            "Automated tests and GitHub Actions CI"
        ],
        outcomes: "Implemented four anomaly detection techniques, integrated drift detection and root cause workflows, achieved 227 passing tests and 98% code coverage, and configured GitHub Actions CI.",
        tech: ["Python", "SQL", "PostgreSQL", "Pandas", "Scikit-learn", "SciPy", "Streamlit", "Plotly", "GitHub Actions"],
        type: "Data Reliability Platform",
        learning: "Data quality engineering, anomaly detection, data drift monitoring, root cause analysis, Python architecture, PostgreSQL, automated testing, and CI.",
        note: "The 227 passing tests and 98% code coverage are the reported project results; update them if your latest repository results change."
    }
];


/* ================= RENDER PROJECT CARDS ================= */

const projectsGrid = document.getElementById("projects-grid");

function renderProjects(filter = "all") {

    const filteredProjects = filter === "all"
        ? projects
        : projects.filter(project => project.category === filter);

    projectsGrid.innerHTML = "";

    filteredProjects.forEach((project, index) => {

        const card = document.createElement("article");

        card.className = `project-card ${project.featured ? "featured-project" : ""}`;
        card.style.animationDelay = `${index * 0.06}s`;

        const techTags = project.tech.slice(0, 4).map(tech =>
            `<span class="tech-tag">${tech}</span>`
        ).join("");

        const extraTech = project.tech.length > 4
            ? `<span class="tech-tag">+${project.tech.length - 4} more</span>`
            : "";

        card.innerHTML = `

            ${project.featured
                ? `<span class="featured-label">✦ FEATURED</span>`
                : ""
            }

            <div class="project-card-top">
                <span class="project-category">${project.categoryName}</span>
                <span class="project-number">#${String(project.id).padStart(2, "0")}</span>
            </div>

            <div class="project-icon">
                <i class="${project.icon}"></i>
            </div>

            <h3>${project.name}</h3>

            <p class="project-description">
                ${project.description}
            </p>

            <div class="project-tech">
                ${techTags}
                ${extraTech}
            </div>

            <div class="project-card-bottom">
                <span class="project-type">${project.type}</span>

                <button class="view-project-btn"
                        type="button"
                        data-project-id="${project.id}">
                    View Details <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        `;

        projectsGrid.appendChild(card);
    });
}


/* ================= PROJECT FILTERS ================= */

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        renderProjects(button.dataset.filter);

    });

});


/* ================= PROJECT DETAILS MODAL ================= */

const modal = document.getElementById("project-modal");
const modalOverlay = document.getElementById("modal-overlay");
const modalClose = document.getElementById("modal-close");

let previousFocus = null;

function openProjectModal(projectId) {

    const project = projects.find(item => item.id === Number(projectId));

    if (!project) return;

    previousFocus = document.activeElement;

    document.getElementById("modal-category").textContent =
        project.categoryName;

    document.getElementById("modal-number").textContent =
        `PROJECT ${String(project.id).padStart(2, "0")} / 12`;

    document.getElementById("modal-title").textContent =
        project.name;

    document.getElementById("modal-description").textContent =
        project.description;

    document.getElementById("modal-problem").textContent =
        project.problem;

    document.getElementById("modal-approach").textContent =
        project.approach;

    document.getElementById("modal-outcomes").textContent =
        project.outcomes;

    document.getElementById("modal-learning").textContent =
        project.learning;

    document.getElementById("modal-note").textContent =
        project.note || "";

    /* Features */

    const featureList = document.getElementById("modal-features");

    featureList.innerHTML = "";

    project.features.forEach(feature => {

        const li = document.createElement("li");
        li.textContent = feature;

        featureList.appendChild(li);

    });

    /* Technologies */

    const techList = document.getElementById("modal-tech");

    techList.innerHTML = "";

    project.tech.forEach(tech => {

        const span = document.createElement("span");

        span.className = "tech-tag";
        span.textContent = tech;

        techList.appendChild(span);

    });

    /* Links - URLs can be added to each project later */

    const githubLink = document.getElementById("modal-github");
    const demoLink = document.getElementById("modal-demo");

    setProjectLink(githubLink, project.github);
    setProjectLink(demoLink, project.demo);

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

    modalClose.focus();
}

function setProjectLink(element, url) {

    if (url && url.trim() !== "") {

        element.href = url;
        element.classList.remove("disabled");
        element.removeAttribute("aria-disabled");
        element.tabIndex = 0;

    } else {

        element.removeAttribute("href");
        element.classList.add("disabled");
        element.setAttribute("aria-disabled", "true");
        element.tabIndex = -1;

    }
}

function closeProjectModal() {

    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    if (previousFocus && typeof previousFocus.focus === "function") {
        previousFocus.focus();
    }
}


/* Open modal using event delegation */

projectsGrid.addEventListener("click", event => {

    const button = event.target.closest(".view-project-btn");

    if (!button) return;

    openProjectModal(button.dataset.projectId);

});


/* Close modal */

modalClose.addEventListener("click", closeProjectModal);

modalOverlay.addEventListener("click", closeProjectModal);


/* Keyboard accessibility */

document.addEventListener("keydown", event => {

    if (!modal.classList.contains("open")) return;

    if (event.key === "Escape") {
        closeProjectModal();
    }

    if (event.key === "Tab") {

        const focusableElements = modal.querySelectorAll(
            'button:not(:disabled):not([tabindex="-1"]), a[href]'
        );

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
        }
    }

});


/* ================= INITIALIZE ================= */

renderProjects();