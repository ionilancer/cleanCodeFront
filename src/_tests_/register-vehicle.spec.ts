import { RegisterVechicle } from '../controllers/register-vehicle'

describe('RegisterVechicle', () => {
  test('is the name does not exist return 400 ', () => {
    const sut = new RegisterVechicle()
    const httpRequest = {
      body: {
        // name: 'Nissan',
        model: 'DXT',
        year: 2020
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('error in the: name'))
  })
  test('is the model does not exist return 400 ', () => {
    const sut = new RegisterVechicle()
    const httpRequest = {
      body: {
        name: 'Nissan',
        // model: 'DXT',
        year: 2020
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('error in the: model'))
  })
})
