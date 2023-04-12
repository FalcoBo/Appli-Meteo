// Function pour afficher la carte en fonction de la latitude et de la longitude

// "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d235384.86066145793!2d4.090508578972554!3d46.32367621206387!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f3e6df8452b721%3A0x409ce34b30ed730!2s71600%20Saint-Yan!5e0!3m2!1sfr!2sfr!4v1681317517996!5m2!1sfr!2sfr"

function Map(latitude, longitude) {
    const map = document.getElementById('map');
    map.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d235384.86066145793!2d" + longitude + "!3d" + latitude + "!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f3e6df8452b721%3A0x409ce34b30ed730!2s71600%20Saint-Yan!5e0!3m2!1sfr!2sfr!4v1681317517996!5m2!1sfr!2sfr";
}