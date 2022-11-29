import { Mammifere } from "./Mammifere";

class Dauphin extends Mammifere implements Aquatique {
  respirerSousLeau(): void {
    console.log("Je respire sous l'eau");
  }
  nager() {
    console.log("Je nage");
  }
}
