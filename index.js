const express = require('express')
const {Worker} = require('worker_threads')
const app = express()

app.get('/a', async(req, res)=>{
    const worker = new Worker('./a.js')
    worker.on('message', (time)=>{
        res.json(`bu api ${Math.trunc(time / 1000)} soniyada ishladi`)
    })
})

app.get('/b', async(req, res)=>{
    const worker = new Worker('./b.js')
    worker.on('message', (time)=>{
        res.json(`bu api ${Math.trunc(time / 1000)} soniyada ishladi`)
    })
})

app.get('/c', async(req, res)=>{
    const worker = new Worker('./c.js')
    worker.on('message', (time)=>{
        res.json(`bu api ${Math.trunc(time / 1000)} soniyada ishladi`)
    })
})

app.listen(7777, ()=>{
    console.log('http://localhost:7777');
})