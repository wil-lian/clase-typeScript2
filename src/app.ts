import express, { application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import testController from './controllers/test.controller';
//import UserController from './controllers/usuario.controller';
const app = express();
app.use(cors({
    exposedHeaders: ['Authorization']
}));
app.use(morgan('dev'));
app.use(express.json());
app.use((err: any, req: any, res: any, next: any) => {
    if (err) {
        console.error('Invalid Request data')
        res.send('Petición de request invalido')
    } else {
        next();
    }
});
app.get('/test', testController.test)
//app.get('/api/usuario/test',UserController.test);
export default app;