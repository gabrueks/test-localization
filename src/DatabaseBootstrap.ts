import * as mongoose from 'mongoose';

import PDV from './DTO/PDV';

// If you have any problem with http requests certificate, otherwise do not uncomment the next line
// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = '0';

export default class DatabaseBootstrap {
    private DBURI: string;

    constructor() {
        this.DBURI = this.getMongoURI();
    }

    public async bootstrap(): Promise<void> {
        try {
            await mongoose.connect(
                this.DBURI,
                {
                    useNewUrlParser: true,
                    useCreateIndex: true
                },
            )
            this.mongoCharge();
        } catch (err) {
            console.error('Unable to connect to the server. Please start the server. Error:', err);
        }
    }

    private getMongoURI(): string {
        if (process.env.ENV === 'container') return 'mongodb://mongodb:27017/pdv-database';
        return (process.env.DATABASE_HOST && process.env.DATABASE_NAME && process.env.DB_MONGODB_USER && process.env.DB_MONGODB_PASS)
        ? `mongodb://${process.env.DB_MONGODB_USER}:${process.env.DB_MONGODB_PASS}@${process.env.DATABASE_HOST}` +
        `:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`
        : `mongodb://localhost:27017/pdv-database`;
    }

    private async mongoCharge(): Promise<void> {
        if (await new PDV().getLength() > 0) return;
        await new PDV().loadDefaultPdv();
        return;
    }
}
