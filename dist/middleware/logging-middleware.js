"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggingMiddleware = void 0;
function loggingMiddleware(req, res, next) {
    console.log(`Request url is \'${req.url}\' and Request Method is ${req.method}`);
    //calls the next middleware function
    next();
}
exports.loggingMiddleware = loggingMiddleware;
