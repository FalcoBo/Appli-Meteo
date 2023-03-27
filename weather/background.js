function weather_background(weather_main) {   
    // Variable changement du background
    // Ciel nuageux
    var background_video = document.getElementById('background_video');
    if (weather_main = "Clouds") {
        background_video.src = "./assets/video/Clouds.mp4";
    // Ciel clear
    } else if (weather_main =  "Clear") {
        background_video.src = "./assets/video/Clouds.mp4";
    // Pluie
    } else if (weather_main =  "Rainy") {
        background_video.src = "./assets/video/Clouds.mp4";
    } else {
        background_video.src = "./assets/video/Clouds.mp4";
    }
}