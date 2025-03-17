document.addEventListener('DOMContentLoaded', () => {
    // Form validation
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        if (name === '' || email === '') {
            alert('Please fill in all fields.');
        } else {
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    // Dynamic content
    const featuresList = document.querySelector('#features ul');
    const newFeature = document.createElement('li');
    newFeature.textContent = 'Feature 4';
    featuresList.appendChild(newFeature);

    // Smooth scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});