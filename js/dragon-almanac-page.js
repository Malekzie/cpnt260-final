// Initialized an object for each dragon
const dragonArray = [];
const infernum =
{
  name: "Infernum",
  element: "Fire",
  habitat: "The Scorching Caldera",
  age: 7258,
  text: "Infernum's fiery essence was forged in the heart of an erupting volcano, born from molten lava that blazed into existence. He claims the Scorching Caldera as his eternal home, a desolate and blazing landscape where the earth itself is aflame. Infernum's personality reflects his fierce independence and untamed spirit, known for his passionate and intense nature, which embodies the relentless power of the inferno."
}

const sprite = 
{
  name: "Sprite",
  element: "Water",
  habitat: "The Azure Depths",
  age: 8574,
  text: "Sprite emerged in the depths of the ocean, nurtured by the crystalline waters of the Azure Depths, where she now dwells, guarding the mysteries of the deep. Her serene and wise demeanor carries the ancient knowledge of the seas, and she is a symbol of tranquility and protection in the aquatic realm."
}
const anthracite=
{
  name: "Anthracite",
  element: "Earth",
  habitat: "The Stonewrought Caverns",
  age: 7769,
  text: "Anthracite's stony form came to life in the depths of the Stonewrought Caverns, where the core of the earth gave birth to his enduring strength. He finds his habitat within the underground labyrinth of caverns, a realm of geological wonders. Anthracite's stoic and unyielding nature represents the unwavering power of the earth, making him a guardian of the subterranean world."
} 
const tempest = 
{
  name: "Tempest",
  element: "Water",
  habitat: "The Cyclone's Roost",
  age: 6701,
  text: "Tempest's ethereal form was born amidst the howling winds of the Cyclone's Roost, where the air sculpted his existence. He soars through the skies, commanding the winds and guiding storms with his mastery of the air. Tempest's free-spirited and unpredictable personality embodies the ever-changing nature of the wind, making him a force of nature and a symbol of boundless freedom."
}
const gaia = 
{
  name: "Gaia",
  element: "Plant",
  habitat: "The Verdant Haven",
  age: 8412,
  text: "Gaia's nurturing presence brought the first plants and trees to life in the heart of the Verdant Haven. She resides in the lush and vibrant world of forests and gardens, safeguarding the diversity of plant life. Gaia's gentle and nurturing personality embodies the spirit of growth and renewal, making her a guardian of the botanical world."
}
const voltmaw = 
{
  name: "Voltmaw",
  element: "Lightning",
  habitat: "The Thunderstruck Peaks",
  age: 9983,
  text: "Voltmaw's existence is entwined with the Thunderstruck Peaks, where the raw power of lightning and thunder brought him to life. He roams the electrified peaks, commanding the elemental forces and channeling the energy of lightning. Voltmaw's electrifying and dynamic personality represents the raw power of electricity, and he is a guardian of the high-altitude domains."
}
const incindus = 
{
  name: "Incindus",
  element: "Light",
  habitat: "The Radiant Glade",
  age: 7206,
  text: "Incindus was born from the radiant energies of the Radiant Glade, where light and life coexist in harmony. He illuminates the cosmic expanses, radiating light and warmth as a celestial guardian. Incindus's radiant and benevolent personality embodies the essence of illumination and hope, making him a symbol of enlightenment and positivity."
}
const mehthusala = 
{
  name: "Mehthusala",
  element: "Dark",
  habitat: "The Abyssal Void",
  age: "Unknown",
  text: "Methusala's existence is shrouded in the Abyssal Void, a place of eternal darkness where he came into being. He is imprisoned within the void, awaiting a day of reckoning, his presence representing the enduring shadow. Methusala's enigmatic and foreboding personality embodies the darkness and mystery of the abyss, making him a being of eternal darkness and uncertainty."
}
const starlight = 
{
  name: "Starlight",
  element: "Star",
  habitat: "The Celestial Expanse",
  age: "Unknown",
  text: "Starlight's origins are a cosmic mystery, transcending time and space. He roams the Celestial Expanse, where the constellations themselves bow to his will. Starlight's mysterious and enchanting personality remains neutral and enigmatic, his intentions hidden in the depths of the cosmos. As an ever-watchful guardian of the cosmic realms, he embodies the wonders of the universe, making him a being of celestial beauty and cosmic enigma."
}

dragonArray.push(starlight, mehthusala, incindus, voltmaw, gaia, tempest, anthracite, sprite, infernum);

console.log(dragonArray);

