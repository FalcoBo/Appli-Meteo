// Création de la fonction qui permettra de récupérer l'API
// et de faire afficher ses données dans l'appli 


// Choix de la ville pour faire afficher la météo
var user_input = prompt('input_ville');
if (user_input == false) {
    var input_ville = "Paris";
} else {
    input_ville = user_input;
}

    // Récupération de l'API météo avec la méthode fetch()
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + input_ville + "&appid=eb3e55ca0093756f2541d5ad27c5021c&units=metric")
    .then(Response => Response.json())
    .then(data => {
        // Key 
        var request_key = data.cod;
        if (request_key === 200 ) {

            // Coordonnées de la ville
            const coord = data.coord;
                const lon = coord.lon;
                const lat = coord.lat;

            // Météo
            const weather = data.weather;
                const weather_id = weather.id;
                const weather_main = weather.main;
                const weather_desc = weather.description;
                const weather_icon = weather.icon;

            const base = data.base;

            // Données liées a la température temp, feel ...
            const main = data.main;
                const temperature = main.temp;
                const feels = main.feels_like;
                const temp_min = main.temp_min;
                const temp_max = main.temp_max;
                const pressure = main.pressure;
                const humidity = main.humidity;

            const visibility = data.visibility;

            // Données lier au vent
            const wind = data.wind;
                const wind_speed = wind.wind_speed;
                const wind_deg = wind.deg;
                const gust = wind.gust;
            // Données liées aux nuages 
            const clouds = data.clouds;
                const all = clouds.all;

            const dt = data.dt;

            //Données Générales 
            const sys = data.sys;
                const sys_id = sys.id;
                const sys_type = sys.type;
                const sys_country = sys.country;
                const sys_sunrise = sys.sunrise;
                const sys_sunset = sys.sunset;

            const timezone = data.timezone;

            // Nom de la ville et son id
            const name_id = data.id;
            const name = data.name;

            // Mise en place des injection HTML
            // Faire une boucle pour simplifier et réduire la taille du code ?
            // for (donnée_1, ) {
            //     document.getElementById('ville').innerHTML = name;
            // }

            document.getElementById('ville').innerHTML = name;

            // Coord
            document.getElementById('lon').innerHTML = lon;
            document.getElementById('lat').innerHTML = lat;

            // Témpératures
            document.getElementById('temp').innerHTML = temperature;
            document.getElementById('feels').innerHTML = feels;
            document.getElementById('temp_min').innerHTML = temp_min;
            document.getElementById('temp_max').innerHTML = temp_max;
            
            // Main - autre
            document.getElementById('pressure').innerHTML = pressure;
            document.getElementById('humidity').innerHTML = humidity;

            // Wind
            document.getElementById('pressure').innerHTML = pressure;
            document.getElementById('humidity').innerHTML = humidity;


        } else {
            console.log("La clé de requette n'est pas")
    }
    })
    .catch(error => console.log(error));