import { Transport } from "./transport.js";

// Task 1 (работа с синхронными и асинхронными методами):
/* Реализуйте функцию удаления нечетных чисел из одномерного массива натуральных чисел. После удаления одного из таких чисел,
следует подождать 1 секунду до удаления следующего. Операции удаления следует показывать в консоли */

// First Way:
const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

async function deleteUnevenElements(arr: number[]): Promise<number[]> {
  let newArr: number[] = [...arr];
  console.log("Source array: ", newArr);
  for (let i = 0; i < newArr.length; ++i) {
    if (newArr[i] % 2 !== 0) {
      console.log(`Removing element = ${newArr[i]}`);
      newArr.splice(i, 1);
      await delay(2000);
    }
  }
  console.log("New array: ", newArr);
  return newArr;
}

// Second Way:
async function wrapFunc(arr: number[]): Promise<number[]> {
  let newArr: number[] = [...arr];
  let startInd = 0;
  function removeUnevenElements(): Promise<void> {
    return new Promise((resolve) => {
      let i = startInd;
      while (i < newArr.length) {
        if (newArr[i] % 2 !== 0) {
          console.log(`Removing element = ${newArr[i]}`);
          newArr.splice(i, 1);
          break;
        }
        ++i;
        startInd = i;
      }
      if (startInd < newArr.length) {
        console.log("Paused..");
        setTimeout(() => resolve(removeUnevenElements()), 2000);
      } else {
        resolve();
      }
    });
  }
  console.log("Source array: ", newArr);
  console.log("Start removing uneven elements");
  await removeUnevenElements();
  console.log("End removing uneven elements");
  console.log("New array: ", newArr);
  return newArr;
}

//wrapFunc(arr).then((newArr) => console.log(newArr));

// Task 2 (замыкания):
/* Реализуйте на ваш выбор функцию, которая возвращает функцию, которая в свою в свою очередь пишет результат в консоль некоторую строку. Вызвать
данные функции, показав принцип работы замыканий. */

function sequence(start: number = 0, step: number = 1) {
  let current = start;
  return () => {
    let tempValue = current;
    current += step;
    console.log(`Member of the sequence: ${tempValue}`);
  };
}

// Task 3 (декораторы класса):
/* Создайте декоратор, выполняющий блокировку изменения прототипа класса автомобиль. Необходимо проверить, осталась ли возможность добавления
сторонних полей в объект после введения декоратора (проверка работоспособности). */

const sealed = (constructor: Function) => {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

const formatProperty = (target: Object, propertyKey: string) => {
  let value: string;
  const getter = () => {
    return value.toUpperCase();
  };
  const setter = (newValue: string) => {
    value = newValue;
  };
  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter,
  });
};

const formatDisplay = (
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  const originalMethod = descriptor.value;
  descriptor.value = function () {
    const result = originalMethod.apply(this);
    return result.toUpperCase();
  };
};

@sealed
class Car extends Transport.Vehicle implements Transport.ICar {
  @formatProperty
  private _bodyType: Transport.CarBody;
  private _carType: Transport.CarType;

  constructor(
    make: string,
    model: string,
    year: number,
    vin: string,
    registrationNumber: string,
    owner: Transport.IOwner,
    bodyType: Transport.CarBody,
    carType: Transport.CarType
  ) {
    super(make, model, year, vin, registrationNumber, owner);
    this._bodyType = bodyType;
    this._carType = carType;
  }

  get bodyType(): Transport.CarBody {
    return this._bodyType;
  }

  set bodyType(bodyType: Transport.CarBody) {
    this._bodyType = bodyType;
  }

  get carType(): Transport.CarType {
    return this._carType;
  }

  set carType(carType: Transport.CarType) {
    this._carType = carType;
  }

  displayInfo(): void {
    console.log(
      `Brand: ${this.make}\nModel: ${this.model}\nYear: ${this.year}\nVIN: ${this.vin}\nRegistration Number: ${this.registrationNumber}\nCar Body: ${this.bodyType}\nCar Type: ${this.carType}`
    );
  }

  @formatDisplay
  getInfo(): string {
    return `Brand: ${this.make}\nModel: ${this.model}\nYear: ${this.year}\nVIN: ${this.vin}\nRegistration Number: ${this.registrationNumber}\nCar Body: ${this.bodyType}\nCar Type: ${this.carType}`;
  }
}

const owner = new Transport.Owner(
  "Ilya",
  "Alekseevich",
  "Petrenckov",
  new Date(2002, 3, 27),
  Transport.DocumentsType.Passport,
  "1234",
  "567890"
);

const car = new Car(
  "Toyota",
  "Camry",
  2020,
  "1HGBH41JXMN109186",
  "A123BC",
  owner,
  Transport.CarBody.Sedan,
  Transport.CarType.D
);

// Task 4 (декоратор метода):
/* Реализуйте декоратор метода, выполняющий преобразование возвращаемой строки с некими сведениями об объекте класса Автомобиль, заменяя все
буквы на ЗАГЛАВНЫЕ. */

// Run all tasks:
console.log("Task #1:");
const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
deleteUnevenElements(arr)
  .then((newArr) => console.log(newArr)) // Task #1
  .then(() => {
    // Task #2
    console.log("Task #2:");
    const generator = sequence(5, 2);
    console.log("Sequence generator:");
    generator(); // 5
    generator(); // 7
    generator(); // 9
  })
  .then(() => {
    // Task #3
    console.log("Task #3:");
    Object.defineProperty(Car.prototype, "age", {
      value: 10,
    });
    console.log((car as any).age);
  })
  .catch((error) => console.log(error))
  .then(() => {
    // Task #4
    console.log("Task #4:");
    console.log("Body type of the car:");
    console.log(car.bodyType);
    console.log("Information of the car:");
    const carInfo: string = car.getInfo();
    console.log(carInfo);
  });
