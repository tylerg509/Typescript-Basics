
//class name should be capitalized
//public is default
class Vehicle2 {
    // //use constructor instead of initializing the color property
    // color:string;

    // //color: string = 'red'; //when we say red we initalize the color property

    // constructor(color: string){
    //     this.color = color
    // }

    //instead of the above we can use an access modifier on color 
    //could use private or protected
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






