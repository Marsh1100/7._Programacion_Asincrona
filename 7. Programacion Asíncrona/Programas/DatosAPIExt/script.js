async function fetchData() {
    try {
    //   const response = await fetch('https://api.example.com/data');
    //const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=4&lon=72&appid=961ba900fa9486fe75a948a5579b0891");
    
      const data = await response.json();
      return data;
    } catch (error) {
      throw 'Error al obtener los datos';
    }
  }
  async function displayData() {
    try {
      const data = await fetchData();
      const dataContainer = document.getElementById('data-container');
      visualizar(data)
      //dataContainer.innerText = JSON.stringify(data);
      console.log(JSON.stringify(data));
      console.log(data);


    } catch (error) {
      console.error(error);
    }
  }
  displayData();
  
//Elementos del DOM
const $coordenadas = document.getElementById('coordenadas');
const $temp = document.getElementById('temp');
const $pressure = document.getElementById('pressure');
const $humidity = document.getElementById('humidity');


function visualizar(data){
  console.log(data.lenght);

  //Coordenadas
  let coord = `<p>Latitud: ${data.coord.lat}</p>
              <p>Longitud: ${data.coord.lon}</p>`;
  $coordenadas.insertAdjacentHTML('beforeend',coord);

  //Temperatura
} 