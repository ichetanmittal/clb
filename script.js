import { auth } from './firebase-init.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

const navbarRight = document.getElementById('navbar-right');
const authContainer = document.getElementById('auth-container');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

// Handling user registration
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('Sign Up successful');
            authContainer.style.display = 'none'; // Hide auth container after successful signup
            location.reload(); // Refresh page or update UI as needed
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Handling user login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('Login successful');
            authContainer.style.display = 'none'; // Hide auth container after successful login
            location.reload(); // Refresh page or update UI as needed
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Check login status
onAuthStateChanged(auth, (user) => {
    if (user) {
        navbarRight.innerHTML = `
            <button class="nav-button">Wallet</button>
            <button class="nav-button">Profile</button>
            <button class="nav-button" id="logout-btn">Logout</button>
        `;
        document.getElementById('logout-btn').addEventListener('click', () => {
            signOut(auth).then(() => {
                alert('Logout successful');
                location.reload(); // Refresh page or update UI as needed
            }).catch((error) => {
                alert(error.message);
            });
        });
    } else {
        navbarRight.innerHTML = `
            <button class="nav-button" id="login-btn">Login</button>
            <button class="nav-button" id="signup-btn">Sign Up</button>
        `;
        // Re-attach event listeners for login and signup buttons
        document.getElementById('login-btn').addEventListener('click', () => {
            authContainer.style.display = 'block'; // Show login form
        });
        document.getElementById('signup-btn').addEventListener('click', () => {
            authContainer.style.display = 'block'; // Show signup form
        });
    }
});

// Hide auth form on click outside
window.addEventListener('click', (e) => {
    if (e.target === authContainer) {
        authContainer.style.display = 'none';
    }
});
