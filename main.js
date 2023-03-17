// import { weather_background } from './weather/background.js'

// Création de la fonction qui permettra de récupérer l'API
// et de faire afficher ses données dans l'appli 


function loop_api() {
    // Input utilisateur
    //  var user_input = document.getElementById('user_input').textContent;
     var input_ville = "";
     var input_default = "Paris";
     input_ville = input_default; 

    DayAPI(input_ville);
}

loop_api();
