const chat = {
    nom: "Mimi",
    race: "Maine Coon",
    age: 3,
    poids: 2.55
}

const displayChat = (...surnoms) => {
    console.log(`${chat.nom} ${chat.age} ${chat.race} ${chat.poids}`);
    console.log("Surnom(s) : ")
    // for (let surnom of surnoms) {
        console.log(surnoms);
    // }
}
displayChat("Mimoune", "Garfield", "Boule de poil")