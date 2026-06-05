const container = document.getElementById("list");

let data = [];
let filter = "all";

async function loadData() {
  const saved = localStorage.getItem("extensions");

  if (saved) {
    data = JSON.parse(saved);
    render();
    return;
  }

  try {
    const response = await fetch("data.json");
    data = await response.json();

    saveToLocal();
    render();
  } catch (error) {
    console.error(error);
  }
}

loadData();

function saveToLocal() {
  localStorage.setItem("extensions", JSON.stringify(data));
}

function render() {
  container.innerHTML = "";

  let filtered = data;

  if (filter === "active") {
    filtered = data.filter((item) => item.isActive);
  }

  if (filter === "inactive") {
    filtered = data.filter((item) => !item.isActive);
  }

  filtered.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
    <div class="card_style" >
    <div class="img_name" >
  <img src="${item.logo}" alt="">
   <div>
  <h3>${item.name}</h3>
  <p class="description" >${item.description}</p>
  </div>
  </div>
  <div>
     <div>
 <div class="remove_toggle" >
    <button class="remove">remove</button>
    <label class="switch">
      <input type="checkbox" class="toggle" ${item.isActive ? "checked" : ""}>
      <span class="slider"></span>
    </label>
     </div>
  </div>
`;

    const toggle = card.querySelector(".toggle");

    toggle.addEventListener("change", (e) => {
      item.isActive = e.target.checked;
      saveToLocal();
      render();
    });

    const remove = card.querySelector(".remove");

    remove.addEventListener("click", () => {
      data = data.filter((i) => i !== item);
      saveToLocal();
      render();
    });

    container.append(card);
  });
}

const all = document.querySelector(".all");
const inactive = document.querySelector(".inactive");
const active = document.querySelector(".active");

all.addEventListener("click", () => {
  filter = "all";
  render();
});

active.addEventListener("click", () => {
  filter = "active";
  render();
});

inactive.addEventListener("click", () => {
  filter = "inactive";
  render();
});

const themeBtn = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

const darkIcon = themeIcon.dataset.dark;
const lightIcon = themeIcon.dataset.light;

let theme = localStorage.getItem("theme") || "light";

if (theme === "dark") {
  document.body.classList.add("dark");
}

themeIcon.src = theme === "dark" ? darkIcon : lightIcon;

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");

  themeIcon.src = isDark ? darkIcon : lightIcon;

  localStorage.setItem("theme", isDark ? "dark" : "light");
});

const buttons = document.querySelectorAll(".filter button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
  });
});
