//typle has fixed order

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

//type of pepsi is string boolean or number
//since its an array we are not sure that the order of items will not change
const pepsi = ['brown', true, 40]

//type alias
type Drink= [string, boolean, number]
//instead of aray use tuple 
//tuple is defined when you assign types to an array
const pepsiTuple: Drink = ['brown', true, 40]
const sprite: Drink = ['clear', true, 40]
const tea: Drink = ['brown', false, 0]



