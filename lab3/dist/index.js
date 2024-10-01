var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Transport } from "./transport.js";
const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};
function deleteUnevenElements(arr) {
    return __awaiter(this, void 0, void 0, function* () {
        let newArr = [...arr];
        console.log("Source array: ", newArr);
        for (let i = 0; i < newArr.length; ++i) {
            if (newArr[i] % 2 !== 0) {
                console.log(`Removing element = ${newArr[i]}`);
                newArr.splice(i, 1);
                yield delay(2000);
            }
        }
        console.log("New array: ", newArr);
        return newArr;
    });
}
function wrapFunc(arr) {
    return __awaiter(this, void 0, void 0, function* () {
        let newArr = [...arr];
        let startInd = 0;
        function removeUnevenElements() {
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
                }
                else {
                    resolve();
                }
            });
        }
        console.log("Source array: ", newArr);
        console.log("Start removing uneven elements");
        yield removeUnevenElements();
        console.log("End removing uneven elements");
        console.log("New array: ", newArr);
        return newArr;
    });
}
function sequence(start = 0, step = 1) {
    let current = start;
    return () => {
        let tempValue = current;
        current += step;
        console.log(`Member of the sequence: ${tempValue}`);
    };
}
const sealed = (constructor) => {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
};
const formatProperty = (target, propertyKey) => {
    let value;
    const getter = () => {
        return value.toUpperCase();
    };
    const setter = (newValue) => {
        value = newValue;
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
    });
};
const formatDisplay = (target, propertyKey, descriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function () {
        const result = originalMethod.apply(this);
        return result.toUpperCase();
    };
};
let Car = class Car extends Transport.Vehicle {
    constructor(make, model, year, vin, registrationNumber, owner, bodyType, carType) {
        super(make, model, year, vin, registrationNumber, owner);
        this._bodyType = bodyType;
        this._carType = carType;
    }
    get bodyType() {
        return this._bodyType;
    }
    set bodyType(bodyType) {
        this._bodyType = bodyType;
    }
    get carType() {
        return this._carType;
    }
    set carType(carType) {
        this._carType = carType;
    }
    displayInfo() {
        console.log(`Brand: ${this.make}\nModel: ${this.model}\nYear: ${this.year}\nVIN: ${this.vin}\nRegistration Number: ${this.registrationNumber}\nCar Body: ${this.bodyType}\nCar Type: ${this.carType}`);
    }
    getInfo() {
        return `Brand: ${this.make}\nModel: ${this.model}\nYear: ${this.year}\nVIN: ${this.vin}\nRegistration Number: ${this.registrationNumber}\nCar Body: ${this.bodyType}\nCar Type: ${this.carType}`;
    }
};
__decorate([
    formatProperty
], Car.prototype, "_bodyType", void 0);
__decorate([
    formatDisplay
], Car.prototype, "getInfo", null);
Car = __decorate([
    sealed
], Car);
const owner = new Transport.Owner("Ilya", "Alekseevich", "Petrenckov", new Date(2002, 3, 27), Transport.DocumentsType.Passport, "1234", "567890");
const car = new Car("Toyota", "Camry", 2020, "1HGBH41JXMN109186", "A123BC", owner, Transport.CarBody.Sedan, Transport.CarType.D);
console.log("Task #1:");
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
deleteUnevenElements(arr)
    .then((newArr) => console.log(newArr))
    .then(() => {
    console.log("Task #2:");
    const generator = sequence(5, 2);
    console.log("Sequence generator:");
    generator();
    generator();
    generator();
})
    .then(() => {
    console.log("Task #3:");
    Object.defineProperty(Car.prototype, "age", {
        value: 10,
    });
    console.log(car.age);
})
    .catch((error) => console.log(error))
    .then(() => {
    console.log("Task #4:");
    console.log("Body type of the car:");
    console.log(car.bodyType);
    console.log("Information of the car:");
    const carInfo = car.getInfo();
    console.log(carInfo);
});
