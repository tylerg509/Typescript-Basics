

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
    console.log(vehicle.summary())
}

printVehicle(oldCivic);
printVehicleInterface(oldCivic)

interface Reportable{
    summary(): string;
}

//note that you could delete name year borken from the interface and typescript would work as long as you only use summary in your function/whatever is using the interface
const printSummary = (item: Reportable): void => {
    console.log(item.summary())

}

//create another obj that uses summary
const drink2 = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string{
        return `My drink has ${this.sugar} grams of sugar`
    }
}

//note how we can use now use printSummary using drink since both implement summary
printSummary(drink2)
