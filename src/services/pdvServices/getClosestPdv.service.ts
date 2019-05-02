import { Request, Response } from 'express';
import PDV from '../../DTO/PDV';

export default async (req: Request, res: Response) => {
    const { body } = req;
    // Create PDV
    if (!body.lat || !body.long) {
        res.status(400).end();
        return;
    }
    const response = responseMount(await new PDV().getClosestPdv(req.body.lat, req.body.long));
    res.status(response.httpCode).json(response.PDV);
}

const isNumber = (number) => !isNaN(parseInt(number)) && isFinite(number)
const responseMount = (PDV) => {
    if (PDV == null || !PDV) return { PDV, httpCode: 204 }
    return { PDV, httpCode: 200 }
}
