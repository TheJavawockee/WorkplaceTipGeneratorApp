// Tips organized by category
// Funny Work Tips by Category
const tips = {
  safety: [
  "Always wear your safety gear. Hard hats are cool, trust us.",
  "Keep walkways clear—nobody wants to trip over a mystery box.",
  "Report unsafe stuff. Even if it looks like a ninja trap, tell someone.",
  "Lift with your legs, not your back. Your spine will thank you.",
  "Wet floor? Walk like a penguin, or clean it up!",
  "Use the right tool. A hammer is not a screwdriver (even if it sort of works).",
  "Check ladders before using. We don’t need flying warehouse acrobats.",
  "Don’t run inside the warehouse. You're not in a Fast & Furious movie.",
  "Beep before turning with machines. Surprise forklifts aren’t funny.",
  "If you're tired, speak up. Zombies don’t make good workers.",
  "Use gloves when needed. Splinters and cuts are not badges of honour.",
  "See something broken? Tag it and bag it (or tell the boss).",
  "Protect your toes. Steel toe boots = toe insurance.",
],
  quality: [
  "Double-check your work. Twice is nice.",
  "Follow the steps. No shortcuts to greatness (or to not messing up).",
  "Clean work area = clear mind (and fewer missing tools).",
  "Damaged goods? Report them—don't play hide and seek.",
  "If it doesn’t look right, it probably isn’t.",
  "Labels matter. Nobody likes mystery boxes.",
  "Don’t rush. We want it done right, not just fast.",
  "Ask if unsure. No one expects you to be a robot.",
  "Scan everything—guessing leads to chaos.",
  "Take pride in your work. Even if it's just stacking boxes, stack them like art.",
  "Use the checklist—it’s not just a fancy paper.",
  "Mistakes happen. Fix them, learn, move on.",
  "Be the reason someone smiles when they see your work area."
],
  equality: [
  "Be kind to everyone. Even the guy who sings at 6am.",
  "We all look different, but we still need coffee.",
  "Treat others how you want to be treated—unless you like sarcasm.",
  "Respect accents. Everyone’s trying their best (including you).",
  "Don't joke about people’s culture. Joke about your bad lunch instead.",
  "Everyone matters. Even the guy who always loses the scanner.",
  "If someone feels left out, invite them in. No one likes being the last picked.",
  "Don’t assume. Ask and learn.",
  "It’s okay to be different. Imagine how boring we'd be if we all liked pineapple pizza.",
  "Diversity is like snacks—the more variety, the better the breakroom.",
  "We all came from somewhere. Celebrate it!",
  "Work together like a team, not like a bad soap opera.",
  "Lift others up, don’t bring them down (unless you’re lowering a box carefully)."
]
  ,
  sustainability: [
  "Turn off the lights—unless you’re scared of the dark, then tell a friend.",
  "Don’t waste tape. It’s not free spaghetti.",
  "Recycle boxes—don’t build a cardboard castle (unless it’s your last day).",
  "Refill water bottles. The planet likes reusables.",
  "Use less plastic. The sea turtles will cheer for you.",
  "Fix what you can. Don’t toss something that works.",
  "Close doors behind you. Save energy and keep zombies out.",
  "Bring lunch in containers, not 5 layers of plastic wrap.",
  "Be smart with power tools—turn off when not using.",
  "Broken pallet? Report it. Don’t start a bonfire.",
  "Think before printing. Most papers just live on the floor.",
  "Save the planet, one forklift beep at a time."
]
  ,
  inclusion: [
  "Say good morning to everyone—even if you're half asleep.",
  "Invite others to talk—some people are shy, not rude.",
  "Use names if you know them. ‘Hey you!’ is not that friendly.",
  "Listen when others speak. Don’t just wait for your turn to talk.",
  "Make space for new ideas—even if it means changing how you do things.",
  "If someone struggles with English, be patient (remember when you learned to scan?).",
  "Celebrate team wins, not just your own.",
  "Help someone if they look lost—even leaders get lost in the warehouse.",
  "Don’t make fun of mistakes. We’ve all dropped something… loudly.",
  "Respect personal space—even if your team is close, not *that* close.",
  "Let everyone join the joke, not be the joke.",
  "High-five someone you don’t usually talk to today (or a fist bump if you're shy)."
]
  ,
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
