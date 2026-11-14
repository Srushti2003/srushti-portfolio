
/* =========================================
   SECTION 06 — EXPERIENCE JAVASCRIPT
========================================= */

(() => {

    "use strict";

    console.log("SECTION 06 JS FILE IS RUNNING");

    const expandButton = document.getElementById(
        "experience-expand-btn"
    );

    const experienceDetails = document.getElementById(
        "experience-details"
    );

    if (!expandButton || !experienceDetails) {
        console.error(
            "Section 06: Required HTML elements were not found."
        );
        return;
    }

    expandButton.addEventListener("click", () => {

        const isExpanded =
            expandButton.getAttribute("aria-expanded") === "true";

        if (isExpanded) {

            experienceDetails.hidden = true;

            expandButton.setAttribute(
                "aria-expanded",
                "false"
            );

            expandButton.querySelector("span:first-child")
                .textContent = "Explore My Contributions";

        } else {

            experienceDetails.hidden = false;

            expandButton.setAttribute(
                "aria-expanded",
                "true"
            );

            expandButton.querySelector("span:first-child")
                .textContent = "Show Less";

        }

    });

    console.log("SECTION 06 JS FILE FINISHED");

})();
