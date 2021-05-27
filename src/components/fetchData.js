export const fetchData = (url) => {

    return fetch(url)
    .then(res => res.json())
    //.then(data => console.log(data))
    .then(data => data) 
    .catch(error => console.log('error', error))

}

