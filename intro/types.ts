const today = new Date();
today.getMonth(); //if you call a property that is not there typescript throws error

//if you dont define type hovering over person would show age: number
const person = {
    age: 20
}

//since no properties when you type red. you cant call anything
class Color{}

const red = new Color();
