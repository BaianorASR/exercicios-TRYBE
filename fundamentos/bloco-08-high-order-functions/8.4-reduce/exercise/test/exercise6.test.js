import { studentAverage } from '../test/exercise6.test';

it('array no com obj no formato { name: nome do aluno, average: media das notas }', () => {
  expect(studentAverage()).toEqual(
    { name: 'Pedro Henrique', average: 7.8 },
    { name: 'Miguel', average: 9.2 },
    { name: 'Maria Clara', average: 8.8 },
  )
})