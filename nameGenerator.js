function generateRandomName() {
    const adjectives = ["Secret", "Mighty", "Brave", "Swift", "Clever"];
    const animals = ["doggo", "Tiger", "Eagle", "Fox", "Bear"];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    const randomName = randomAdjective + " " + randomAnimal;
    document.getElementById("randomName").innerText = randomName;
  }