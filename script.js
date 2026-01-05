let captcha = "";

function generateCaptcha() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    captcha = "";
    for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("captchaText").innerText = captcha;
}

function login() {
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();
    const capInput = document.getElementById("captchaInput").value.trim();
    const error = document.getElementById("errorMsg");

    if (!user || !pass || !capInput) {
        error.style.color = "red";
        error.innerText = "All fields are required";
        return;
    }

    if (capInput !== captcha) {
        error.style.color = "red";
        error.innerText = "Invalid Captcha";
        generateCaptcha();
        return;
    }

    error.style.color = "green";
    error.innerText = "Login successful (Demo)";
}

// Load captcha on page load
window.onload = generateCaptcha;
