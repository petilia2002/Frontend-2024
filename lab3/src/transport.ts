export namespace Transport {
  export enum DocumentsType {
    Passport = "passport",
    DriverLicense = "driver-license",
    MedicalCertificate = "medical-certificate",
  }

  export interface IOwner {
    firstName: string;
    middleName: string;
    lastName: string;
    dateOfBirth: Date;
    documentType: DocumentsType;
    documentSeries: string;
    documentNumber: string;
    displayInfo: () => void;
  }

  interface IVehicle {
    make: string;
    model: string;
    year: number;
    vin: string;
    registrationNumber: string;
    owner: IOwner;
    displayInfo: () => void;
  }

  export class Owner implements IOwner {
    constructor(
      private _firstName: string,
      private _middleName: string,
      private _lastName: string,
      private _dateOfBirth: Date,
      private _documentType: DocumentsType,
      private _documentSeries: string,
      private _documentNumber: string
    ) {}

    get firstName(): string {
      return this._firstName;
    }

    set firstName(firstName: string) {
      this._firstName = firstName;
    }

    get middleName(): string {
      return this._middleName;
    }

    set middleName(middleName: string) {
      this._middleName = middleName;
    }

    get lastName(): string {
      return this._lastName;
    }

    set lastName(lastName: string) {
      this._lastName = lastName;
    }

    get dateOfBirth(): Date {
      return this._dateOfBirth;
    }

    set dateOfBirth(dateOfBirth: Date) {
      this._dateOfBirth = dateOfBirth;
    }

    get documentType(): DocumentsType {
      return this._documentType;
    }

    set documentType(documentType: DocumentsType) {
      this._documentType = documentType;
    }

    get documentSeries(): string {
      return this._documentSeries;
    }

    set documentSeries(documentSeries: string) {
      this._documentSeries = documentSeries;
    }

    get documentNumber(): string {
      return this._documentNumber;
    }

    set documentNumber(documentNumber: string) {
      this._documentNumber = documentNumber;
    }

    displayInfo(): void {
      console.log(
        `Last Name: ${this._lastName}\nFirst Name: ${
          this._firstName
        }\nMiddle Name: ${
          this._middleName
        }\nDate of birth: ${this._dateOfBirth.toLocaleDateString()}\nDocument: ${
          this._documentType
        }\nDocument series: ${this._documentSeries}\nDocument number: ${
          this._documentNumber
        }`
      );
    }
  }

  export class Vehicle implements IVehicle {
    constructor(
      private _make: string,
      private _model: string,
      private _year: number,
      private _vin: string,
      private _registrationNumber: string,
      private _owner: IOwner
    ) {}

    get make(): string {
      return this._make;
    }

    set make(make: string) {
      this._make = make;
    }

    get model(): string {
      return this._model;
    }

    set model(model: string) {
      this._model = model;
    }

    get year(): number {
      return this._year;
    }

    set year(year: number) {
      this._year = year;
    }

    get vin(): string {
      return this._vin;
    }

    set vin(vin: string) {
      this._vin = vin;
    }

    get registrationNumber(): string {
      return this._registrationNumber;
    }

    set registrationNumber(registrationNumber: string) {
      this._registrationNumber = registrationNumber;
    }

    get owner(): IOwner {
      return this._owner;
    }

    set owner(owner: IOwner) {
      this._owner = owner;
    }

    displayInfo(): void {
      console.log(
        `Brand: ${this._make}\nModel: ${this._model}\nYear: ${this._year}\nVIN: ${this._vin}\nRegistration Number: ${this._registrationNumber}`
      );
    }
  }

  export enum CarBody {
    Sedan = "Sedan",
    Hatchback = "Hatchback",
    SUV = "SUV",
    Coupe = "Coupe",
    Convertible = "Convertible",
    Wagon = "Wagon",
    Van = "Van",
    Pickup = "Pickup",
    Minivan = "Minivan",
    Crossover = "Crossover",
    Roadster = "Roadster",
  }

  export enum CarType {
    A = "A", // Минимальный класс (миниавтомобили)
    B = "B", // Малый класс (субкомпактные автомобили)
    C = "C", // Средний класс (компактные автомобили)
    D = "D", // Семейный класс (среднеразмерные автомобили)
    E = "E", // Бизнес-класс (полноразмерные автомобили)
    F = "F", // Представительский класс (люксовые автомобили)
    S = "S", // Спортивные автомобили
    J = "J", // Внедорожники (SUV)
    M = "M", // Минивэны и микроавтобусы
    P = "P", // Пикапы
  }

  export interface ICar extends IVehicle {
    bodyType: CarBody;
    carType: CarType;
  }

  interface IMotorbike extends IVehicle {
    typeFrame: string;
    forSports: boolean;
  }

  export class Motorbike extends Vehicle implements IMotorbike {
    private _typeFrame: string;
    private _forSports: boolean;

    constructor(
      make: string,
      model: string,
      year: number,
      vin: string,
      registrationNumber: string,
      owner: IOwner,
      typeFrame: string,
      forSports: boolean
    ) {
      super(make, model, year, vin, registrationNumber, owner);
      this._typeFrame = typeFrame;
      this._forSports = forSports;
    }

    get typeFrame(): string {
      return this._typeFrame;
    }

    set typeFrame(typeFrame: string) {
      this._typeFrame = typeFrame;
    }

    get forSports(): boolean {
      return this._forSports;
    }

    set forSports(forSports: boolean) {
      this._forSports = forSports;
    }

    displayInfo(): void {
      console.log(
        `Brand: ${this.make}\nModel: ${this.model}\nYear: ${this.year}\nVIN: ${this.vin}\nRegistration Number: ${this.registrationNumber}\nFrame type: ${this.typeFrame}\nFor sports: ${this.forSports}`
      );
    }
  }

  interface IVehicleStorage<T extends Vehicle> {
    dateOfCreation: Date;
    vehicles: T[];
    getVehicles: () => T[];
  }

  export class VehicleStorage<T extends Vehicle> implements IVehicleStorage<T> {
    private _dateOfCreation: Date;
    private _vehicles: T[];

    constructor(dateOfCreation: Date, vehicles: T[]) {
      this._dateOfCreation = dateOfCreation;
      this._vehicles = vehicles;
    }

    get dateOfCreation(): Date {
      return this._dateOfCreation;
    }

    set dateOfCreation(dateOfCreation: Date) {
      this._dateOfCreation = dateOfCreation;
    }

    get vehicles(): T[] {
      return this._vehicles;
    }

    set vehicles(vehicles: T[]) {
      this._vehicles = vehicles;
    }

    getVehicles(): T[] {
      return this._vehicles;
    }
  }
}
