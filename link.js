const cssFolder = './assets/css/';
const cssfiles = ['style.css', 'burger.css'];

function linkcss(cssFolder,cssfiles) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = cssFolder + cssfiles[i];
    document.getElementsByTagName('head')[0].appendChild(link);
}

linkcss(cssFolder,cssfiles)