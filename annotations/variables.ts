
//common
let apples: number = 5;
let speed: string = 'fast'
let hasName: boolean = true;

//same type and value
let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in object
let now: Date = new Date();

//array
let colors: string[] = ['red', 'green', 'blue']
let myNumbers: number[] = [1,2,3]
let truths: boolean[] = [true, true, false]

//classes
class Car {}

//upper C referring to object class Car
//car is a variable of type Car
let car: Car

//object literal

let point: {x:number; y: number} = {
    x: 10,
    y: 20
};

//function
//here we define what we expect the input param types to be and the output
//we expect param to be i type number and to return void
const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}