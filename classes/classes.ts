
//class name should be capitalized
//public is default
class Vehicle {
    ////if you delcare private as public it must be public in child classes if you are overriding in the child class
    // private drive(): void{
    //     console.log('chugga chugga')
    // }
    public honk():void{
        console.log('beep')
    }
}

//use extends to inherit from vehicle
//base inheritance in TS!
class Car extends Vehicle {     
    //override drive method in vehicle = polymorphism!
    private drive(): void{
        console.log('vroom')
    }

    startDrivingProcess(): void {
        this.drive()
    }
}

const vehicle = new Vehicle();
// vehicle.drive()
vehicle.honk()


const car = new Car();
car.startDrivingProcess()
car.honk()





