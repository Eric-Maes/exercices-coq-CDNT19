class newChat {
    private _nom: string;
    private _race: string;
    private _age: number;
    private _poids: number;

    constructor(nom: string, race: string, age: number, poids: number) {
        this._nom = nom;
        this._race = race;
        this._age = age;
        this._poids = poids;
    }

    get nom(): string {
        return this._nom;
    }
    get race(): string {
        return this._race;
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
    set race(race: string) {
        this._race = race;
    }
    set age(age: number) {
        this._age = age;
    }
    set poids(poids: number) {
        this._poids = poids;
    }

    displayChat = (...surnoms) => {
        // console.log(`${this.nom} ${this.age} ${this.race} ${this.poids}`)
        console.log("Surnom(s) : ")
        console.log(surnoms)
    }
}

// const Choupi: newChat = new newChat("Choupi", "Maine Coon", 3, 2.55)
// Choupi.displayChat("a", "b")
const monChat = new newChat("Tchoupi", "Maine Coon", 3, 2.55);
console.log(monChat.nom, monChat.race, monChat.age, monChat.poids)
monChat.displayChat("Surnom 1", "Surnom 2")