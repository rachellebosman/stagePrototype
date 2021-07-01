export const fetchData = (url) => {

    /*
    var request = require('request');
    var options = {
        'method': 'GET',
        'url': 'https://raspberry-pi-api.azurewebsites.net/test'
    };

    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
    });

    */

    return fetch(url)
        .then(res => res.json())
        .then(data => data)
        .catch(error => console.log('error', error))

}

