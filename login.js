document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const signupLink = document.getElementById('signupLink');
    const loginLink = document.getElementById('loginLink');

    // Show signup form and hide login form
    signupLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    });

    // Show login form and hide signup form
    loginLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    });

    // Handle form submissions (you can add your own logic here)
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Add logic to handle login form submission
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        console.log('Login submitted with:', username, password);
        // Example: you could send this data to a server for authentication
    });

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Add logic to handle signup form submission
        let signupUsername = document.getElementById('signupUsername').value;
        let signupPassword = document.getElementById('signupPassword').value;
        console.log('Sign up submitted with:', signupUsername, signupPassword);
        // Example: you could send this data to a server to create a new account
    });
});
