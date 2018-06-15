/* global describe it */

import { expect } from 'chai';
import { sort } from '../index';

describe('The `sortByStrings` algorithm', () => {
  let s, t;
  it('Takes two arguments, both strings');
  it('Sorts the letters in a string `s` by the order they occur in the string `t` (where `t` will not have repetitive characters)', () => {
    s = 'weather';
    t = 'therapyw';
    expect(sort(s, t)).to.equal('theeraw');

    s = 'good';
    t = 'odg';
    expect(sort(s, t)).to.equal('oodg');
  });
});
