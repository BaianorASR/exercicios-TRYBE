import { averageAge } from '../src/exercise3';

it('calcula media de idade dos autores no lançamento', () =>{
  expect(averageAge()).toBe(43)
})