import axios from "../../node_modules/axios/index";
import { Covid } from "../classes/Covid";
import { ICovid } from "../interfaces/ICovid";

let tempData: any = null;

export class ProxyCovid implements ICovid {
  covid: Covid;

  constructor(c: Covid) {
    this.covid = c;
  }

  async getData() {
    if (this.checkAccess()) {
      console.log("first");
      this.covid.getData()
    }
    console.log('covid api');
    return this.covid.getData()
    
  }

  checkAccess(): boolean {
    // console.log('Proxy: vérification de la priorité');
    return true
    
  }
}
