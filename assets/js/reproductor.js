import Multimedia from './multimedia.js';
import {moduloManipulaDom} from "./script.js";

export default class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this._id = id;
    }

    //método get
    get id(){
        return this._id;
    }

    playMultimedia(){
        moduloManipulaDom.setAttributeIframe(this.url, this.id);
    };
    setInicio(tiempo) {
       return document.getElementById(`${this.id}`).setAttribute("src", `${this.url};start=${tiempo}`); 
    }
}
