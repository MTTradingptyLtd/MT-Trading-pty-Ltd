// Handle login form submission
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const loginEmail = document.getElementById('login-email').value;
    const loginPassword = document.getElementById('login-password').value;

    if (loginEmail && loginPassword) {
        alert('Login successful for ' + loginEmail);
        window.location.href = 'membership.html'; // Redirect to membership page
    } else {
        alert('Please fill in all fields before logging in.');
    }
});

//Toggle nav button //

function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}

// Redirect to sign-up page
document.getElementById('sign-up-button').onclick = function() {
    window.location.href = 'signup.html'; // Redirect to the sign-up page
};

// Handle login button click
document.getElementById('login-button').onclick = function() {
    document.getElementById('login').style.display = 'block';
};
