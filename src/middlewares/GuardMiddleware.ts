import { Request, Response, NextFunction } from 'express';

// Auth example
export default class Guard {
    constructor() {}

    public checkSession = (req: Request, res: Response, next: NextFunction) => {
        next();
    }
}
