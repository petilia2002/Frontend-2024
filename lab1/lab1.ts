// Лабораторная работа 1

// Task 1.
// Реализовать метод, возвращающий максимальное значение среди отрицательных чисел массива целых чисел.
const findMaxNegative = (arr: Array<number>): number => {
  let maxNegative: number = Number.NEGATIVE_INFINITY;
  for (let num of arr) {
    if (num < 0 && num > maxNegative) {
      maxNegative = num;
    }
  }
  return maxNegative;
};

// Test:
const arr: number[] = [1, -2, -1, 5, -9, 7];
const maxNegative = findMaxNegative(arr);
console.log(maxNegative); // -1

// Task 2.
/* Реализовать метод, возвращающий матрицу целых чисел, составленный из матрицы булевых значений (значение true
переходит в формат числа 1, а false в формат числа 0).*/
const createIntegerMatrix = (boolean_matrix: boolean[][]): number[][] => {
  return boolean_maxtrix.map((row) => row.map((item) => (item ? 1 : 0)));
};

// Test:
const boolean_maxtrix: boolean[][] = [
  [true, false, false],
  [false, true, false],
  [false, false, true],
];

const integer_matrix: number[][] = createIntegerMatrix(boolean_maxtrix);
console.log(integer_matrix);

// Task 3.
/* Создайте кортеж, который может содержать только 2 строковых и 1 числовое значения (порядок следования: число,
строка0, строка1). Реализуйте метод, возвращающий конкатенацию строк в формате: строка1: строка0. */
const tuple: [number, string, string] = [1, "Ilya Petrenckov", "Developer"];

const showTuple = (tuple: [number, string, string]): string => {
  return tuple[2] + ": " + tuple[1];
};

console.log(showTuple(tuple));

// Task 4.
/* Создайте тип перечисление для типов стандартных аминокислот (Глицин, Глутамин и т.д). Выведите какой-либо тип
аминокислоты в консоль. */
const enum AminoAcid {
  Alanine = "Аланин",
  Arginine = "Аргинин",
  Asparagine = "Аспарагин",
  AsparticAcid = "Аспарагиновая кислота",
  Cysteine = "Цистеин",
  Glutamine = "Глутамин",
  GlutamicAcid = "Глутаминовая кислота",
  Glycine = "Глицин",
  Isoleucine = "Изолейцин",
  Leucine = "Лейцин",
  Lysine = "Лизин",
  Methionine = "Метионин",
  Phenylalanine = "Фенилаланин",
  Proline = "Пролин",
  Serine = "Серин",
  Threonine = "Треонин",
  Tryptophan = "Триптофан",
  Tyrosine = "Тирозин",
  Valine = "Вэлин",
  Histidine = "Гистидин",
}

console.log(AminoAcid.Histidine);

// Task 5.
/* Используя следующий код, реализуйте метод, который будет выводить информацию в консоль о создаваемом объекте типа
Cat или Dog, применяя Обобщенный тип, ограниченный типом Pet. */
class Pet {
  name: string = "Some pet";
  age: number = -1;
  speak() {
    return "No speak. I am fish!";
  }
}

class Dog extends Pet {
  label = "AngryHunter";
  age = 8;
  speak() {
    return "Yaw-Gaw!";
  }
}

class Cat extends Pet {
  name = "Barsik";
  age = 2;
  speak() {
    return "Miayu!";
  }
}

const showPetInfo = <T extends Pet>(pet: T): void => {
  console.log(`Name: ${pet.name}, Age: ${pet.age}, Speak: ${pet.speak()}`);
};

const pet = new Pet();
const dog = new Dog();
const cat = new Cat();

showPetInfo(pet);
showPetInfo(dog);
showPetInfo(cat);

// Task 6.
/* Создайте тип с применением перечисления из 3го задания (для использования его в качестве типа поля, для некоторых
случаев возможно его использование при реализации массива). Добавьте собственные поля стандартных типов, корректно
характеризующие ту или иную предметную область, совпадающую с вашим типом перечисления. Создайте объект на основе
вашего типа и выведите его в консоль в формате JSON. */
type AminoAcidInfo = {
  name: AminoAcid;
  formula: string;
  mass: number;
  source: string;
  role: string;
};

const alanine: AminoAcidInfo = {
  name: AminoAcid.Alanine,
  formula: "C3H7NO2",
  mass: 89.09,
  source: "Plants",
  role: "Protein synthesis",
};
console.log(alanine);

const jsonAlanine = JSON.stringify(alanine, null, 2);
console.log(jsonAlanine);
