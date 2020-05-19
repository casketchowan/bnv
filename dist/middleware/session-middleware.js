"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionMiddleware = void 0;
const session = require("express-session");
//thi is the object that we will use to configure our session middleware
const sessionConfig = { secret: 'mySecret', resave: false, saveUninitialized: false };
// we can call app.use() in index.ts with this object to enable the use of sessions
exports.sessionMiddleware = session(sessionConfig);
