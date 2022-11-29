class Europeen extends Chat {

    private _surnoms: string[];
    private _origin: string = "Europe";

    constructor(nom: string, age: number, poids: number, surnoms: string[]) {
        super(nom,age,poids);
        this._surnoms = surnoms;
    }

    get surnoms() {
        return this._surnoms;
    }
    set surnoms(surnoms: string[]) {
        this._surnoms = surnoms
    }
    set surnom(surnom: string) {
        this._surnoms.push(surnom)
    }
}