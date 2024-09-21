export var Transport;
(function (Transport) {
    let DocumentsType;
    (function (DocumentsType) {
        DocumentsType["Passport"] = "passport";
        DocumentsType["DriverLicense"] = "driver-license";
        DocumentsType["MedicalCertificate"] = "medical-certificate";
    })(DocumentsType = Transport.DocumentsType || (Transport.DocumentsType = {}));
    class Owner {
        constructor(_firstName, _middleName, _lastName, _dateOfBirth, _documentType, _documentSeries, _documentNumber) {
            this._firstName = _firstName;
            this._middleName = _middleName;
            this._lastName = _lastName;
            this._dateOfBirth = _dateOfBirth;
            this._documentType = _documentType;
            this._documentSeries = _documentSeries;
            this._documentNumber = _documentNumber;
        }
        get firstName() {
            return this._firstName;
        }
        set firstName(firstName) {
            this._firstName = firstName;
        }
        get middleName() {
            return this._middleName;
        }
        set middleName(middleName) {
            this._middleName = middleName;
        }
        get lastName() {
            return this._lastName;
        }
        set lastName(lastName) {
            this._lastName = lastName;
        }
        get dateOfBirth() {
            return this._dateOfBirth;
        }
        set dateOfBirth(dateOfBirth) {
            this._dateOfBirth = dateOfBirth;
        }
        get documentType() {
            return this._documentType;
        }
        set documentType(documentType) {
            this._documentType = documentType;
        }
        get documentSeries() {
            return this._documentSeries;
        }
        set documentSeries(documentSeries) {
            this._documentSeries = documentSeries;
        }
        get documentNumber() {
            return this._documentNumber;
        }
        set documentNumber(documentNumber) {
            this._documentNumber = documentNumber;
        }
        displayInfo() {
            console.log(`Last Name: ${this._lastName}\nFirst Name: ${this._firstName}\nMiddle Name: ${this._middleName}\nDate of birth: ${this._dateOfBirth.toLocaleDateString()}\nDocument: ${this._documentType}\nDocument series: ${this._documentSeries}\nDocument number: ${this._documentNumber}`);
        }
    }
    Transport.Owner = Owner;
    class Vehicle {
        constructor(_make, _model, _year, _vin, _registrationNumber, _owner) {
            this._make = _make;
            this._model = _model;
            this._year = _year;
            this._vin = _vin;
            this._registrationNumber = _registrationNumber;
            this._owner = _owner;
        }
        get make() {
            return this._make;
        }
        set make(make) {
            this._make = make;
        }
        get model() {
            return this._model;
        }
        set model(model) {
            this._model = model;
        }
        get year() {
            return this._year;
        }
        set year(year) {
            this._year = year;
        }
        get vin() {
            return this._vin;
        }
        set vin(vin) {
            this._vin = vin;
        }
        get registrationNumber() {
            return this._registrationNumber;
        }
        set registrationNumber(registrationNumber) {
            this._registrationNumber = registrationNumber;
        }
        get owner() {
            return this._owner;
        }
        set owner(owner) {
            this._owner = owner;
        }
        displayInfo() {
            console.log(`Brand: ${this._make}\nModel: ${this._model}\nYear: ${this._year}\nVIN: ${this._vin}\nRegistration Number: ${this._registrationNumber}`);
        }
    }
    Transport.Vehicle = Vehicle;
    let CarBody;
    (function (CarBody) {
        CarBody["Sedan"] = "Sedan";
        CarBody["Hatchback"] = "Hatchback";
        CarBody["SUV"] = "SUV";
        CarBody["Coupe"] = "Coupe";
        CarBody["Convertible"] = "Convertible";
        CarBody["Wagon"] = "Wagon";
        CarBody["Van"] = "Van";
        CarBody["Pickup"] = "Pickup";
        CarBody["Minivan"] = "Minivan";
        CarBody["Crossover"] = "Crossover";
        CarBody["Roadster"] = "Roadster";
    })(CarBody = Transport.CarBody || (Transport.CarBody = {}));
    let CarType;
    (function (CarType) {
        CarType["A"] = "A";
        CarType["B"] = "B";
        CarType["C"] = "C";
        CarType["D"] = "D";
        CarType["E"] = "E";
        CarType["F"] = "F";
        CarType["S"] = "S";
        CarType["J"] = "J";
        CarType["M"] = "M";
        CarType["P"] = "P";
    })(CarType = Transport.CarType || (Transport.CarType = {}));
    class Car extends Vehicle {
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
    }
    Transport.Car = Car;
    class Motorbike extends Vehicle {
        constructor(make, model, year, vin, registrationNumber, owner, typeFrame, forSports) {
            super(make, model, year, vin, registrationNumber, owner);
            this._typeFrame = typeFrame;
            this._forSports = forSports;
        }
        get typeFrame() {
            return this._typeFrame;
        }
        set typeFrame(typeFrame) {
            this._typeFrame = typeFrame;
        }
        get forSports() {
            return this._forSports;
        }
        set forSports(forSports) {
            this._forSports = forSports;
        }
        displayInfo() {
            console.log(`Brand: ${this.make}\nModel: ${this.model}\nYear: ${this.year}\nVIN: ${this.vin}\nRegistration Number: ${this.registrationNumber}\nFrame type: ${this.typeFrame}\nFor sports: ${this.forSports}`);
        }
    }
    Transport.Motorbike = Motorbike;
    class VehicleStorage {
        constructor(dateOfCreation, vehicles) {
            this._dateOfCreation = dateOfCreation;
            this._vehicles = vehicles;
        }
        get dateOfCreation() {
            return this._dateOfCreation;
        }
        set dateOfCreation(dateOfCreation) {
            this._dateOfCreation = dateOfCreation;
        }
        get vehicles() {
            return this._vehicles;
        }
        set vehicles(vehicles) {
            this._vehicles = vehicles;
        }
        getVehicles() {
            return this._vehicles;
        }
    }
    Transport.VehicleStorage = VehicleStorage;
})(Transport || (Transport = {}));
