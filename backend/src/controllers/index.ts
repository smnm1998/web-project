import { Request, Response } from 'express';

export default class IndexController {
    public getIndex(req: Request, res: Response): void {
        res.send('Hello, world!');
    }
}