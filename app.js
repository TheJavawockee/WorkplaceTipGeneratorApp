// Tips organized by category
const tips = {
  safety: [
    "Always wear your safety equipment.",
    "Keep walkways clear to avoid trips and falls.",
    "Report any unsafe conditions immediately."
  ],
  quality: [
    "Double-check your work before submitting.",
    "Follow standard operating procedures carefully.",
    "Maintain cleanliness to ensure product quality."
  ],
  equality: [
    "Respect everyone’s opinions and backgrounds.",
    "Challenge discriminatory behavior whenever you see it.",
    "Support colleagues from diverse backgrounds."
  ],
  sustainability: [
    "Turn off lights and equipment when not in use.",
    "Recycle paper, plastics, and metals properly.",
    "Reduce waste by using reusable containers."
  ],
  inclusion: [
    "Invite quieter colleagues to share their ideas.",
    "Celebrate cultural diversity in the workplace.",
    "Ensure everyone feels heard and valued."
  ]
};

// Helper: flatten all tips into one array for "all"
const allTips = Object.values(tips).flat();

const categorySelect = document.getElementById("category");
const nextTipBtn = document.getElementById("nextTipBtn");
const tipDiv = document.getElementById("tip");

function getRandomTip(category) {
  const pool = tips[category] || [];
  if (pool.length === 0) {
    return "No tips available for this category.";
  }
  const index = Math.floor(Math.random() * pool.length);
  return pool[index];
}


function showRandomTip() {
  const selectedCategory = categorySelect.value;
  const tip = getRandomTip(selectedCategory);
  tipDiv.textContent = tip;
}

// Event listener for button
nextTipBtn.addEventListener("click", showRandomTip);
