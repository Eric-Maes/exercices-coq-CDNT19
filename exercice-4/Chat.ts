abstract class Chat {
    private _nom: string;
    private _age: number;
    private _poids: number;

    constructor(nom: string, age: number, poids: number) {
        this._nom = nom;
        this._age = age;
        this._poids = poids;
    }

    get nom(): string {
        return this._nom;
    }
    get age(): number {
        return this._age;
    }
    get poids(): number {
        return this._poids;
    }

    set nom(nom: string) {
        this._nom = nom;
    }
    set age(age: number) {
        this._age = age;
    }
    set poids(poids: number) {
        this._poids = poids;
    }

    displayChat() {
        return `${this.nom},${this.age},${this.poids} `
    }
}