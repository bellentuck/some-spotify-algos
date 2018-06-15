/* global describe it */

import { expect } from 'chai';
import { sort } from '../index';

describe('The `sortByStrings` algorithm', () => {
  let s, t;
  it('Takes two arguments, both strings', () => {
    const err = 'This function takes 2 inputs which must both be strings.';
    expect(() => sort('a', 'b')).not.to.throw();
    expect(() => sort('a', 1)).to.throw(err);
    expect(() => sort('a')).to.throw(err);
    expect(() => sort()).to.throw(err);
  });
  it('Sorts the letters in a string `s` by the order they occur in the string `t` (where `t` will not have repetitive characters)', () => {
    s = 'weather';
    t = 'therapyw';
    expect(sort(s, t)).to.equal('theeraw');

    s = 'good';
    t = 'odg';
    expect(sort(s, t)).to.equal('oodg');
  });
});
