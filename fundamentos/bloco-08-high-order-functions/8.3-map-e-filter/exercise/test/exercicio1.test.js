import { formatedBookNames } from '../exercise1';
import * as matchers from 'jest-extended';
expect.extend(matchers);

describe('Exercicio 1', () => {
  it('formatedBookNames é uma function', () => {
    expect(typeof formatedBookNames).toBe('function');
  });
  it('O retorno é um array', () => {
    expect(Array.isArray(formatedBookNames())).toBeTruthy();
  })
});

describe('Testando utilização do jest-extended', () => {
  it('jest-extended', () => {
    expect('adsonreis').toEndWith('reis');
  });
});
