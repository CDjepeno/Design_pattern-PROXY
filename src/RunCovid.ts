import { Covid } from "./classes/Covid";
import { ProxyCovid } from "./proxy/ProxyCovid";

export class RunCovid {
  static async main() {
    const covid1 = new ProxyCovid(new Covid("Paris"))
    const result1 = await covid1.getData()

    const covid2 = new ProxyCovid(new Covid("Paris"))
    const result2 = await covid2.getData() 
    
    return await covid1.getData()
  }

}