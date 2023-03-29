function weather_background(weather_main, weather_desc) {   
    // Variable changement du background
    // Ciel nuageux
    const background_video = document.getElementById('background_video');
    if ((weather_main = "Clouds") && (weather_desc = "broken clouds")) {
        background_video.src = "./assets/video/clouds.mp4";
    // Ciel clear
    } else if (weather_main =  "Clear") {
        background_video.src = "./assets/video/ciel.mp4";
    // Pluie
    } else if (weather_main =  "Rainy") {
        background_video.src = "./assets/video/Clouds.mp4";
    } else {
        background_video.src = "";
    }
}