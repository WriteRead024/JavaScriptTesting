'set strict'

// node-details.test.js
// started 3/22/2024
// Rich W.
// with
// GitHub Copilot

const os = require('os');

test('OS is Linux and version is greater than 6.7', () => {
    const osType = os.type();
    const osPlatform = os.platform();
    const osVersion = os.release();
    
    expect(osType).toBe('Linux');
    expect(osPlatform).toBe('linux');
    // interesting that parseFloat did not throw an error
    // when the output of os.release() was like n.n.n-nnn.sss.x86_64
    expect(parseFloat(osVersion)).toBeGreaterThanOrEqual(6.7);
});

test('os.arch is x64', () => {
    const osArch = os.arch();

    expect(osArch).toBe('x64');
});

test('os.availableParallelism is a function', () => {
    expect(typeof os.availableParallelism).toBe('function');
});

test('os.endianness is LE', () => {
    expect(os.endianness()).toBe('LE');
});

test('os.freemem and os.totalmem are functions', () => {
    expect(typeof os.freemem).toBe('function');
    expect(typeof os.totalmem).toBe('function');
});

test('os.userInfo, os.hostname, and os.machine are functions', () => {
    expect(typeof os.userInfo).toBe('function');
    expect(typeof os.hostname).toBe('function');
    expect(typeof os.machine).toBe('function');
});

test('os.constants is not null, is not undefined, and has a null prototype', () => {
    const prototype = Object.getPrototypeOf(os.constants);
    
    expect(os.constants).not.toBeNull();
    expect(os.constants).not.toBeUndefined();
    expect(prototype).toBe(null);
});

test('os has functions setPriority and getPriority', () => {
    expect(typeof os.setPriority).toBe('function');
    expect(typeof os.getPriority).toBe('function');
});

test('os.devNull and os.EOL are type string', () => {
    expect(typeof os.devNull).toBe('string');
    expect(typeof os.EOL).toBe('string');
});
