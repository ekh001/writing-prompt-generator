var characterNames = [
  "Alice",
  "Bob",
  "Eve",
  "Charlie",
  "Luna",
  "Maximus",
  "Nova",
  "Olivia",
  "Phoenix",
  "Quentin",
  "Raven",
  "Serenity",
  "Theodore",
  "Violet",
  "Winston",
  "Xanthe",
  "Yara",
  "Zephyr",
  "Aria",
  "Bodhi",
  "Ji-Yeon",
  "Min-Jae",
  "Soo-Min",
  "Hyeon-Woo",
  "Yoo-Jin"
];


var settings = [
  "in a small town",
  "in a futuristic city",
  "in a magical forest",
  "on a deserted island",
  "in an enchanted castle",
  "in a post-apocalyptic wasteland",
  "underwater in a hidden kingdom",
  "in a parallel universe",
  "in a bustling metropolis",
  "in a haunted mansion",
  "in the depths of space",
  "in a time-traveling machine",
  "in a mystical realm",
  "in an underground secret lair",
  "in a remote village",
  "on a space station",
  "in a dreamlike dimension",
  "in a high-tech virtual reality",
  "on a pirate ship",
  "in an ancient temple"
];

var conflicts = [
  "dealing with a mysterious illness",
  "solving a puzzling mystery",
  "overcoming a personal fear",
  "defending against a powerful enemy",
  "unraveling a conspiracy",
  "surviving a natural disaster",
  "navigating a complicated love triangle",
  "averting a global crisis",
  "seeking revenge for a past injustice",
  "escaping from a dangerous situation",
  "challenging societal norms",
  "confronting inner demons",
  "fighting for justice and equality",
  "preserving a dying world",
  "protecting a valuable artifact",
  "surviving in a hostile environment",
  "rebuilding after a devastating war",
  "confronting a supernatural threat",
  "uncovering a hidden treasure",
  "resolving a family conflict"
];

var resolutions = [
  "by discovering a hidden truth",
  "through the power of friendship",
  "by embracing their inner strength",
  "by accidentally stumbling into a solution",
  "by outsmarting their own clumsiness",
  "with the help of a trusted sidekick",
  "by triggering a strange series of events",
  "by unleashing their own untapped potential",
  "through a comically absurd turn of fate",
  "by learning from their mistakes",
  "with the guidance of a quirky mentor",
  "by inventing an clever contraption",
  "through overcoming some misunderstandings",
  "by finding the perfect balance between chaos and order",
  "with the aid of a special ally",
  "by devising an unconventional plan",
  "through a ridiculously lucky coincidence",
  "by discovering the power of humor",
  "with a well-timed comedic twist",
  "by embracing their true selves"
];

var resolutionsChaos = [
  "by uncovering a long-lost treasure... hidden under a pile of dirty laundry",
  "by solving a series of clever riddles... with the help of a mischievous talking parrot",
  "through teamwork and meticulous planning... with a hive of angry bees",
  "by confronting their deepest fears head-on... while wearing mismatched socks for good luck",
  "by mastering a new skill or technique... like juggling flaming marshmallows",
  "by making amends and seeking forgiveness... from the aliens",
  "through a heartwarming act of selflessness... involving potatoes",
  "by finding a hidden loophole in the problem... using a banana as a secret weapon",
  "by using their unique talents and abilities... like speaking fluent nonsense or breakdancing in a chicken suit",
  "through a surprising twist of fate... involving a magical sneeze and a herd of ticklish unicorns",
  "by learning from past mistakes and growing... and maybe some light crime",
  "by seeking guidance from a wise mentor... who happens to be a waffle-loving panda",
  "through a well-executed and daring escape... using a catapult made of rubber bands and bubble gum",
  "by exposing the true culprit behind the conflict... during a hilarious game of hide-and-seek",
  "by bridging a seemingly insurmountable divide... with the power of a laughter-inducing whoopee cushion",
  "through a stroke of genius and quick thinking... involving a banana peel and an unexpected dance routine",
  "by demonstrating unwavering determination... even in the face of a swarm of mischievous squirrels",
  "through a literally orchestrated plan",
  "by standing up for what they believe in... by staging a kazoo-powered protest",
  "by creating a groundbreaking invention... like a self-buttering toast or a squirrel-powered time machine"
];


function generatePrompt() {
    var randomCharacter = characterNames[Math.floor(Math.random() * characterNames.length)];
    var randomSetting = settings[Math.floor(Math.random() * settings.length)];
    var randomConflict = conflicts[Math.floor(Math.random() * conflicts.length)];
    var randomResolution = resolutions[Math.floor(Math.random() * resolutions.length)];
  
    var modalPromptContent = document.getElementById("modal-prompt");
    modalPromptContent.textContent = `
      Once upon a time, ${randomCharacter} found themselves ${randomSetting}.
      They faced the challenge of ${randomConflict}.
      In the end, they resolved it ${randomResolution}.
    `;
  
    // Display the modal
    var modalContainer = document.getElementById("modal-container");
    modalContainer.style.display = "flex";

}

function generatePromptChaos() {
  var randomCharacterChaos = characterNames[Math.floor(Math.random() * characterNames.length)];
  var randomSettingChaos = settings[Math.floor(Math.random() * settings.length)];
  var randomConflictChaos = conflicts[Math.floor(Math.random() * conflicts.length)];
  var randomResolutionChaos = resolutionsChaos[Math.floor(Math.random() * resolutions.length)];

  var modalPromptContent = document.getElementById("modal-prompt");
  modalPromptContent.textContent = `
    Once upon a time, ${randomCharacterChaos} found themselves ${randomSettingChaos}.
    They faced the challenge of ${randomConflictChaos}.
    In the end, they resolved it ${randomResolutionChaos}.
  `;

  // Display the modal
  var modalContainer = document.getElementById("modal-container");
  modalContainer.style.display = "block";

}

function closeModal() {
  var modalContainer = document.getElementById("modal-container");
  modalContainer.style.display = "none";
}
