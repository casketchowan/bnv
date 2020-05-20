import {Router} from 'express';

// This router repsresents the user "logging in" to the app

export const loginRouter = Router();

loginRouter.post('/login',(req, res)=>{
    if(req.session){
        req.session.user = true
    }
    res.end("login successful!")
})


loginRouter.get('/logout',(req, res)=>{
    if(req.session){
        req.session.user = false
    }
    res.end("logged out!")
})

//for debugging purposes
loginRouter.get('/check',(req, res)=>{
    console.log(req.session);
    res.json(req.session)
})
