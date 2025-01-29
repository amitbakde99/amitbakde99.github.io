// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const sectionID = event.target.getAttribute('href').substring(1);
        document.getElementById(sectionID).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', event => {
    event.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    event.target.reset();
});
