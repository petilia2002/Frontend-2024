export declare namespace Transport {
    export enum DocumentsType {
        Passport = "passport",
        DriverLicense = "driver-license",
        MedicalCertificate = "medical-certificate"
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
        private _firstName;
        private _middleName;
        private _lastName;
        private _dateOfBirth;
        private _documentType;
        private _documentSeries;
        private _documentNumber;
        constructor(_firstName: string, _middleName: string, _lastName: string, _dateOfBirth: Date, _documentType: DocumentsType, _documentSeries: string, _documentNumber: string);
        get firstName(): string;
        set firstName(firstName: string);
        get middleName(): string;
        set middleName(middleName: string);
        get lastName(): string;
        set lastName(lastName: string);
        get dateOfBirth(): Date;
        set dateOfBirth(dateOfBirth: Date);
        get documentType(): DocumentsType;
        set documentType(documentType: DocumentsType);
        get documentSeries(): string;
        set documentSeries(documentSeries: string);
        get documentNumber(): string;
        set documentNumber(documentNumber: string);
        displayInfo(): void;
    }
    export class Vehicle implements IVehicle {
        private _make;
        private _model;
        private _year;
        private _vin;
        private _registrationNumber;
        private _owner;
        constructor(_make: string, _model: string, _year: number, _vin: string, _registrationNumber: string, _owner: IOwner);
        get make(): string;
        set make(make: string);
        get model(): string;
        set model(model: string);
        get year(): number;
        set year(year: number);
        get vin(): string;
        set vin(vin: string);
        get registrationNumber(): string;
        set registrationNumber(registrationNumber: string);
        get owner(): IOwner;
        set owner(owner: IOwner);
        displayInfo(): void;
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
        Roadster = "Roadster"
    }
    export enum CarType {
        A = "A",
        B = "B",
        C = "C",
        D = "D",
        E = "E",
        F = "F",
        S = "S",
        J = "J",
        M = "M",
        P = "P"
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
        private _typeFrame;
        private _forSports;
        constructor(make: string, model: string, year: number, vin: string, registrationNumber: string, owner: IOwner, typeFrame: string, forSports: boolean);
        get typeFrame(): string;
        set typeFrame(typeFrame: string);
        get forSports(): boolean;
        set forSports(forSports: boolean);
        displayInfo(): void;
    }
    interface IVehicleStorage<T extends Vehicle> {
        dateOfCreation: Date;
        vehicles: T[];
        getVehicles: () => T[];
    }
    export class VehicleStorage<T extends Vehicle> implements IVehicleStorage<T> {
        private _dateOfCreation;
        private _vehicles;
        constructor(dateOfCreation: Date, vehicles: T[]);
        get dateOfCreation(): Date;
        set dateOfCreation(dateOfCreation: Date);
        get vehicles(): T[];
        set vehicles(vehicles: T[]);
        getVehicles(): T[];
    }
    export {};
}
