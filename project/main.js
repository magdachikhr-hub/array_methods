const container = document.getElementById("list");
async function loadData() {
  try {
    const response = await fetch("data.json");
    const data = await response.json();

    data.forEach((item) => {
      container.innerHTML += `
        <div class="card" >
        <img src="${item.logo}" alt="">
         <div>
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <p>${item.isActive}</p>
        </div>
         </div>
      `;
    });
  } catch (error) {
    console.error(error);
  }
}

loadData();
