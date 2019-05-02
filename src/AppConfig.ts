import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as cors from 'cors';
import * as morgan from 'morgan';

import { PDVRoutes } from './routes/PDVRoutes';

class AppConfig {
    public app: express.Application;
    private router: PDVRoutes = new PDVRoutes();

    constructor() {
        this.app = express();
        this.config();
        this.router.routes(this.app);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(helmet());
        this.app.use(bodyParser.urlencoded({
            extended: false,
        }));
        this.app.use(cors());
        this.app.use(morgan('tiny'));
        this.app.use('/healthcheck', require('express-healthcheck')());
    }
}

export default new AppConfig().app;
