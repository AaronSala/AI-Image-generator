const studentsDisplayed = document.getElementById("students");
const studentInput = document.getElementById("studentInput");
const addStudent = document.getElementById("addStudent");

const students = [];

addStudent.addEventListener("click", (e) => {
  e.preventDefault();
  students.push(studentInput.value);
  studentInput.value = "";

  studentsDisplayed.innerHTML = ""; // Clear previous content before appending

  students.forEach((student) => {
    const listItem = document.createElement("ul");
    listItem.textContent = student;
    listItem.classList.add("disStudents");
    studentsDisplayed.appendChild(listItem);
  });
});
