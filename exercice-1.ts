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
let monChat = {
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
function chatDetails(monChat: Chat, surnoms: string[]): string {
  return `Informations concernant mon chat:\n-Nom: ${monChat.nom}\n-Race: ${monChat.race}\n-Âge: ${monChat.age} ans\n-Poids: ${monChat.poids} Kg\n\n-Surnoms: ${surnoms}\n`;
}

/**
 * Log dans la console de la fonction chatDetails() accompagné de la liste des surnoms
 */
console.log(chatDetails(monChat,["Zackinou", "Sozack", "Garfield (parce que c'est un gros sac)"]));