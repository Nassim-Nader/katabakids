
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelectorAll('.nav-link').forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

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

    // Dynamically update user name and image in the main content
document.addEventListener("DOMContentLoaded", () => {
    const userName = "Nassim"; 
    const userImagePath = "../images/user.png"; 

    // Update name and image in main content
    document.getElementById("welcome-name").textContent = `ASSALAM OLAYKOM ${userName.toUpperCase()}`;
    document.getElementById("user-image").src = userImagePath;
    document.getElementById("user-image").alt = `${userName}'s Image`;
});


