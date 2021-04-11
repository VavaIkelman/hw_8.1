import Magician from '../Magician';

describe('Magician:', () => {
  test('should return object', () => {
    expect(new Magician('Jo')).toMatchObject({
      name: 'Jo',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    });
  });
});
