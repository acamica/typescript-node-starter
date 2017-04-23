import {assert} from 'chai';
import 'mocha';
import {add} from './foo';

describe('add:', () => {
    it('add(1 + 1) = 2', () => {
        assert.deepEqual(add(1, 1), 2);
    });
});
