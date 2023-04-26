import express, { application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
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
app.post("/", (req, res) => {
    res.send("Hola Mundo! (POST)");
})
app.get("/test", (req, res) => {
    var tipo = "GET";
    res.send("Hola Mundo! (GET)");
})
//app.get('/api/usuario/test',UserController.test);
export default app;