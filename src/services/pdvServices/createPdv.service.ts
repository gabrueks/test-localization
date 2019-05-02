import { Request, Response } from 'express';
import PDV from '../../DTO/PDV';

export default async (req: Request, res: Response) => {
    const { body } = req;
    const validation = await new PDV().insertPDV(body);
    res.status(httpStatus(validation)).json(createResponse(validation));
}

function createResponse(success: boolean) {
    if (success) return { message: 'PDV criado com sucesso.' }
    return { message: 'Falha ao criar PDV.' }
}

function httpStatus(success: boolean) {
    if (success) return 201;
    return 409;
}