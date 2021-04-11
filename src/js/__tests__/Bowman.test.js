import Bowman from '../Bowman';

describe('Bowman:', () => {
  test('should return object', () => {
    expect(new Bowman('Jo')).toMatchObject({
      name: 'Jo',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    });
  });
});
