import { Transport } from "./transport.js";

/* Creation objects of Transport namespace: */
const owner = new Transport.Owner(
  "Ilya",
  "Alekseevich",
  "Petrenckov",
  new Date(2002, 3, 27),
  Transport.DocumentsType.Passport,
  "1234",
  "567890"
);

const vehicle = new Transport.Vehicle(
  "Toyota",
  "Camry",
  2020,
  "1HGBH41JXMN109186",
  "A123BC",
  owner
);

console.log("Information about the owner:");
owner.displayInfo();
console.log("Information about the vehicle:");
vehicle.displayInfo();

const car = new Transport.Car(
  "Toyota",
  "Camry",
  2020,
  "1HGBH41JXMN109186",
  "A123BC",
  owner,
  Transport.CarBody.Sedan,
  Transport.CarType.D
);

console.log("Information about the car:");
car.displayInfo();

const motorbike = new Transport.Motorbike(
  "Yamaha",
  "YZF-R1",
  2022,
  "1HGBH41JXMN109186",
  "A123BC",
  owner,
  "deltabox",
  true
);

console.log("Information about the motorbike:");
motorbike.displayInfo();

const vehicleStorage = new Transport.VehicleStorage<Transport.Vehicle>(
  new Date(2024, 8, 21),
  [vehicle, car, motorbike]
);
console.log("Vehicles of vehicle storage:");
const vehicles: Transport.Vehicle[] = vehicleStorage.getVehicles();
console.log(vehicles);
