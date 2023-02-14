import { describe, it, expect } from 'vitest';
import { sum } from '../src/index';

describe('Test sum', () => {
  it('Should return the correct sum', () => {
    const result = sum(1, 1);
    expect(result).equal(2);
  });
});
