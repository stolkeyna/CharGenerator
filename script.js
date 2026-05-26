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

function createCharacter2(charName, charRole) {
    return {
        name: charName,
        role: charRole,
        level: 1,
        skills: []
    }
}


function createCharacter(charName, charRole) {
    this.name = charName;
    this.role = charRole;
    this.level = 1;
    this.skills = [];
    this.equipment = { items: [] }
}
function addItem(character, item) {
    character.items = item;
}
function learnSkill(character, skill) {
    character.skills = skill;
}
function levelUp(character, level) {
    character.level = level;
}
function characterDescription(character) {
    const imie = document.getElementById('imie');
    const role = document.getElementById('role');
    const lvl = document.getElementById('lvl');
    const skills = document.getElementById('skills');
    const items = document.getElementById('items');

    imie.innerText = "Imie: " + character.name;
    role.innerText = "Rola: " + character.role;
    lvl.innerText = "Lvl: " + character.level;
    skills.innerText = "Skills: " + character.skills;
    items.innerText = "Przedmioty: " + character.items;
}

function generujBohatera() {
    // const bohater = document.getElementById("Bohater").value;
    const imieI = document.getElementById("name").value;
    const rolaI = document.getElementById("rola").value;
    const przedI = document.getElementById("item").value;
    const skillI = document.getElementById("skill").value;
    const lvlUp = document.getElementById("lvlup").value;

    const bohater = new createCharacter(imieI, rolaI);
    addItem(bohater, przedI);
    learnSkill(bohater, skillI);
    levelUp(bohater, lvlUp);
    characterDescription(bohater);
    // if (bohater != undefined) {
    //     addItem(bohater, przedI);
    //     learnSkill(bohater, skillI);
    //     levelUp(bohater, lvlUp);
    //     characterDescription(bohater);
    // } else if (bohater == undefined) {
    //     bohater = new createCharacter(imieI, rolaI);
    //     addItem(bohater, przedI);
    //     learnSkill(bohater, skillI);
    //     levelUp(bohater, lvlUp);
    //     characterDescription(bohater);
    // }
}// Character generator

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

