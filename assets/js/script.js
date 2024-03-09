import Reproductor from './reproductor.js';

export const moduloManipulaDom = (() => {
    const setAttributeIframe = (url, id) => {
        document.getElementById(id).setAttribute("src", url);
    };

    return {
        callPrivateFunction: (url, id) => setAttributeIframe(url, id),
    };

})();

(() => {
    // Música
    let idMus = 'musica';
    let urlMus = 'https://www.youtube.com/embed/XPrUdQNPD60?si=kiMvWB5N4AsQ3BKl&amp';
    let musica1 = new Reproductor(urlMus, idMus);
    updateUrlbyId(musica1, urlMus, idMus);

    // Película
    let idPel = 'peliculas';
    let urlPel = 'https://www.youtube.com/embed/3KPIgP7PBmg?si=c5WWlVDu8IZj52Fo&amp';
    let pelicula1 = new Reproductor(urlPel, idPel);
    updateUrlbyId(pelicula1, urlPel, idPel);

    // Serie
    let idSerie = 'series';
    let urlSerie = 'https://www.youtube.com/embed/uqsvyj6lnnE?si=1fM9pyaYiVqhJ4H5&amp';
    let serie1 = new Reproductor(urlSerie, idSerie);
    updateUrlbyId(serie1, urlSerie, idSerie);
})();


function updateUrlbyId(value, url, id) {
    let tiempo = 80;
    value.playMultimedia(url, id);
    value.setInicio(tiempo);
}