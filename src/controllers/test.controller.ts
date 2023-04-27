import { Request, Response } from "express";

class TestController {

    // app.get("/test", (req, res) => {
    //     var tipo = "GET";
    //     res.send("Hola Mundo! (GET)");
    // })
    public async test(reg: Request, res: Response) {
        res.send("hola mundo (lo que esta arriba son metadatos) (GET)");
    }
}

export default new TestController();