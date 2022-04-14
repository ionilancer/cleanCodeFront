import { VehicleModel } from '../models/vehicle-model'

describe('Classes', () => {
  it('Class vehicleModel', () => {
    const vehicleModel = new VehicleModel({
      name: 'Nissan',
      model: 'DTX',
      year: 2022,
      price: 25,
      inventory: true
    })
    expect(vehicleModel.getName()).toEqual('Nissan')
    expect(vehicleModel.getModel()).toEqual('DTX')
    expect(vehicleModel.getYear()).toEqual(2022)
    expect(vehicleModel.getPrice()).toEqual(25)
    expect(vehicleModel.getInventory()).toEqual(true)
  })
})
