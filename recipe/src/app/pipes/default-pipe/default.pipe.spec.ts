import { DefaultPipe } from './default.pipe';

describe('Testing Default Pipe', () => {
    let pipe: DefaultPipe;
    beforeEach(() => {
        pipe = new DefaultPipe();
    });
    it('deafult pipe - value should be first param if we pass', () => {
        expect(pipe.transform('value123', '')).toBe('value123');
    });

    it('deafult pipe - value should be second param if we dont pass 1st param', () => {
        expect(pipe.transform('', './defultUrl')).toBe('./defultUrl');
    });
});
