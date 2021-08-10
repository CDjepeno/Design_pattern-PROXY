import { CovidModel } from './utils';
import { RunCovid } from '../src/RunCovid';

describe('Run covie', () => {
  it('run covid', async() => {
     await RunCovid.main().then((res: any) => {   
      expect(res).toEqual(CovidModel)
     }) 
  })
})
