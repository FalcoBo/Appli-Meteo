const listville = [];
var listlimite = listville.slice(0, 5);

const addbtn = document.getElementById('add-btn');
addbtn.addEventListener('click', function() {
    var ville = localStorage.getItem("ville").value;
    listlimite.push(ville);
    if (listlimite.length > 5) {
        listlimite.shift(-1);
        alert('La liste des villes est pleine \n Veuillez en supprimer une');
    }
    console.log(listlimite);
});