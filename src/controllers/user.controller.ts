import { Request, Response } from "express";
import { IUser, User } from "../entities/User";
import { MysqlDataSource } from "../configs/Db";

const repository = MysqlDataSource.getRepository(User);
class UserController {


    public async Obtener(req: Request, res: Response) {
        const lista = await repository.find();
        res.send(lista)
    }
    public async Crear(req: Request, res: Response) {
        const users: IUser = req.body;
        const oUser = new User(users)
        await repository.save(oUser)
        res.send("")
    }
    public async Editar(req: Request, res: Response) {
        res.send("")
    }
    public async Eliminar(req: Request, res: Response) {
        res.send("")
    }

}

export default new UserController();