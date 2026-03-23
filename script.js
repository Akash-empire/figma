lucide.createIcons();

function navigate(pageId, title) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    // Show selected
    const targetPage = document.getElementById('page-' + pageId);
    targetPage.classList.add('active');
    
    // Update Header
    document.getElementById('screen-title').innerText = title;
    
    // Toggle Search Bar visibility (hide on detail/profile pages)
    const searchBar = document.getElementById('search-bar');
    if(pageId === 'vehicle-detail' || pageId === 'profile') {
        searchBar.style.display = 'none';
        document.getElementById('back-btn').classList.remove('hidden');
    } else {
        searchBar.style.display = 'flex';
        document.getElementById('back-btn').classList.add('hidden');
    }

    // Update Nav Icons
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    // (Logic to match icon to pageId would go here)
}

function openVehicleDetail(name) {
    navigate('vehicle-detail', name);
}