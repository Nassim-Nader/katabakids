// Select elements
const userAvatar = document.getElementById('user-avatar');
const dropdownMenu = document.getElementById('dropdown-menu');
const logoutBtn = document.getElementById('logout-btn');

// Toggle dropdown menu visibility
userAvatar.addEventListener('click', () => {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!userAvatar.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.style.display = 'none';
    }
});

// Log out functionality
logoutBtn.addEventListener('click', () => {
    window.location.href = '../home/home.html'; // Redirect to the homepage
});
document.addEventListener("DOMContentLoaded", () => {
    // Set the default active link
    const homeLink = document.getElementById("home-link");
    homeLink.classList.add("active");

    // Update user details dynamically
    const userName = "Nassim";
    const userImagePath = "../images/user.png";
    document.getElementById("welcome-name").textContent = `ASSALAM OLAYKOM ${userName.toUpperCase()}`;
    document.getElementById("user-image").src = userImagePath;

    // Toggle sidebar functionality
    const toggleButton = document.querySelector(".toggle-button");
    const sidebar = document.querySelector(".sidebar");
    const mainContent = document.querySelector(".main-content");
    const navbar = document.querySelector(".navbar");

    toggleButton.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
        mainContent.classList.toggle("collapsed");
        navbar.classList.toggle("collapsed");
    });

    // Handle navigation link active state
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function () {
            document.querySelectorAll(".nav-link").forEach(item => item.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
