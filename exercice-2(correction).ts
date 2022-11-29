class Chat {
    private nom: string;
    private race: string;
    private age: number;
    private poids: number;

    constructor(nom: string, race: string, age: number, poids: number) {
        this.nom = nom;
        this.race = race;
        this.age = age;
        this.poids = poids;
    }

    displayChat = (...surnoms) => {
        console.log(`${this.nom} ${this.age} ${this.race} ${this.poids}`)
        console.log("Surnom(s) : ")
        console.log(surnoms)
    }
}

const Mimi: Chat = new Chat("Mimi", "Maine Coon", 3, 2.55)
Mimi.displayChat("a", "b")