console.log ('hello');

let render = document.getElementById('pokemon');

fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
.then(response => response.json())
.then(data => {

let img = createElement('img');
img.src = data.sprites.front_shiny;

let p = document.createElement('p');
p.innerHTML = data.name;

render.appendChild(img);
render.appendChild(p);

});

// Fetch => mdn
//Récupérer 1 pokemon
//GET
//Adresse => url > endpoint

//Pokeapi

//Injester un pokemenon dans la balise #pokemon

//JSON.parse (response)