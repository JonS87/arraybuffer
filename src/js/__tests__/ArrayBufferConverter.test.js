import { ArrayBufferConverter } from '../class/ArrayBufferConverter';

test('should check converting from binary to string', () => {
  function getBuffer() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    return (input => {
      const buffer = new ArrayBuffer(data.length * 2);
      const bufferView = new Uint16Array(buffer);
      for (let i = 0; i < input.length; i++) {
        bufferView[i] = input.charCodeAt(i);
      }
      return buffer;
    })(data);
  }
  const abc = new ArrayBufferConverter();
  const result = abc.load(getBuffer());

  expect(result).toBe(`{"data":{"user":{"id":1,"name":"Hitman","level":10}}}`);
});

