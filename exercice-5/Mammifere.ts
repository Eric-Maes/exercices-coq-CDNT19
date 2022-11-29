export abstract class Mammifere implements Animal {
  _nom: string;
  _poids: number;
  _dateNaissance: Date;

  display(): void {
    console.log("Je suis un Mammifère !");
  }
}
