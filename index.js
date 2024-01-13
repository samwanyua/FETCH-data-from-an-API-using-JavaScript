/**
 * Fetch - function used for making HTTP requests to fetch resources
 * Simplifies asynchronous data fetching
 * 
 * syntax: fetch(url. {options: GET, POST, PUT,PATCH, DELETE})
 */
function fetchData() {

    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();


    fetch(`https://pokeapi.co/api/v2/pokemon/pikachu/${pokemonName}`)
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json()
    })
    .then(data => {
        const pImage = data.sprites.front_default;
        const imageElement = document.getElementById('pImage');

        imageElement.src = pImage;
        imageElement.style.display = 'block';
    })
    .catch(error => console.error(error));
}
fetchData()




