document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Simulate sending message
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        document.getElementById('formResponse').textContent = "Thank you, " + name + "! Your message has been received.";
        this.reset(); // Clear form
    } else {
        document.getElementById('formResponse').textContent = "Please fill out all fields.";
    }
});