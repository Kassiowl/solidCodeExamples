class EngineVehicles
{

    constructor(engine,horse_power)
    {
        this.engine = engine
        this.horse_power = horse_power

    }
    start_engine()
    {
        throw new Error("Engine not implemented")   
    }

    get_fuel_type()
    {
        throw new Error("Fuel not implemented")
    }



}


class NonEngineVehicles
{
    constructor(name, vehicle_type)
    {
        this.name = name
        this.vehicle_type = vehicle_type
    }

    get_name(){ return this.name    }
    get_number_of_wheels(){ return this.number_of_wheels    }
    get_vehicle_type(){ return this.vehicle_type    }
    get_number_of_wheels(){     throw new Error("Number of wheels not implemented!")  }
}


class Car extends EngineVehicles
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

class Pickup extends EngineVehicles
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


class Bike extends NonEngineVehicles
{
    get_number_of_wheels(){     return 2    }
}

class Skateboard extends NonEngineVehicles
{
    get_number_of_wheels(){     return 3    }
}


firstVehicle = new Car('2jz', '330')
secondVehicle = new Car('Pentastar', '285')

thirdVehicle = new Skateboard('Klunker 3000','2', 'offroad')

fourthVehicle = new Skateboard('Wood light', '4', 'city')

console.log(thirdVehicle.get_vehicle_type()) //return Offroad



console.log(firstVehicle.get_fuel_type()) //Get fuel type normally 
console.log(secondVehicle.get_fuel_type()) //Get fuel type normally

console.log(firstVehicle.start_engine()) //Start Engine normally
console.log(secondVehicle.start_engine()) //Start Engine normally



