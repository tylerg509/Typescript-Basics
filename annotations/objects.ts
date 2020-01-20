
const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void{
        this.age = age;
    }
}

// 3 scenarios
// Three instances where we use type annotation:
// a) When a function returns that any type and we need to clarify the value (see variables.ts)
// b) When we declare a variable on one line and initalize it later (see variables.ts)
// c) When we want a variable to have a type that can't be inferred (see variables.ts)


//destructure age and write out the expected structured = age:number
//note this is only if required based on our three scenarios
const {age}: {age:number} = profile; //name red but thas ok
//const {age, name}: {age:number, name: string} = profile; //name red but thas ok
//const {age} = profile might be accesptable if this does not fall in our three categories of having to use type annotations

//if required in our three scenarios
const{coords: {lat,lng}}: {coords:{lat:number; lng:number}} = profile
//const {coords: {lat,lng}} = profile;