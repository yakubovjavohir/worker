const {parentPort} = require('worker_threads')


let start = Date.now()

for (let i = 0; i < 1000; i++) {}

let end = Date.now()
let time = end - start
parentPort.postMessage(time)