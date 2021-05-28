// wanneer is iets een component?
// bij code wil je graag documentatie, zoek eens op jsDocs
export const fetchData = (url) => {

    return (
      fetch(url)
        .then((res) => res.json())
        //.then(data => console.log(data))
        .then((data) => data)
        // onbtbreekt error handling https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#checking_that_the_fetch_was_successful
        .catch((error) => console.log("error", error))
    );

}

