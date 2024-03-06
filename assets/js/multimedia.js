export default class Multimedia {
    constructor(url) {
        this._url = url;
    }
    // métodos “getters” 
    get url() {
        return this._url;
    }
    // métodos “setters” 
    set url(url) {
        return this._url = url;
    }

    setInicio() {
        return "Este método es para realizar un cambio en la URL del video";
    }
}