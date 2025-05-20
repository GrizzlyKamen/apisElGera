window.onload = (e) =>{
    console.log('JS is in tha House!!');

    const btnSearch = document.querySelector("#search-btn")
    btnSearch.addEventListener('click', e => {
        const inputCountry = document.querySelector("#country-input")
        // const country = inputCountry.value
        console.log('se guardó tu país favorito');
        doSearch(inputCountry.value);
        
    });
    // Iniciamos el consumo del servicio
    const doSearch = ((country) => {
        fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then((response) => {
            console.log('Respuesta recibida: ', response);
            return response.json();
        })
        .then((data) =>{
            console.log('datos de la respuesta: ', data);
        })
        .catch((error) => {
            console.log('hubo un error: ', error);
            
        })
    }) 
};


