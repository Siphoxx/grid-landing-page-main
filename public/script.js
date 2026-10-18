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

// ===== Animation Helper Function =====
function animateValue(element, start, end, duration, formatter) {
  // Stop any current animation on this element
  if (element.animationId) {
    clearInterval(element.animationId);
  }

  let current = start;
  const steps = 40; 
  const increment = (end - start) / steps; 
  const intervalTime = duration / steps; 

  element.animationId = setInterval(() => {
    current += increment;

    if (current >= end) {
      element.textContent = formatter(end); 
      clearInterval(element.animationId);
      element.animationId = null;
    } else {
      element.textContent = formatter(current); 
    }
  }, intervalTime);
}

// ===== Fetch Stats from Node Backend =====
async function fetchStats() {
  try {
    const response = await fetch("/api/stats");

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();

    // Use the animation function here!
    animateValue(
      document.querySelector("#stat-number-students-reached"), 
      0, data.studentsReached, 1000, 
      (val) => Math.floor(val).toLocaleString("en-US")
    );

    animateValue(
      document.querySelector("#Schools-partnered-stats"), 
      0, data.schoolsPartnered, 1000, 
      (val) => Math.floor(val).toLocaleString("en-US")
    );

    animateValue(
      document.querySelector("#teachers-trained-stats"), 
      0, data.teachersTrained, 1000, 
      (val) => Math.floor(val).toLocaleString("en-US")
    );

    animateValue(
      document.querySelector("#graduation-lift-stats"), 
      0, data.graduationLift, 1000, 
      (val) => val.toFixed(1) + "x"
    );

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