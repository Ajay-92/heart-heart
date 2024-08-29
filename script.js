document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Hide the login form and show the heart animation
    document.getElementById("login-container").style.display = "none";
    document.getElementById("heart-container").style.display = "flex";
});
