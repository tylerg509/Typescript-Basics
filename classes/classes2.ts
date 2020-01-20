
//class name should be capitalized
//public is default
class Vehicle2 {
    constructor(public color: string){

    }

    //protected can only be called by child class
    protected honk():void{
        console.log('beep')
    }

}

//use extends to inherit from vehicle
//base inheritance in TS!
class Car2 extends Vehicle2 {   
      
    //override drive method in vehicle = polymorphism!
    private drive(): void{
        console.log('vroom')
    }

    startDrivingProcess(): void {
        this.drive()
        //call method on base class
        this.honk()
    }
}

const vehicle2 = new Vehicle2('orange');
console.log(vehicle2.color)


//when we create instance of car the consturctor in vechincle gets called so we must pass color
const car2 = new Car2('red')
console.log(car2.color)