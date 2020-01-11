// Write your JS here

//Create a Hero Object

const hero = {
  name: 'Superwoman',
  heroic: true,
  health: 10,
  inventory: [],
  weapon: {
    type: "dagger",
    damage: 2,
 }
};

// -- Gamepart: Resting and reload health --

// Created an alert in the if statement when health was already > 10
// Created an else statement to reassign the health with vallue 10
 function rest(person) {
   if (person.health >= 10) {
    alert ("Your health is already up to 100%") 
   } else {
      person.health = 10; 
   }
     return person;
    };
  
// added img from html with id
// added (click)event, to reset te value of health
const resetHealth = document.getElementById("inn")

resetHealth.addEventListener('click', function() {
  rest(hero);
})

// -- Gamepart: Picking up items --

// Made a function to 'pickUpItem' to pick up a weapon and add it to the inventory 
function pickUpItem(person, weapon){
person.inventory.push(weapon);
return person;
};

//added (click)event, to add weapon to the inventory
const addWeaponToInventory = document.getElementById("dagger")
// it is not working, i can not find out why:
addWeaponToInventory.addEventListener('click', function() {
  // pickUpItem (person, weapon)
  // return (hero, weapon);
})


// -- Gamepart: Equip weapon --

// Created a function "equipWeapon" to put a weapon in to the inventory
function equipWeapon(person){
  if (person.inventory[0] == null){
      return null;
  } else {
    person.weapon = person.inventory[0];
      return person;
  };
}

//added (click)event, to equip the hero with the first item of the inventory
const getWeapon = document.getElementById("bag")
getWeapon.addEventListener('click', function() {
  equipWeapon(hero);
})