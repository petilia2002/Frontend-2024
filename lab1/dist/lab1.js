const findMaxNegative = (arr) => {
    let maxNegative = Number.NEGATIVE_INFINITY;
    for (let num of arr) {
        if (num < 0 && num > maxNegative) {
            maxNegative = num;
        }
    }
    return maxNegative;
};
const arr = [1, -2, -1, 5, -9, 7];
const maxNegative = findMaxNegative(arr);
console.log(maxNegative);
const createIntegerMatrix = (boolean_matrix) => {
    return boolean_maxtrix.map((row) => row.map((item) => (item ? 1 : 0)));
};
const boolean_maxtrix = [
    [true, false, false],
    [false, true, false],
    [false, false, true],
];
const integer_matrix = createIntegerMatrix(boolean_maxtrix);
console.log(integer_matrix);
const tuple = [1, "Ilya Petrenckov", "Developer"];
const showTuple = (tuple) => {
    return tuple[2] + ": " + tuple[1];
};
console.log(showTuple(tuple));
console.log("Histidine");
class Pet {
    constructor() {
        this.name = "Some pet";
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = "Barsik";
        this.age = 2;
    }
    speak() {
        return "Miayu!";
    }
}
const showPetInfo = (pet) => {
    console.log(`Name: ${pet.name}, Age: ${pet.age}, Speak: ${pet.speak()}`);
};
const pet = new Pet();
const dog = new Dog();
const cat = new Cat();
showPetInfo(pet);
showPetInfo(dog);
showPetInfo(cat);
const alanine = {
    name: "Alanine",
    formula: "C3H7NO2",
    mass: 89.09,
    source: "Plants",
    role: "Protein synthesis",
};
console.log(alanine);
const jsonAlanine = JSON.stringify(alanine, null, 2);
console.log(jsonAlanine);
console.log("Lab1 is completed!");
