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
    constructor(name, number_of_wheels, vehicle_type)
    {
        this.name = name
        this.number_of_wheels = number_of_wheels
        this.vehicle_type = vehicle_type
    }

    get_name(){ return this.name    }
    get_number_of_wheels(){ return this.number_of_wheels    }
    get_vehicle_type(){ return this.vehicle_type    }
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

