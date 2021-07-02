import { StartWithVowelPipe } from './start-with-vowel.pipe';

describe('StartWithVowelPipe', () => {
    it('create an instance', () => {
        const pipe = new StartWithVowelPipe();
        expect(pipe).toBeTruthy();
    });
});
