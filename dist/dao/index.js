"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
// this is the pool object that is used to connnect to the DB
// it is located outside the particular repository files because it should be
// used by more than just the PaperRepository (if we had other resources, they would have
// corresponding repositories that would use this same pool)
exports.pool = new pg_1.Pool({
    host: "localhost",
    port: 5432,
    database: "bookapi",
    user: "admin",
    password: "password",
});
