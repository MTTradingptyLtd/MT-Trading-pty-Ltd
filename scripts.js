
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Thank you for contacting us, ' + name + '. We will get back to you shortly.');
            document.getElementById('contact-form').reset();
        } else {
            alert('Please fill in all fields before submitting.');
        }
    });

    // Handle login button click
    document.getElementById('login-button').onclick = function() {
        document.getElementById('login').style.display = 'block';
    };

    // Close login modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target === document.getElementById('login')) {
            document.getElementById('login').style.display = 'none';
        }
    };

    // Handle login form submission
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const loginEmail = document.getElementById('login-email').value;
        const loginPassword = document.getElementById('login-password').value;

        if (loginEmail && loginPassword) {
            alert('Login successful for ' + loginEmail);
            // Redirect to membership page
            window.location.href = 'membership.html'; // Replace with actual membership page URL
        } else {
            alert('Please fill in all fields before logging in.');
        }
    });

    // Handle sign-up button click
    document.getElementById('sign-up-button').onclick = function() {
        window.location.href = 'signup.html'; // Replace with actual sign-up page URL
    };