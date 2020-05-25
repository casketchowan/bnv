"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config/");
const express = require("express");
const bookRouter_1 = require("./router/bookRouter");
const bodyparser = __importStar(require("body-parser"));
const logging_middleware_1 = require("./middleware/logging-middleware");
const session_middleware_1 = require("./middleware/session-middleware");
const loginRouter_1 = require("./router/loginRouter");
const app = express(); // initialize the express server
// port listening
app.listen(config_1.PORT, () => { console.log(`server started running on ${config_1.PORT}`); });
app.use(bodyparser.json());
app.use(logging_middleware_1.loggingMiddleware);
app.use(session_middleware_1.sessionMiddleware);
app.use('/book', bookRouter_1.bookRouter);
app.use('/auth', loginRouter_1.loginRouter);
/*app.get('/', (req:express.Request, res:express.Response) => {
   res.send(bookRouter);
})
*/
