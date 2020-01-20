

//interface should have capital name by convention
//name should be broad
interface Vehicle{
    name: string;
    year: number;
    broken: boolean;
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
}

//since the param type annoation is very long we should implement an interface
const printVehicle = (vehicle: {name: string; year: number; broken: boolean}): void => {
    console.log(`Name: ${vehicle.name}`)
    console.log(`Year: ${vehicle.year}`)
    console.log(`Broken: ${vehicle.broken}`)

}

//to use this function you must pass an object that meets the types speciified in the interfaceß
const printVehicleInterface = (vehicle: Vehicle): void => {
    console.log(`Name: ${vehicle.name}`)
    console.log(`Year: ${vehicle.year}`)
    console.log(`Broken: ${vehicle.broken}`)
}

printVehicle(oldCivic);
printVehicleInterface(oldCivic)

