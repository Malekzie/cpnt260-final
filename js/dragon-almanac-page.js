// Initialized an object for each dragon
const dragonArray = [];
const infernum =
{
  name: "Infernum",
  element: "Fire",
  habitat: "The Scorching Caldera",
  age: 7258,
  text: "asda"
}

const sprite = 
{
  name: "Sprite",
  element: "Water",
  habitat: "The Azure Depths",
  age: 8574,
  text: "Asda"
}
const anthracite=
{
  name: "Anthracite",
  element: "Earth",
  habitat: "The Stonewrought Caverns",
  age: 7769,
  text: "Qwert"
} 
const tempest = 
{
  name: "Tempest",
  element: "Water",
  habitat: "The Cyclone's Roost",
  age: 6701,
  text: "Weert"
}
const gaia = 
{
  name: "Gaia",
  element: "Plant",
  habitat: "The Verdant Haven",
  age: 8412,
  text: "werty"
}
const voltmaw = 
{
  name: "Voltmaw",
  element: "Lightning",
  habitat: "The Thunderstruck Peaks",
  age: 9983,
  text: "wewow"
}
const incindus = 
{
  name: "Incindus",
  element: "Light",
  habitat: "The Radiant Glade",
  age: 7206,
  text: "weerests"
}
const mehthusala = 
{
  name: "Mehthusala",
  element: "Dark",
  habitat: "The Abyssal Void",
  age: "Unknown",
  text: "ASdawasas"
}
const starlight = 
{
  name: "Starlight",
  element: "Star",
  habitat: "The Celestial Expanse",
  age: "Unknown",
  text: "Asdawdas"
}

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
          document.querySelector(".age").innerHTML = sprite.age;
          document.querySelector(".text").innerHTML =  anthracite.text;
          break;
        case "Tempest":
          document.querySelector(".dragon-name").innerHTML = tempest.name;
          document.querySelector(".element").innerHTML = tempest.element;
          document.querySelector(".habitat").innerHTML = tempest.habitat;
          document.querySelector(".age").innerHTML = tempest.age;
          document.querySelector(".text").innerHTML =  tempest.text;
          break;
        case "Gaia":voltmaw
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
        default:
          document.querySelector(".dragon-name").innerHTML = infernum.name;
          document.querySelector(".element").innerHTML = infernum.element;
          document.querySelector(".habitat").innerHTML = infernum.habitat;
          document.querySelector(".age").innerHTML = infernum.age;
          document.querySelector(".text").innerHTML =  infernum.text;
      }
  }
}

