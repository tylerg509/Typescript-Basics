

//note we do not need the annotations we could remove number from apples and typescript would infer the type = type inference


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


//when to use annoations
// a) we have a function that returns the any type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json); //note that typescript thinks that coordinates and json.parase are returning type any
console.log(coordinates) 

//fix the abovve
const json2 = '{"x": 10, "y": 20}';
//since json.parse returns type any we need to add type annotation for coordinates: x and y
//coordinates was of type and but now we can see that it is contains an object x and y and x and y are of type number
const coordinates2: {x: number; y:number} = JSON.parse(json2); 
console.log(coordinates2) 



