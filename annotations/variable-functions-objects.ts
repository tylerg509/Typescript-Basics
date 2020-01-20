
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

function divide(a: number, b: number): number{
    return a/b
}

const multiply = function(a:number, b:number): number{
    return a*b 
}

//void can return null or undefined
const logger = (message: string): void => {
    console.log(message)
}

//you will never return anything . you will never reach the end of the function 
//in this case you would exit function early
//this really nevery happens and shouldnt really ever be needed
const throwError = (message: string): never => {
    throw new Error(message)
}