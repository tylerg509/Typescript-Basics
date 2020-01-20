
//class name should be capitalized
//public is default
class Vehicle1 {
    //protected can only be called by child class
    protected honk():void{
        console.log('beep')
    }
    public soundAlarm(): void{
        console.log('beep beep beep')
    }
    public turn():void{
        console.log('turning')
    }
}

//use extends to inherit from vehicle
//base inheritance in TS!
class Car extends Vehicle1 {   
      
    //override drive method in vehicle = polymorphism!
    private drive(): void{
        console.log('vroom')
    }

    //overriding example
    public turn():void{
        console.log('cannot turn sorry')
    }

    startDrivingProcess(): void {
        this.drive()
        //call method on base class
        this.honk()
    }
}

const vehicle = new Vehicle1();
// vehicle.drive()
vehicle.soundAlarm()
vehicle.turn()

const car = new Car();
car.startDrivingProcess()
car.turn()





