"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
const express_1 = require("express");
// This router repsresents the user "logging in" to your app
// it is over-simplified by a lot since we do not actually have users in our db or in our models
// for your projects you will probably want to acutally add some users
exports.loginRouter = express_1.Router();
//Typically login in is done using a post request
exports.loginRouter.post('/login', (req, res) => {
    if (req.session) {
        //usually you would set the data of the user to the session
        req.session.user = true;
    }
    res.end("logged in successfully!");
});
// logout functionality
exports.loginRouter.get('/logout', (req, res) => {
    if (req.session) {
        // when you "logout" you are really just removing the data set by loggin in
        req.session.user = false;
    }
    res.end("logged out!");
});
// this is just here for debugging purposes. It returns the info about the session
exports.loginRouter.get('/check', (req, res) => {
    console.log(req.session);
    res.json(req.session);
});
