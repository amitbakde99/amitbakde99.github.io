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

// Project filtering
document.querySelectorAll('.project-category h2').forEach(category => {
    category.addEventListener('click', () => {
        category.nextElementSibling.classList.toggle('hidden');
    });
});

// Expand project descriptions
document.querySelectorAll('.project .btn').forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault();
        const project = event.target.closest('.project');
        const description = project.querySelector('p');
        description.classList.toggle('expanded');
    });
});
