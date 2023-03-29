// import { weather_background } from './weather/background.js'

// Création de la fonction qui permettra de récupérer l'API
// et de faire afficher ses données dans l'appli 

    // Input utilisateur
    //  var user_input = document.getElementById('user_input').textContent;
    var ville = "";
    var input_default = "london";
    ville = input_default; 

    // Récupération de l'API météo avec la méthode fetch()
    // https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=eb3e55ca0093756f2541d5ad27c5021c&units=metric
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + ville + "&appid=eb3e55ca0093756f2541d5ad27c5021c&units=metric")
    .then(Response => Response.json())
    .then(data => {
        // Key 
        var request_key = data.cod;
        if (request_key === 200 ) {

        // Récupération des données de l'API
            // Coordonnées de la ville
            const coord = data.coord;
                const lon = coord.lon;
                const lat = coord.lat;

            // Weather ..
            const WeatherData = data.weather[0];
                weather_main = WeatherData.main;
                weather_desc = WeatherData.description;

            weather_background(weather_main,weather_desc);

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
                const wind_gust = wind.gust;
            // Données liées aux nuages 
            const clouds = data.clouds;
                const all_clouds = clouds.all;

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
            
            // OPTIMISATION
            // Faire une boucle pour simplifier et réduire la taille du code ?
            // var tab = [] 
            // function loop_api(donnees_1, donnees_2) {
            //     while (tab.length)
            //     document.getElementById('donnees_1').innerHTML = donnees_2;
            // }


            // Name
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
            document.getElementById('wind_speed').innerHTML = wind_speed;
            document.getElementById('wind_deg').innerHTML = wind_deg;
            document.getElementById('wind_gust').innerHTML = wind_gust;

            // CLouds
            document.getElementById('clouds').innerHTML = all_clouds;

            // Générales
            document.getElementById('sys_country').innerHTML = sys_country;
            document.getElementById('sys_sunrise').innerHTML = sys_sunrise;
            document.getElementById('sys_sunset').innerHTML = sys_sunset;

        } else {
            console.log("La récupération de l'API n'a pas été effectuée")
    }
    })
    .catch(error => console.log(error));