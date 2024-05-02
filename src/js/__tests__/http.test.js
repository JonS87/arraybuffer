import { httpGet, httpPost } from '../http';

test('httpGet should return Error', () => {
  function httpGetFunction() {
    httpGet('http://server:8080/users/1')
  }

  expect(httpGetFunction).toThrow(new Error('http://server:8080/users/1'));
});

test('httpPost should return Error', () => {
  function httpPostFunction() {
    httpPost('http://server:8080/users/1')
  }
  
  expect(httpPostFunction).toThrow(new Error('http://server:8080/users/1'));
});