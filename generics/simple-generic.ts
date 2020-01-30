class ArrayOfNumbers{
    constructor(public collection: number[]){}

    get(index: number): number{
        return this.collection[index];
    }
}

class ArrayOfStrings{
    constructor(public collection: string[]){}

    get(index: number): string{
        return this.collection[index]
    } 
}

//since the above methods are exactly the same we can use generics
class ArrayOfAnything<T>{
    constructor(public collection: T[]){}

    get(index: number): T{
        return this.collection[index]
    }
}


new ArrayOfAnything<string>(['1','2','3'])
new ArrayOfAnything<number>([1,2,3])

//type inference means that we do not have to specifiy a type
const arrStr = new ArrayOfAnything(['a','b','c'])
const arrNum = new ArrayOfAnything<number>([1,2,3])

//example of generics with functions
function printStrings(arr: string[]): void {
    arr.forEach(item =>{
        console.log(item)
    })

}

function printNumbers(arr: number[]): void{
    arr.forEach(item =>{
        console.log(item)
    })
}


//since the above two do the same thing we can use generics!
function printAnything<T>(arr: T[]): void{
    arr.forEach(item=>{
        console.log(item)
    })
}

//type inference says we dont have to pass the type
//hover over the method and you can see that typescipt adds the type back in
printAnything([1,2,3,4])
printAnything(['1','2','3'])

