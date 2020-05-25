"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool2 = exports.pool = void 0;
const pg_1 = require("pg");
// this is the pool object that is used to connnect to the DB
exports.pool = new pg_1.Pool({
    host: "localhost",
    port: 5432,
    database: "bookapi",
    user: "admin",
    password: "password",
});
exports.pool2 = new pg_1.Pool({
    host: "localhost",
    port: 5432,
    database: "bookapi2",
    user: "acct1",
    password: "password",
});
