import Character from '../Character';

test('create Character name < 2', () => {
  expect(() => new Character('a', 'Bowman')).toThrowError(new Error('Имя должно быть не менее 2 и не более 10 символов'));
});

test('create Character name > 10', () => {
  expect(() => new Character('a1234567890', 'Bowman')).toThrowError(new Error('Имя должно быть не менее 2 и не более 10 символов'));
});

test('create Character name ok', () => {
  const character = new Character('Jo', 'Magician');
  expect(character.name).toBe('Jo');
});

test('create Character ok', () => {
  const character = new Character('Jo');
  const result = {
    name: 'Jo',
    health: 100,
    level: 1,
  };
  expect(character).toMatchObject(result);
});
