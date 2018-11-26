"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const leveldb_1 = require("./leveldb");
const level_ws_1 = __importDefault(require("level-ws"));
class Metric {
    constructor(ts, v) {
        this.timestamp = new Date(ts).getTime();
        this.value = v;
    }
}
exports.Metric = Metric;
class MetricsHandler {
    constructor(path) {
        this.db = leveldb_1.LevelDB.open(path);
    }
    save(key, met, callback) {
        const stream = level_ws_1.default(this.db);
        stream.on('close', callback);
        stream.on('error', callback);
        met.forEach((m) => {
            stream.write({ key: `metrics:${key}:${m.timestamp}`, value: m.value });
        });
        stream.end();
    }
    get(key, callback) {
        const stream = this.db.createReadStream();
        var data = [];
        stream.on('error', callback)
            .on('end', callback(null, data))
            .on('data', (data) => {
            const [_, k, timestamp] = data.key.split(":");
            const value = data.value;
            if (key != k) {
                console.log(`LevelDB error: ${data} does not match key ${key}`);
            }
            else {
                data.push(new Metric(timestamp, value));
            }
        });
    }
}
exports.MetricsHandler = MetricsHandler;
