import { Magician } from '../class/Magician';

test.each([
  [{name: 'м', type: 'Magician'}, Error],
  [{name: 'лучникккккк', type: 'Magician'}, Error],
])(
('should check name %s on the length for type Magician'),
(person, expected) => {
  function newPerson() {
    new Magician(person.name, person.type);
  }

  expect(newPerson).toThrow(expected);
});

test('should check the name in type Magician', () => {
  const result = new Magician('Лучник', 'Magician');

  expect(result.name).toBe('Лучник');
});

test('Should check attack by type Magician', () => {
  const result = new Magician('лучник', 'Magician');

  expect(result.attack).toBe(10);
});

test('Should check defence by type Magician', () => {
  const result = new Magician('лучник', 'Magician');

  expect(result.defence).toBe(40);
});

test('should check incorrect type', () => {
  function newPerson() {
    new Magician('Лучник', 'SomePerson');
  }

  expect(newPerson).toThrow(Error);
});

test('should check levelUp', () => {
  const result = new Magician('Лучник', 'Magician');
  result.levelUp();

  expect(result.level).toBe(2);
});

test('should check Error in levelUp when health <= 0', () => {
  function newPerson() {
    const result = new Magician('Лучник', 'Magician');
    result.health = 0;

    return result.levelUp();
  }

  expect(newPerson).toThrow(Error);
});

test('should check damage', () => {
  const result = new Magician('Лучник', 'Magician');
  result.damage(50);

  expect(result.health).toBeCloseTo(70);
});

test('should check damage when health < 0', () => {
  const result = new Magician('Лучник', 'Magician');
  result.health = -1;
  result.damage(50);

  expect(result.health).toBe(-1);
});

test('should check stoned', () => {
  const result = new Magician('Лучник', 'Magician');
  result.damage(50, true);

  expect(result.stoned).toBe(true);
});