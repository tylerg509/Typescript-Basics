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