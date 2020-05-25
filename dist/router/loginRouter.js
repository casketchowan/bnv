"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
const express_1 = require("express");
// This router repsresents the user "logging in" to the app
exports.loginRouter = express_1.Router();
exports.loginRouter.post('/login', (req, res) => {
    if (req.session) {
        req.session.user = true;
    }
    res.end("login successful!");
});
exports.loginRouter.get('/logout', (req, res) => {
    if (req.session) {
        req.session.user = false;
    }
    res.end("logged out!");
});
//for debugging purposes
exports.loginRouter.get('/check', (req, res) => {
    console.log(req.session);
    res.json(req.session);
});
