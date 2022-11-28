// class Chat {
//   nom: string;
//   race: string;
//   age: number;
//   poids: number;
var chat = {
    nom: "Zack",
    race: "Maine Coon",
    age: 3,
    poids: 2.55
};
function chatDetails(chat, surnoms) {
    return "Informations concernant mon chat:\n-Nom: ".concat(chat.nom, "\n-Race: ").concat(chat.race, "\n-\u00C2ge: ").concat(chat.age, " ans\n-Poids: ").concat(chat.poids, " Kg\n\n-Surnoms: ").concat(surnoms, "\n");
}
console.log(chatDetails(chat, ["Zackinou", "Sozack", "Garfield (parce que c'est un gros sac)"]));
