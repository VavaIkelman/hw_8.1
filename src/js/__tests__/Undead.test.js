import Undead from '../Undead';

// describe('Undead:', () => {
test('should return object', () => {
  expect(new Undead('Jo')).toMatchObject({
    name: 'Jo',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
// });
