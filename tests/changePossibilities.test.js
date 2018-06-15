/* global describe it */

import { expect } from 'chai';
import { change } from '../index';

describe('The `changePossibilities` algorithm. (Your quirky boss collects rare, old coins. They found out you\'re a programmer and asked you to solve something they\'ve been wondering for a long time. #inspiringTangents)', () => {
  let amount, denominations;
  it('Takes two arguments, a number and an array of numbers', () => {
    const err = 'This function takes 2 inputs which must be a number and an array of numbers, respectively.';
    expect(() => change(1, [2, 3, 4])).not.to.throw();
    expect(() => change('a', [2, 3, 4])).to.throw(err);
    expect(() => change(1, [2, 3, 'a'])).to.throw(err);
    expect(() => change(1)).to.throw(err);
    expect(() => change()).to.throw(err);
  });
  it.only('Given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations', () => {
    amount = 4;  // (4¢)
    denominations = [1, 2, 3];  // (1¢, 2¢ and 3¢)
    expect(change(amount, denominations)).to.equal(4);
  });
});
