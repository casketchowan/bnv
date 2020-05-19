import {Request, Response, NextFunction} from 'express'

export function loggingMiddleware(req:Request, res:Response, next:NextFunction){
    console.log(`Request url is \'${req.url}\' and Request Method is ${req.method}`)
    //calls the next middleware function
    next();
}
