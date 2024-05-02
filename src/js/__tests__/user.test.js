import { loadUser, saveUser } from '../user';
import { httpGet } from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call loadUser once', () => {
  httpGet.mockReturnValue(JSON.stringify({}));

  const response = loadUser(1);
  expect(response).toEqual({});
  expect(httpGet).toHaveBeenCalledWith('http://server:8080/users/1');
});

test('should save user', () => {
  function saveUserFunction() {
    saveUser({name: 'мечник', health: 10})
  }

  expect(saveUserFunction).toThrow(new Error('Unimplemented'));
});