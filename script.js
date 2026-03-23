// Initialize Icons
lucide.createIcons();

function showScreen(screenId, title) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    // Show selected screen
    document.getElementById(screenId + '-screen').classList.add('active');

    // Update Header
    document.getElementById('screen-title').innerText = title;

    // Update Nav Buttons
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
}