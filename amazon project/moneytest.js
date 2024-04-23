import { moneyFormat } from "./data/utils/money.js";

console.log('test suite: moneyFormat');

console.log('converts cents into dollars');
if (moneyFormat(2095) === "20.95") {
  console.log('passed');
} else {
  console.log('failed');
};

console.log('works with 0');
if (moneyFormat(0) === "0.00") {
  console.log('passed');
} else {
  console.log('failed');
};

console.log('rounds up to the nearest cents');
if (moneyFormat(2000.5) === "20.01") {
  console.log('passed');
} else {
  console.log('failed');
};
