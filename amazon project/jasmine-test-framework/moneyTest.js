import { moneyFormat } from "../data/utils/money.js";

describe('test suite: moneyFormat', () => {
  it('converts cents into dollars', () => {
    expect(moneyFormat(2095)).toEqual("20.95");
  });
  it('works with 0', () => {
    expect(moneyFormat(0)).toEqual("0.00");
  });
  it('rounds up to the nearest cents', () => {
    expect(moneyFormat(2000.5)).toEqual("20.01");
  });
});