// Topic selection
document.querySelectorAll(".topics button").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
    });
});

// Registration validation & navigation
const registerForm = document.getElementById("registerForm");
if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (!username || !email || !password || !confirmPassword) {
            alert("Please fill all required fields");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        alert("Registration successful!");
        window.location.href = "login.html";
    });
}

// Login form (demo)
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value;
        if (!username || !password) {
            alert("Please fill all required fields");
            return;
        }

        alert("Login successful (demo)");
    });
}
