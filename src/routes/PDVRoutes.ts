import * as express from 'express';

import { createPdv, getPdv, closestPdv } from '../services';
import { Guard } from '../middlewares';
import { pdvValidation } from '../middlewares/pdvValidations'
import { pdvRoutes } from './pdvURL';

export class PDVRoutes {
    private guardMiddleware: Guard = new Guard();

    constructor() {}

    public routes(app: express.Application): void {
        // Example on authenticated route
        app.route(pdvRoutes.createPdvURL)
            .post(this.guardMiddleware.checkSession, pdvValidation, createPdv);
        app.route(pdvRoutes.getPdvURL)
            .get(this.guardMiddleware.checkSession, getPdv);
        app.route(pdvRoutes.closestPdv)
            .post(this.guardMiddleware.checkSession, closestPdv)
    }
}
