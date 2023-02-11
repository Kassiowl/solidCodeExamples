class Vehicle
{
    
    
    constructor(engine,horse_power)
    {
        this.engine = engine
        this.horse_power = horse_power

    }
    start_engine()
    {
        throw new Error("Does not have engine")   
    }

    get_fuel_type()
    {
        throw new Error("Does not have fuel type")
    }

}

class Car extends Vehicle
{

    start_engine()
    {
        return 'Engine Started' 
    }

    get_fuel_type()
    {
        return 'Gasoline'
    }

}

class Pickup extends Vehicle
{
    start_engine()
    {
        return 'Engine Started'
    }
    get_fuel_type()
    {
        return 'Diesel'
    }
}

class Bike extends Vehicle
{
    set_type(type)
    {
        this.type = type
        return this.type + 'set'
    }
    get_type(type)
    {
        return this.type
    }
}

firstVehicle = new Car('2jz', '330')
secondVehicle = new Pickup('Pentastar', '285')

thirdVehicle = new Bike()
thirdVehicle.set_type('OffRoad')
console.log(thirdVehicle.get_type()) //return Offroad
console.log(thirdVehicle.engine) //return undefined
console.log(thirdVehicle.get_fuel_type()) //Exception


console.log(firstVehicle.get_fuel_type()) //Get fuel type normally 
console.log(secondVehicle.get_fuel_type()) //Get fuel type normally

console.log(firstVehicle.start_engine()) //Start Engine normally
console.log(secondVehicle.start_engine()) //Start Engine normally
console.log(thirdVehicle.start_engine()) //Exception
