function updateCompass(degrees) {
    var arrow = document.querySelector('.arrow');
    arrow.style.transform = 'rotate(' + degrees + 'deg)';
  }
  

  // Utilisation de l'API de capteurs du navigateur pour obtenir l'orientation du dispositif
  if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function(event) {
      // L'orientation du dispositif est donnée en degrés
      var alpha = event.alpha;
      updateCompass(alpha);
    }, false);
  } else {
    // Si le navigateur ne prend pas en charge l'API de capteurs, nous pouvons toujours fournir une valeur de test
    updateCompass(45);
  }