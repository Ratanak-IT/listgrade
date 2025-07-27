let students = [];
let filteredStudents = [];

function addStudent() {
  const name = document.getElementById("studentName").value.trim();
  const grade = document
    .getElementById("studentGrade")
    .value.trim()
    .toUpperCase();

  if (name && grade) {
    students.push({ name, grade });
    document.getElementById("studentName").value = "";
    document.getElementById("studentGrade").value = "";
    renderStudents(students);
  }
}

function filterStudents() {
  const query = document
    .getElementById("filterInput")
    .value.trim()
    .toLowerCase();

  if (query === "") {
    renderStudents(students);
    return;
  }

  // Use if...else to check grade manually
  if (query === "a") {
    filteredStudents = students.filter((s) => s.grade.toLowerCase() === "a");
  } else if (query === "b") {
    filteredStudents = students.filter((s) => s.grade.toLowerCase() === "b");
  } else if (query === "c") {
    filteredStudents = students.filter((s) => s.grade.toLowerCase() === "c");
  } else if (query === "d") {
    filteredStudents = students.filter((s) => s.grade.toLowerCase() === "d");
  } else if (query === "e") {
    filteredStudents = students.filter((s) => s.grade.toLowerCase() === "e");
  } else if (query === "f") {
    filteredStudents = students.filter((s) => s.grade.toLowerCase() === "f");
  } else {
    filteredStudents = students.filter((s) =>
      s.name.toLowerCase().includes(query)
    );
  }

  renderStudents(filteredStudents);
}

function resetFilter() {
  document.getElementById("filterInput").value = "";
  renderStudents(students);
}

function renderStudents(list) {
  const container = document.getElementById("studentList");
  container.innerHTML = "";

  const sortedList = [...list].sort((a, b) => a.name.localeCompare(b.name));

  if (sortedList.length === 0) {
    container.innerHTML = `<div class="empty">No students found.</div>`;
  } else {
    sortedList.forEach((student, index) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<strong>${index + 1}. ${
        student.name
      }</strong><br>Grade: ${student.grade}`;
      container.appendChild(card);
    });
  }

  document.getElementById(
    "totalCount"
  ).textContent = `Total Students: ${sortedList.length}`;
}

// Initial render
renderStudents(students);
