
/* =========================================
   SECTION 08 — CONTACT FORM
========================================= */

(() => {

    const contactForm = document.getElementById(
        "portfolio-contact-form"
    );

    const statusMessage = document.getElementById(
        "contact-form-status"
    );

    if (!contactForm || !statusMessage) {
        return;
    }

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        const name = document.getElementById("contact-name").value.trim();
        const email = document.getElementById("contact-email").value.trim();
        const subject = document.getElementById("contact-subject").value.trim();
        const opportunity = document.getElementById("contact-opportunity").value;
        const message = document.getElementById("contact-message").value.trim();

        if (!name || !email || !subject || !message) {
            statusMessage.textContent =
                "Please complete all required fields.";

            return;
        }

        const emailSubject = encodeURIComponent(
            `[Portfolio Contact] ${subject}`
        );

        const emailBody = encodeURIComponent(
`Hello Srushti,

${message}

------------------------------
Name: ${name}
Email: ${email}
Opportunity: ${opportunity || "Not specified"}
------------------------------

Sent through your portfolio contact form.`
        );

        const mailtoLink =
            `mailto:srushtidewalekar@gmail.com?subject=${emailSubject}&body=${emailBody}`;

        statusMessage.textContent =
            "Opening your email application...";

        window.location.href = mailtoLink;

    });

})();
