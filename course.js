
const selectedClass = localStorage.getItem("selectedClass") || "DemoClass";
const selectedCourse = localStorage.getItem("selectedCourse") || "DemoCourse";
let selectedType = "";

let filesList = [];


document.getElementById("courseTitle").textContent =
  selectedCourse + " (" + selectedClass + ")";

const typeCards = document.querySelectorAll(".type-card");

typeCards.forEach(card => {
  card.addEventListener("click", () => {
    typeCards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");
    selectedType = card.dataset.type;

 
    loadFiles();
  });
});


function loadFiles() {
  const filesDiv = document.getElementById("files");
  filesDiv.innerHTML = "";

  if (!selectedType) {
    filesDiv.innerHTML = "<p>Please select a type first</p>";
    return;
  }


  const filtered = filesList.filter(f => f.type === selectedType);

  if (filtered.length === 0) {
    filesDiv.innerHTML = "<p>No files uploaded yet.</p>";
    return;
  }

  filtered.forEach((f, index) => {
    filesDiv.innerHTML += `
      <div class="file-item">
        <span>${f.name}</span>
        <button onclick="deleteFile(${index})">Delete</button>
      </div>
    `;
  });
}


window.uploadFile = function () {
  if (!selectedType) {
    alert(" Please select a type first");
    return;
  }

  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];

  if (!file) {
    alert(" Please select a file");
    return;
  }

  // Ajouter le fichier au tableau local
  filesList.push({
    name: file.name,
    type: selectedType,
    file: file // optionnel si tu veux récupérer le contenu plus tard
  });

  alert(" File added locally!");
  fileInput.value = "";
  loadFiles();
};

window.deleteFile = function (index) {
  const confirmDelete = confirm(`Are you sure you want to delete "${filesList[index].name}"?`);
  if (!confirmDelete) return;

  filesList.splice(index, 1);
  loadFiles();
};
