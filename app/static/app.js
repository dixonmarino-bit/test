const statusEl = document.getElementById("api-status");
const refreshBtn = document.getElementById("refresh");

async function loadStatus() {
  statusEl.textContent = "Consultando API...";
  try {
    const response = await fetch("/api/status");
    const data = await response.json();
    statusEl.textContent = data.message;
  } catch (error) {
    statusEl.textContent = "No se pudo consultar la API";
  }
}

refreshBtn.addEventListener("click", loadStatus);
loadStatus();
