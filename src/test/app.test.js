const axios = require('axios');

jest.mock('axios');

describe("Mock api calls", () => {

    test("Mocking external endpoint in axios", () => {
        
        //Arrange Mock
        const mockedResponse = {data: {username:"test-user", address: "India" }};
        axios.get.mockResolvedValue(mockedResponse);
        
        //Declare app
        const app = require('../app');

        //act
        app.getUserData();

        //Asserts
        expect(axios.get).toHaveBeenCalled();
        expect(axios.get).toHaveBeenCalledWith('https://swapi.dev/api/planets/3');
    })

 })