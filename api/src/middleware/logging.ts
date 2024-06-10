import {Request,Response,NextFunction} from 'express';

export const loggingMiddleware = (req:Request,res:Response,next:NextFunction) => {
    const {method, url} = req;
    const start = Date.now();
    
    res.on('finish', () => {
        const duration = Date.now() - start;
        const message = `[${new Date().toISOString()}] ${method} ${url} ${res.statusCode} - ${duration}ms`;
        console.log(message)
    })

    next();
}