// Write your JS here
const hero = {
  name: 'Superwoman',
  heroic: true,
  health: 10,
  inventory: [],
  weapon: {
    type: "Gun",
    damage: 2
 }
};

 function rest(person) {
   if (person.health >= 10) {
    alert ("Health is 100%") 
   } else {
    person.health = 10; 
   }
    return person;
    };
  
const img = document.getElementById("inn")

function pickUpItem(person, weapon){
person.inventory.push(weapon)
};

function equipWeapon(person){
if (person.inventory){
  return null
}
person.weapon = hero.inventory[0];
};


