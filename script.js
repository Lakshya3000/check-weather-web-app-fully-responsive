const api_key = '2728cfbce46f4e34af664031240703';


async function fetchData(city) {
    if (city) {
        
    
        let url = `https://api.weatherapi.com/v1/current.json?key=2728cfbce46f4e34af664031240703&q=${city}`;
        let response = await fetch(url);
        let date = await response.json();

        let htmldata = document.getElementById('maindata')
        htmldata.innerHTML = `  <div style="background-image: url(${date.current.condition.icon});" id="temp">
                                <h1>${date.location.name}</h1>
                                <h1>${date.location.region}</h1>
                                
                                <h2>${date.location.country}</h2>
                                 <div id="temp-val">${date.current.temp_c}°C</div>
                                 <div id="texts">${date.current.condition.text}</div>
                                
                            </div>
                            <div class="other">
                                <div id="windS">Wind Speed = ${date.current.wind_kph} km/hr</div>
                                <div id="windD">Wind Direction = ${date.current.wind_dir} </div>
                                <div id="pressure">Pressure = ${date.current.pressure_mb} mb</div>
                                <div id="humidity">Humidity = ${date.current.humidity} </div>
                                <div id="cloud">Cloud = ${date.current.cloud} </div>
                                <div id="visibility">Visibility = ${date.current.vis_km} km</div>
                                <div id="uv">UV = ${date.current.uv} </div>
                                <div style="font-size: 20px; color: black;">By- Lakshya Pratap singh</div>
                            </div>`
                        }
}


let searchText = document.getElementById('form-search')
searchText.addEventListener("submit", async (e) => {
    e.preventDefault()
    let searchInput = await inputs.value;
    fetchData(searchInput);
})