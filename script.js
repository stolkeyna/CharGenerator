// Character generator

//Przykładowa definicja:

// const bohater = {
//     name: "",
//     role: "",
//     level: 1,
//     skills: [],
//     equipment: {
//         weapon: "dagger",
//         armor: "wooden armor",
//         items: ["Healing potion", "Compass"]
//     }
// }

function createCharacter(charName, charRole) {
    this.name = charName;
    this.role = charRole;
    this.level = 1;
    this.skills = [];
    this.equipment = {weapon: null, armor: null, items: []}
}
function addItem(character, item) {
    this.equipment.items.push(item);
}
function learnSkill(character, skill) {
    this.skills.push(skill);
}
function levelUp(character) {
    this.level++;
}
function characterDescription(character) {

}

const character1 = new createCharacter("Vanichkin", "uczeń");
console.log(character1);
addItem(character1, "długopis");
console.log(character1);
// learnSkill(character1, "speaks English");
// levelUp(character1);

