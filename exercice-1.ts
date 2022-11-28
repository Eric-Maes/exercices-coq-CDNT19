/**
 * Mon objet chat
 */
interface Chat {
  // Attributs
  nom: string;
  race: string;
  age: number;
  poids: number;
}
let chat = {
  nom: "Zack",
  race: "Maine Coon",
  age: 3,
  poids: 2.55,
}

/**
 * Affichage des informations
 * @param {Chat} chat 
 * @param {String[]} surnoms 
 * @returns {String}
 */
function chatDetails(chat: Chat, surnoms: string[]): string {
  return `Informations concernant mon chat:\n-Nom: ${chat.nom}\n-Race: ${chat.race}\n-Âge: ${chat.age} ans\n-Poids: ${chat.poids} Kg\n\n-Surnoms: ${surnoms}\n`;
}

/**
 * Log dans la console de la fonction chatDetails() accompagné de la liste des surnoms
 */
console.log(chatDetails(chat,["Zackinou", "Sozack", "Garfield (parce que c'est un gros sac)"]));
