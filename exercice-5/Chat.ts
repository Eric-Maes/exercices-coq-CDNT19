import { Mammifere } from "./Mammifere";

class Chat extends Mammifere implements Terrestre {
  respirerHorsDeLeau(): void {
    console.log("Je respire hors de l'eau");
  }
  marcher(): void {
    console.log("Je marche");
  }
}
