document.addEventListener('DOMContentLoaded', function () {
    // GSAP animation code
    gsap.fromTo(".form-container", {opacity: 0, y: -50}, {opacity: 1, y: 0, duration: 1, ease: "power1.out"});
});

function toggleForms(form) {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (form === 'register') {
        gsap.fromTo(registerForm, {x: 500, opacity: 0}, {x: 0, opacity: 1, duration: 1, ease: "power1.out"});
        gsap.to(loginForm, {x: -500, opacity: 0, duration: 1, ease: "power1.out", onComplete: () => loginForm.classList.add('hidden')});
        registerForm.classList.remove('hidden');
    } else {
        gsap.fromTo(loginForm, {x: -500, opacity: 0}, {x: 0, opacity: 1, duration: 1, ease: "power1.out"});
        gsap.to(registerForm, {x: 500, opacity: 0, duration: 1, ease: "power1.out", onComplete: () => registerForm.classList.add('hidden')});
        loginForm.classList.remove('hidden');
    }
}

function toggleForgotPassword(show) {
    const forgotPasswordPage = document.getElementById('forgot-password-page');
    const loginForm = document.getElementById('login-form');

    if (show) {
        gsap.fromTo(forgotPasswordPage, {y: 500, opacity: 0}, {y: 0, opacity: 1, duration: 1, ease: "power1.out"});
        gsap.to(loginForm, {y: -500, opacity: 0, duration: 1, ease: "power1.out", onComplete: () => loginForm.classList.add('hidden')});
        forgotPasswordPage.classList.remove('hidden');
    } else {
        gsap.fromTo(loginForm, {y: -500, opacity: 0}, {y: 0, opacity: 1, duration: 1, ease: "power1.out"});
        gsap.to(forgotPasswordPage, {y: 500, opacity: 0, duration: 1, ease: "power1.out", onComplete: () => forgotPasswordPage.classList.add('hidden')});
        loginForm.classList.remove('hidden');
    }
}

function togglePasswordVisibility(id) {
    var passwordField = document.getElementById(id);
    var toggleIcon = passwordField.nextElementSibling;
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.textContent = "😶";
    } else {
        passwordField.type = "password";
        toggleIcon.textContent = "😌";
    }
}
