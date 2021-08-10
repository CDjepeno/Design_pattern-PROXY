import axios from "../../node_modules/axios/index";
import { ICovid } from "../interfaces/ICovid";
let tempData: any = null
export class Covid implements ICovid {
  dep: string;

  constructor(c: string) {
    this.dep = c;
  }
  
  async getData() {
    const response: any = await axios.get(`https://coronavirusapi-france.now.sh/LiveDataByDepartement?Departement=${this.dep}`)
    const data: any = await response.data
    tempData = data

    return {
      hospitalises: data.LiveDataByDepartement[0].hospitalises,
      gueris: data.LiveDataByDepartement[0].gueris,
      deces: data.LiveDataByDepartement[0].deces
    }
  }
}
