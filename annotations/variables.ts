//note we do not need the annotations we could remove number from apples and typescript would infer the type = type inference

//common
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

//same type and value
let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in object
let now: Date = new Date();

//array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

//classes
class Car {}

//upper C referring to object class Car
//car is a variable of type Car
let car: Car;

//object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

//function
//here we define what we expect the input param types to be and the output
//we expect param to be i type number and to return void
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//when to use annoations
// a) we have a function that returns the any type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json); //note that typescript thinks that coordinates and json.parase are returning type any
console.log(coordinates);

//fix the above
const json2 = '{"x": 10, "y": 20}';
//since json.parse returns type any we need to add type annotation for coordinates: x and y
//coordinates was of type and but now we can see that it is contains an object x and y and x and y are of type number
const coordinates2: { x: number; y: number } = JSON.parse(json2);
console.log(coordinates2);

//b) when we declare variable on one line and initalize it later
let words = ['red', 'green', 'blue'];
let foundWord; //foundword is not initalized until we set foundword = true
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

//to fix the above
let words2 = ['red', 'green', 'blue'];
//add type annotation //note it is better just to say foundWord2 = false instead of initalizing in the if stmt
let foundWord2: boolean;
for (let i = 0; i < words2.length; i++) {
  if (words2[i] === 'green') {
    foundWord2 = true;
  }
}


//c) When we want a variable to have a type that can't be inferred
let numbers = [-10, -1, 12]
let numberAboveZero = false;

////if you comment out the below you see that numberAboveZero erros out since we try to assign number to the variable == intended
//// ps this not a good idea

// for  (let i = 0; i < numbers.length; i++){
//     if(numbers[i] > 0){
//         numberAboveZero = numbers[i];
//     }
// }


let numbers2 = [-10, -1, 12]
//to fix the above we use type annoation and OR | to assign to type boolean or number
let numberAboveZero2: boolean | number = false; 

//if you comment out the below you see that numberAboveZero erros out since we try to assign number to the variable == intended
// ps this not a good idea

for  (let i = 0; i < numbers2.length; i++){
    if(numbers2[i] > 0){
        numberAboveZero2 = numbers2[i];
    }
}