document.getElementById("Infernum").addEventListener("click", function(){
  const target = this.id;
  getSome(dragonArray, target);
})

document.getElementById("Sprite").addEventListener("click", function(){
  const target = this.id;
  getSome(dragonArray, target);
})

document.getElementById("Anthracite").addEventListener("click", function(){
  const target = this.id;
  getSome(dragonArray, target);
})

document.getElementById("Tempest").addEventListener("click", function(){
  const target = this.id;
  getSome(dragonArray, target);
})

document.getElementById("Gaia").addEventListener("click", function(){
  const target = this.id;
  getSome(dragonArray, target);
})

document.getElementById("Voltmaw").addEventListener("click", function(){
  const target = this.id;
  getSome(dragonArray, target);
})

document.getElementById("Incindus").addEventListener("click", function(){
  const target = this.id;
  getSome(dragonArray, target);
})

document.getElementById("Mehthusala").addEventListener("click", function(){
  const target = this.id;
  getSome(dragonArray, target);
})


document.getElementById("Starlight").addEventListener("click", function(){
  const target = this.id;
  getSome(dragonArray, target);
})

function getSome(arr, id){
  for(let i = 0; i < arr.length-1; i++ ){
      switch(id){
        case "Infernum":
          document.querySelector(".dragon-name").innerHTML = infernum.name;
          document.querySelector(".element").innerHTML = infernum.element;
          document.querySelector(".habitat").innerHTML = infernum.habitat;
          document.querySelector(".age").innerHTML = infernum.age;
          document.querySelector(".text").innerHTML = infernum.text;
          break;
        case "Sprite":
          document.querySelector(".dragon-name").innerHTML = sprite.name;
          document.querySelector(".element").innerHTML = sprite.element;
          document.querySelector(".habitat").innerHTML = sprite.habitat;
          document.querySelector(".age").innerHTML = sprite.age;
          document.querySelector(".text").innerHTML =  sprite.text;
          break;
        case "Anthracite":
          document.querySelector(".dragon-name").innerHTML = anthracite.name;
          document.querySelector(".element").innerHTML = anthracite.element;
          document.querySelector(".habitat").innerHTML = anthracite.habitat;
          document.querySelector(".age").innerHTML = anthracite.age;
          document.querySelector(".text").innerHTML =  anthracite.text;
          break;
        case "Tempest":
          document.querySelector(".dragon-name").innerHTML = tempest.name;
          document.querySelector(".element").innerHTML = tempest.element;
          document.querySelector(".habitat").innerHTML = tempest.habitat;
          document.querySelector(".age").innerHTML = tempest.age;
          document.querySelector(".text").innerHTML =  tempest.text;
          break;
        case "Gaia":
          document.querySelector(".dragon-name").innerHTML = gaia.name;
          document.querySelector(".element").innerHTML = gaia.element;
          document.querySelector(".habitat").innerHTML = gaia.habitat;
          document.querySelector(".age").innerHTML = gaia.age;
          document.querySelector(".text").innerHTML =  gaia.text;
        break;
        case "Voltmaw":
          document.querySelector(".dragon-name").innerHTML = voltmaw.name;
          document.querySelector(".element").innerHTML = voltmaw.element;
          document.querySelector(".habitat").innerHTML = voltmaw.habitat;
          document.querySelector(".age").innerHTML = voltmaw.age;
          document.querySelector(".text").innerHTML =  voltmaw.text;
        break;
        case "Incindus":
          document.querySelector(".dragon-name").innerHTML = incindus.name;
          document.querySelector(".element").innerHTML = incindus.element;
          document.querySelector(".habitat").innerHTML = incindus.habitat;
          document.querySelector(".age").innerHTML = incindus.age;
          document.querySelector(".text").innerHTML =  incindus.text;
        break;
        case "Mehthusala":
          document.querySelector(".dragon-name").innerHTML = mehthusala.name;
          document.querySelector(".element").innerHTML = mehthusala.element;
          document.querySelector(".habitat").innerHTML = mehthusala.habitat;
          document.querySelector(".age").innerHTML = mehthusala.age;
          document.querySelector(".text").innerHTML =  mehthusala.text;
        break;
        case "Starlight":
          document.querySelector(".dragon-name").innerHTML = starlight.name;
          document.querySelector(".element").innerHTML = starlight.element;
          document.querySelector(".habitat").innerHTML = starlight.habitat;
          document.querySelector(".age").innerHTML = starlight.age;
          document.querySelector(".text").innerHTML =  starlight.text;
        break;
      }
  }
}

