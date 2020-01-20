
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

//flexible types
//important dates is stirng or date
const importantDates = [new Date(), '2030-10-10'];

//cant push things other than date or string
const importantDates2: (Date | string)[] = [new Date()];
importantDates2.push('2030-10-10')
importantDates2.push(new Date())

//if initializing empyty 
const importantDates3: (Date | string)[] = [];


//we use typed arraays any time we need to represent a collection of records with some arbitrary sort order