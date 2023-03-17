// Function qui permet de récupérer une autre API pour pouvoir afficher
// les prévisions météo

function API_prevision() {
    fetch("")
    .then(Response => Response.json())
    .then(data => {
        // Key 
        var request_key = data.cod;
        if (request_key === 200 ) {
            // Récupération des données de l'API des prévisions


        } else {
            console.log("La récupération de l'API n'a pas été effectuée")
        }
    })
    .catch(error => console.log(error));
}