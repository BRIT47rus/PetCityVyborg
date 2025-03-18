import express, { Request, Response } from 'express';
const app = express();
const port = 4200;

app.get('/',(req:Request,res:Response)=>{
    res.send('Привет я ответ!')
})

app.listen(port,()=>{
    console.log('слушаю сервер на http://localhost:4200/');
})