
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);

        const response = await fetch("/send-message", {
            method: "POST",
            body: formData,
        });

        const result = await response.json();

        if (result.success) {
            alert("Your message has been sent!");
            contactForm.reset();
        } else {
            alert("Something went wrong. Try again.");
        }
    });
}


const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

faders.forEach(el => observer.observe(el));
