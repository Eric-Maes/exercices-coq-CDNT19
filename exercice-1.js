var Chat = /** @class */ (function () {
    function Chat(nom, race, age, poid) {
        this.nom = "Tchoupi";
        this.race = "Maine Coon";
        this.age = 3;
        this.poid = 2.5;
    }
    return Chat;
}());
function information(chat, surnom) {
    for (var _i = 0, surnom_1 = surnom; _i < surnom_1.length; _i++) {
        var v = surnom_1[_i];
        return "informations sur les chats :\n    surnom: ".concat(v, ",\n    nom : ").concat(chat.nom, ",\n    race : ").concat(chat.race, ",\n    age : ").concat(chat.age, ",\n    poid : ").concat(chat.poid, " \n    ");
    }
    console.log(Chat, "Choupi", "Pipi");
}
