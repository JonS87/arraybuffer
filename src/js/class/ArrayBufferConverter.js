export class ArrayBufferConverter {
  load(buffer) {
    let result = '';
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < bufferView.length; i++) {
      result += String.fromCharCode(bufferView[i]);
    }
    
    return result;
  }
}