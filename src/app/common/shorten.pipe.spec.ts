import { ShortenPipe } from './shorten.pipe';

describe('ShortenPipe', () => {
  let pipe: ShortenPipe;

  beforeAll(() => {
    pipe = new ShortenPipe();
  });

  it('creates an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should have a default length of 38', () => {
    expect(pipe.defaultLength).toBe(38);
  });

  it('shortens a string longer than the default and add ...', () => {
    const longString = 'Hello my name is Michael and this string is hopefully greater than 38 characters';
    const transformedString = pipe.transform(longString);
    expect(pipe.transform(longString).length).toBe(41);
    expect(transformedString.substr(transformedString.length - 3)).toEqual('...');
  });

  it('does not add ... to strings less than 41 chars', () => {
    const shortString = 'Hi!';
    expect(pipe.transform(shortString)).toEqual(shortString);

  });

});
