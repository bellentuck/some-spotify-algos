/* global describe it */

import { expect } from 'chai';
import { decode } from '../index';

describe('The `decodeStrings` algorithm. The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. (Note: k is guaranteed to be a positive integer.)', () => {
  let s;
  it('Takes a single argument, a string');
  it('Given an encoded string, return its corresponding decoded string', () => {
    s = '4[ab]';
    expect(decode(s)).to.equal('abababab');

    s = '2[b3[a]]';
    expect(decode(s)).to.equal('baaabaaa');
  });
});