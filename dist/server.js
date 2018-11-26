"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const metrics_1 = require("./metrics");
const app = express();
const port = process.env.PORT || '8080';
const dbMet = new metrics_1.MetricsHandler('./db');
app.get('/', (req, res) => {
    res.write('hello world');
    res.send();
});
app.get('/metrics/:id', (req, res) => {
    dbMet.get(req.params.id, (err, result) => {
        if (err)
            throw err;
        if (result === undefined) {
            res.write('no result');
            res.send();
        }
        else
            res.json(result);
    });
});
app.listen(port, (err) => {
    if (err)
        throw err;
    console.log(`server is listening on port ${port}`);
});
