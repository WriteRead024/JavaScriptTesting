
// Rich W.
// started 12/11/2024


// code from
// https://nodejs.org/docs/latest-v22.x/api/async_context.html#new-asynclocalstorage


const http = require('node:http');
const { AsyncLocalStorage } = require('node:async_hooks');

const asyncLocalStorage = new AsyncLocalStorage();

function logWithId(msg) {
    const id = asyncLocalStorage.getStore();
    console.log(`${id !== undefined ? id : '-'}:`, msg);
}

let idSeq = 0;
http.createServer((req, res) => {
    asyncLocalStorage.run(idSeq++, () => {
        logWithId('start');
        // Imagine any chain of async operations here
        setImmediate(() => {
            logWithId('finish');
            res.end();
        });
    });
}).listen(8080);

function httpGetPromise(url) {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            res.on('data', () => { }); // Consume the data to trigger 'end' event
            res.on('end', resolve);
            res.on('error', reject);
        }).on('error', reject);
    });
}

// Promise.all([
//     httpGetPromise('http://localhost:8080'),
//     httpGetPromise('http://localhost:8080')
// ]).then(() => {
//     console.log('All requests completed');
//     process.exit();
// }).catch((err) => {
//     console.error('Error during requests:', err);
//     process.exit(1);
// });


httpGetPromise('http://localhost:8080').then(() => {
    httpGetPromise('http://localhost:8080')
        .then(() => {
            console.log('All requests completed');
            process.exit();
        }).catch((err) => {
            console.error('Error during requests:', err);
            process.exit(1);
        });
}).then(() => {
    console.log('First request Promise completed');
}).catch((err) => {
    console.error('Error during first request Promise:', err);
    process.exit(1);
});

// Prints:
//   0: start
//   1: start
//   0: finish
//   1: finish

// test("test runtime has a 'this' type object", function() {
//     expect(typeof this).toBe("object");
// });

// test("test runtime 'this' object is not null", function() {
//     expect(this).not.toBeNull();
// });

// test("test runtime 'this' object is not undefined", function() {
//     expect(this).not.toBeUndefined();
// });

