import Team from '../app';
import Bowman from '../Bowman';
import Undead from '../Undead';
import Magician from '../Magician';

describe('create Team:', () => {
  const team = new Team();

  describe('add method', () => {
    const hero = new Bowman('Jo');

    test('add character to the team', () => {
      team.add(hero);
      team.add(new Undead('Crew'));
      expect(team.members.size).toBe(2);
    });

    test('throw error', () => {
      expect(() => team.add(hero)).toThrow();
    });
  });

  describe('addAll method', () => {
    test('add all heroes to the team', () => {
      const bob = new Magician('Bob');

      team.addAll(bob, new Bowman('Jack'), new Undead('Scull'));
      expect(team.members.size).toBe(5);
    });
  });

  describe('toArray method', () => {
    test('should return array', () => {
      const arr = [
        {
          name: 'Jo', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
        },
        {
          name: 'Crew', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
        },
        {
          name: 'Bob', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
        },
        {
          name: 'Jack', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
        },
        {
          name: 'Scull', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
        },
      ];
      expect(team.toArray()).toMatchObject(arr);
    });
  });
});
