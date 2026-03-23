lucide.createIcons();

const title = document.getElementById("title");
const backBtn = document.getElementById("back-btn");

let historyStack = [];

/* DATA */
const vehicles = [
    { id: "V1", name: "Volvo FH16", fuel: "65%", speed: "60 km/h", status: "Moving" },
    { id: "V2", name: "Scania R500", fuel: "80%", speed: "0 km/h", status: "Idle" }
];

/* INIT */
const list = document.getElementById("vehicle-list");

vehicles.forEach(v => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `<span>${v.name}</span><span>${v.status}</span>`;
    div.onclick = () => openDetail(v.id);
    list.appendChild(div);
});

/* NAVIGATION */
function navigate(page, text) {
    const current = document.querySelector(".page.active");
    if (current) historyStack.push(current.id);

    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById("page-" + page).classList.add("active");

    title.innerText = text;

    document.querySelectorAll(".nav-item").forEach(n => {
        n.classList.remove("active");
        if (n.dataset.page === page) n.classList.add("active");
    });

    backBtn.classList.toggle("hidden", historyStack.length === 0);

    lucide.createIcons();
}

/* DETAIL */
function openDetail(id) {
    const v = vehicles.find(x => x.id === id);

    document.getElementById("v-name").innerText = v.name;
    document.getElementById("v-fuel").innerText = v.fuel;
    document.getElementById("v-speed").innerText = v.speed;
    document.getElementById("v-status").innerText = v.status;

    navigate("detail", "Vehicle Details");
}

/* BACK */
function goBack() {
    const prev = historyStack.pop();
    if (!prev) return;

    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(prev).classList.add("active");

    backBtn.classList.toggle("hidden", historyStack.length === 0);
}