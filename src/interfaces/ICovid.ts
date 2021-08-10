export interface ICovid {

    getData(): Promise<{
      hospitalises: string,
      gueris: number,
      deces: number
    }> 
}