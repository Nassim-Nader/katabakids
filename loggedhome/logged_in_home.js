const userAvatar = document.getElementById('user-avatar');
const dropdownMenu = document.getElementById('dropdown-menu');
const logoutBtn = document.getElementById('logout-btn');


userAvatar.addEventListener('click', () => {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});


document.addEventListener('click', (e) => {
    if (!userAvatar.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.style.display = 'none';
    }
});


logoutBtn.addEventListener('click', () => {
    window.location.href = '../home/home.html'; // Redirect to the homepage
});
document.addEventListener("DOMContentLoaded", () => {
    const homeLink = document.getElementById("home-link");
    homeLink.classList.add("active");

    const userName = "Nassim";
    const userImagePath = "../images/user.png";
    document.getElementById("welcome-name").textContent = `ASSALAM OLAYKOM ${userName.toUpperCase()}`;
    document.getElementById("user-image").src = userImagePath;

    const toggleButton = document.querySelector(".toggle-button");
    const sidebar = document.querySelector(".sidebar");
    const mainContent = document.querySelector(".main-content");
    const navbar = document.querySelector(".navbar");

    toggleButton.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
        mainContent.classList.toggle("collapsed");
        navbar.classList.toggle("collapsed");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function () {
            document.querySelectorAll(".nav-link").forEach(item => item.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
