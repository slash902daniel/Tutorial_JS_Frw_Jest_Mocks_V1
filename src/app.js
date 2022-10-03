const axios = require('axios');

function getUserData() {
    axios.get('https://swapi.dev/api/planets/3')
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
}

getUserData();

module.exports = {getUserData}