
//type annotations for functions = code we add to tell TS what type of arguments and functions will receive and 
//what type of values it will return

//type inference for functiosn = TS tried to figure out what type of value a funciton will return only

//have to add type annotation to a and b
//have to tell TS what this function will return ": number" means it will return number
const add = (a: number, b: number): number => {
    return  a + b;
}

//its good to use the return type annotation because it will ensure you return a value
//if no retur ntype annotation you could return nothing and type inference would infer that return type is void
const subtract = (a: number, b: number): number => {
    return a-b;
}