document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
    console.log("Redirecting to logged_in_home.html");
    window.location.href = "../loggedhome/logged_in_home.html"; 
});
