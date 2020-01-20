

//interface should have capital name by convention
//name should be broad
//you can any type to an interface = not limited to primaritve types - not how we assign date
interface Vehicle{
    name: string;
    year: Date;
    broken: boolean;
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`
    }
}

//since the param type annoation is very long we should implement an interface
const printVehicle = (vehicle: {name: string; year: Date; broken: boolean; summary: ()=>string}): void => {
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

