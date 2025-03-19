import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('doge')).toBe('doge');
  });

  test('with additional class', () => {
    const expected = 'doge dogeFunny dogeBruh';
    expect(classNames('doge', {}, ['dogeFunny', 'dogeBruh'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'doge dogeFunny dogeBruh hovered scrollable';
    expect(classNames('doge', { hovered: true, scrollable: true }, ['dogeFunny', 'dogeBruh'])).toBe(expected);
  });

  test('with mods false', () => {
    const expected = 'doge dogeFunny dogeBruh hovered';
    expect(classNames('doge', { hovered: true, scrollable: false }, ['dogeFunny', 'dogeBruh'])).toBe(expected);
  });

  test('with mods undefined', () => {
    const expected = 'doge dogeFunny dogeBruh hovered';
    expect(classNames('doge', { hovered: true, scrollable: undefined }, ['dogeFunny', 'dogeBruh'])).toBe(expected);
  });
});
