import { expect } from 'chai';
import 'mocha';
import { Greeter } from '../src/index';

describe('First test', () => {
    it('should return prop', () => {
        // Given
        const name = 'John';

        // When
        const result = Greeter(name);

        // Then
        expect(result).to.equal(`Hello ${name}`);
    });
});