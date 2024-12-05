document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
    // Redirect to the logged-in homepage
    window.location.href = "logged-in.html"; 
});
