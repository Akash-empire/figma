lucide.createIcons();

const backBtn = document.getElementById('back-btn');
const screenTitle = document.getElementById('screen-title');

function navigate(pageId, title) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    // Show selected page
    document.getElementById('page-' + pageId).classList.add('active');
    
    // Update Title
    screenTitle.innerText = title;

    // Update Nav UI
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if(item.innerText.toLowerCase().includes(title.toLowerCase().substring(0,3))) {
            item.classList.add('active');
        }
    });

    // Toggle Back Button
    if (pageId.includes('detail')) {
        backBtn.classList.remove('hidden');
    } else {
        backBtn.classList.add('hidden');
    }
}

function openVehicleDetail(id) {
    document.getElementById('detail-v-name').innerText = "Vehicle " + id;
    navigate('vehicle-detail', 'Vehicle Details');
}

function openTripDetail(id) {
    // You can expand this to a specific Trip Detail page similarly
    navigate('vehicle-detail', 'Trip Logs'); 
}

function goBack() {
    navigate('dashboard', 'Dashboard');
}