
// node-details.test.js
// started 3/22/2024
// Rich W.
// with
// GitHub Copilot

const process = require('process');

test('Check Node.js version', () => {
    const expectedMajorVersion = 20; // Update this with the desired major version number

    const nodeVersion = process.version;
    const versionParts = nodeVersion.split('.');
    const majorVersion = parseInt(versionParts[0].replace(/[^\d]/g, ''));

    expect(majorVersion).toBeGreaterThanOrEqual(expectedMajorVersion);
});
