// ===== Date =====
const today = new Date();
const formatDate = today.toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
});
document.querySelector("#dayofweek").textContent = formatDate;

// ===== Hamburger Menu =====
const hamburgerButton = document.querySelector("#hamburger-btn");
const menu = document.querySelector("#menu");

hamburgerButton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// ===== Stat Button Selectors =====
const statsButtonStudents = document.querySelector("#stat-btn-students-reached");
const statsButtonSchools  = document.querySelector("#stat-btn-school-partnered");
const statsButtonTeacher  = document.querySelector("#stats-btn-teachers-trained");
const statsButtonGraduation = document.querySelector("#graduation-btn-stats");

// ===== Fetch Stats from Node Backend =====
async function fetchStats() {
  try {
    const response = await fetch("/api/stats");

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();

    document.querySelector("#stat-number-students-reached").textContent =
      data.studentsReached.toLocaleString();

    document.querySelector("#Schools-partnered-stats").textContent =
      data.schoolsPartnered.toLocaleString();

    document.querySelector("#teachers-trained-stats").textContent =
      data.teachersTrained.toLocaleString();

    document.querySelector("#graduation-lift-stats").textContent =
      data.graduationLift + "x";

  } catch (error) {
    console.error("Failed to fetch stats:", error);
  }
}

// ===== Run once on load =====
fetchStats();

// ===== Run on any button click =====
statsButtonStudents.addEventListener("click", fetchStats);
statsButtonSchools.addEventListener("click", fetchStats);
statsButtonTeacher.addEventListener("click", fetchStats);
statsButtonGraduation.addEventListener("click", fetchStats);


// ===== Date =====
const today = new Date();
const formatDate = today.toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
});
document.querySelector("#dayofweek").textContent = formatDate;

// ===== Hamburger Menu =====
const hamburgerButton = document.querySelector("#hamburger-btn");
const menu = document.querySelector("#menu");

hamburgerButton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// ===== Stat Button Selectors =====
const statsButtonStudents = document.querySelector("#stat-btn-students-reached");
const statsButtonSchools  = document.querySelector("#stat-btn-school-partnered");
const statsButtonTeacher  = document.querySelector("#stats-btn-teachers-trained");
const statsButtonGraduation = document.querySelector("#graduation-btn-stats");

// ===== Fetch Stats from Node Backend =====
async function fetchStats() {
  try {
    const response = await fetch("/api/stats");

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();

    document.querySelector("#stat-number-students-reached").textContent =
      data.studentsReached.toLocaleString();

    document.querySelector("#Schools-partnered-stats").textContent =
      data.schoolsPartnered.toLocaleString();

    document.querySelector("#teachers-trained-stats").textContent =
      data.teachersTrained.toLocaleString();

    document.querySelector("#graduation-lift-stats").textContent =
      data.graduationLift + "x";

  } catch (error) {
    console.error("Failed to fetch stats:", error);
  }
}

// ===== Run once on load =====
fetchStats();

// ===== Run on any button click =====
statsButtonStudents.addEventListener("click", fetchStats);
statsButtonSchools.addEventListener("click", fetchStats);
statsButtonTeacher.addEventListener("click", fetchStats);
statsButtonGraduation.addEventListener("click", fetchStats);