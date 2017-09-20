import { ShortenPipe } from './shorten.pipe';

describe('ShortenPipe', () => {
  const pipe = new ShortenPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should cut after n chars', () => {
    expect(pipe.transform('Lorem ipsum', 5, '')).toBe('Lorem');
  });

  it('should add the suffix', () => {
    const transformed = pipe.transform('Lorem ipsum', 5, '---');
    expect(transformed.substring(transformed.length - 3, transformed.length))
      .toBe('---');
  });

  it('should default cut after 10 chars with ... suffix', () => {
    expect(pipe.transform('Lorem ipsum')).toBe('Lorem ipsu...');
  });

  it('should cut and add suffix', () => {
    expect(pipe.transform('Lorem ipsum', 5, '---')).toBe('Lorem---');
  });
});
