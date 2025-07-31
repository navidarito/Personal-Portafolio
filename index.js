// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Hamburger menu functionality
const hamburgerButton = document.getElementById('hamburger-button');
const mobileMenu = document.getElementById('mobile-menu');

hamburgerButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
function closeMobileMenu() {
    mobileMenu.classList.add('hidden');
}

// Back to top button functionality
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) { // Show button after scrolling 300px
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Contact Form Submission (Client-side only for this example)
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual form submission

    // Simulate form submission
    formMessage.textContent = 'Sending message...';
    formMessage.className = 'mt-4 text-center text-sm font-medium text-gray-600';

    setTimeout(() => {
        // In a real application, you would send this data to a server
        // using fetch() or XMLHttpRequest.
        // Example:
        /*
        const formData = new FormData(contactForm);
        fetch('/your-api-endpoint', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                formMessage.textContent = 'Message sent successfully! Thank you.';
                formMessage.className = 'mt-4 text-center text-sm font-medium text-green-600';
                contactForm.reset();
            } else {
                formMessage.textContent = 'Failed to send message. Please try again.';
                formMessage.className = 'mt-4 text-center text-sm font-medium text-red-600';
            }
        })
        .catch(error => {
            formMessage.textContent = 'An error occurred. Please try again later.';
            formMessage.className = 'mt-4 text-center text-sm font-medium text-red-600';
            console.error('Form submission error:', error);
        });
        */

        // For this example, we just show a success message
        formMessage.textContent = 'Message sent successfully! Thank you for reaching out.';
        formMessage.className = 'mt-4 text-center text-sm font-medium text-green-600';
        contactForm.reset(); // Clear the form
    }, 1500); // Simulate network delay
});

// Add hero text animation after content loads
window.addEventListener('load', () => {
    document.querySelectorAll('.hero-text-animate').forEach(element => {
        element.style.opacity = '1';
        element.style.transform = 'scale(1)';
    });
});
