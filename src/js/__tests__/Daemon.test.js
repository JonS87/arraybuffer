import { Daemon } from '../class/Daemon';

test.each([
  [{name: 'м', type: 'Daemon'}, Error],
  [{name: 'лучникккккк', type: 'Daemon'}, Error],
])(
('should check name %s on the length for type Daemon'),
(person, expected) => {
  function newPerson() {
    new Daemon(person.name, person.type);
  }

  expect(newPerson).toThrow(expected);
});

test('should check the name in type Daemon', () => {
  const result = new Daemon('Лучник', 'Daemon');

  expect(result.name).toBe('Лучник');
});

test('Should check attack by type Daemon', () => {
  const result = new Daemon('лучник', 'Daemon');

  expect(result.attack).toBe(10);
});

test('Should check defence by type Daemon', () => {
  const result = new Daemon('лучник', 'Daemon');

  expect(result.defence).toBe(40);
});

test('should check incorrect type', () => {
  function newPerson() {
    new Daemon('Лучник', 'SomePerson');
  }

  expect(newPerson).toThrow(Error);
});

test('should check levelUp', () => {
  const result = new Daemon('Лучник', 'Daemon');
  result.levelUp();

  expect(result.level).toBe(2);
});

test('should check Error in levelUp when health <= 0', () => {
  function newPerson() {
    const result = new Daemon('Лучник', 'Daemon');
    result.health = 0;

    return result.levelUp();
  }

  expect(newPerson).toThrow(Error);
});

test('should check damage', () => {
  const result = new Daemon('Лучник', 'Daemon');
  result.damage(50);

  expect(result.health).toBeCloseTo(70);
});

test('should check stoned', () => {
  const result = new Daemon('Лучник', 'Daemon');
  result.damage(50, true);

  expect(result.stoned).toBe(true);
});

test('should check damage when health < 0', () => {
  const result = new Daemon('Лучник', 'Daemon');
  result.health = -1;
  result.damage(50);

  expect(result.health).toBe(-1);
});
