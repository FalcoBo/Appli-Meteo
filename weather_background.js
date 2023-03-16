function weather_background(weather_main) {
    if (weather_main == "Clouds") {
        document.querySelector('body').style.background = ("grey");
    } else if (weather_main ==  "Clear") {
        document.querySelector('body').style.background = ("linear-gradient(0.9turn, #3f87a6a1, #3f87a6)");
    }
}