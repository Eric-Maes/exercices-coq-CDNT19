class Chat {
  nom: string;
  race: string;
  age: number;
  poid: number;

  constructor(nom: string, race: string, age: number, poid: number) {
    this.nom = "Tchoupi";
    this.race = "Maine Coon";
    this.age = 3;
    this.poid = 2.5;
  }
}

function information(chat: Chat, surnom: string[]) {
  for (let v of surnom) {
    return `informations sur les chats :
    surnom: ${v},
    nom : ${chat.nom},
    race : ${chat.race},
    age : ${chat.age},
    poid : ${chat.poid} 
    `;
  }
  console.log(Chat,"Choupi","Pipi");
}
