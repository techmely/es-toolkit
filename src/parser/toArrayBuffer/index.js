export function toArrayBuffer(buffer) {
    const { buffer: arrayBuffer, byteOffset, byteLength } = buffer;
    return arrayBuffer.slice(byteOffset, byteOffset + byteLength);
}
