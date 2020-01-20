
//type inference says this is string[]
const carMakers = ['ford', 'toyota', 'chevy']

//if we initialize an empty we must specify a type
const beerMakers: string[] = [];

//dates is of type Date[]
const dates = [new Date(), new Date()]

//type string[][]  = 2d array
const carsByMake = [
    ['f150'], ['corolla'], ['camero']
]

//empty 2d array 
const vodkaByMake: string[][] = []

//help with inference when extracting values
//car2 and mycar are both inferred as string
const car2 = carMakers[0];
const myCar = carMakers.pop();

//prevent incompativle values
//below 100 errors out
//carMakers.push(100)
//this ok
carMakers.push('199');


//help with map reduce foreach
//return car. can now access all methods available on strings!!!!
carMakers.map((car: string): string => {
    return car.toUpperCase();
})