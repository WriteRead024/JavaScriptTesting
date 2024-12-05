'set strict'

// os-details.test.js
// started 3/22/2024
// Rich W.
// with
// GitHub Copilot

const os = require('os');

//from node 20.10.0
const osObjectKeys = [
    'arch', 'availableParallelism',
    'cpus', 'endianness',
    'freemem', 'getPriority',
    'homedir', 'hostname',
    'loadavg', 'networkInterfaces',
    'platform', 'release',
    'setPriority', 'tmpdir',
    'totalmem', 'type',
    'userInfo', 'uptime',
    'version', 'machine',
    'constants', 'EOL',
    'devNull'
];

test('os object has expected keys', () => {
    const osKeys = Object.keys(os);

    expect(osKeys).toEqual(osObjectKeys);
});

test('OS is Linux and version is greater than 6.11', () => {
    const osType = os.type();
    const osPlatform = os.platform();
    // this looks the same as command line 'uname -r'
    const osVersion = os.release();
    //console.log(osVersion);

    const versionMatch = osVersion.match(/^\d+\.\d+/);
    const versionNumber = versionMatch ? parseFloat(versionMatch[0]) : 0;

    expect(osType).toBe('Linux');
    expect(osPlatform).toBe('linux');
    expect(versionNumber).toBeGreaterThanOrEqual(6.11);
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
