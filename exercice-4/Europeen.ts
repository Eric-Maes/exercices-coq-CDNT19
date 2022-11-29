class Europeen extends Chat {
    private _surnoms: string[];
    private _origin: string;

    constructor(nom: string, age: number, poids: number, surnoms: string[], origin: string) {
        super(nom,age,poids)
        this._surnoms = surnoms;
        this._origin = "Europe";
    }

    get surnoms() {
        return this._surnoms;
    }
    set surnoms(surnoms: string[]) {
        this._surnoms = surnoms;
    }
    get origin() {
        return this._origin;
    }
}

const monChat = new Europeen("Mimi", 3, 2.55, ["Tchoupi", "Tchoutchou"],"Europe");
console.log(monChat.nom, monChat.age, monChat.poids, monChat.surnoms, monChat.origin);


