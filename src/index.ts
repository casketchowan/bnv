import {PORT} from './config/';
import express = require('express'); 

import {bookRouter} from './router/bookRouter'
import * as bodyparser from 'body-parser' 

import { loggingMiddleware } from './middleware/logging-middleware';
import { sessionMiddleware } from './middleware/session-middleware';
import { loginRouter } from './router/loginRouter';


const app = express(); // initialize the express server
// port listening
app.listen(PORT, () => {console.log(`server started running on ${PORT}`)});

app.use(bodyparser.json());
app.use(loggingMiddleware);
app.use(sessionMiddleware);


app.use('/book',bookRouter);
app.use('/auth',loginRouter);


/*app.get('/', (req:express.Request, res:express.Response) => {   
   res.send(bookRouter); 
})
*/



