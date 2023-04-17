const canvas = document.getElementById('boussole');
const ctx = canvas.getContext('2d');

function dessinerBoussole(angle) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dessiner le cercle de la boussole
    ctx.beginPath();
    ctx.arc(canvas.width/2, canvas.height/2, 100, 0, Math.PI*2);
    ctx.strokeStyle = "white";
    ctx.stroke();

    // Dessiner l'aiguille de la boussole
    ctx.beginPath();
    ctx.moveTo(canvas.width/2, canvas.height/2);
    const longueur_aiguille = 70;
    const x = canvas.width/2 + Math.cos(angle) * longueur_aiguille;
    const y = canvas.height/2 + Math.sin(angle) * longueur_aiguille;
    ctx.lineTo(x, y);
    ctx.strokeStyle = "White";
    ctx.lineWidth = 5;
    ctx.stroke();
}

