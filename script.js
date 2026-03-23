lucide.createIcons();

function switchPage(pageId, title, element) {
    // 1. Hide all pages
    document.querySelectorAll('.app-page').forEach(page => {
        page.classList.remove('active');
    });

    // 2. Show target page
    document.getElementById('page-' + pageId).classList.add('active');

    // 3. Update Header
    document.getElementById('header-title').innerText = title;

    // 4. Update Nav Buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    element.classList.add('active');
}

function showDetails(name) {
    alert("Opening details for: " + name);
    // In Figma, this would navigate to the Detailed Vehicle View
}