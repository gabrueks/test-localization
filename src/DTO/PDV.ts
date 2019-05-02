import { PDVModel } from '../models/pvdSchema';
import pdvs from '../../assets/pvd';

// Auth example
export default class PDV {
    constructor() {}

    public getLength(): Promise<Number> {
        return PDVModel.countDocuments().exec();
    }

    public async loadDefaultPdv() {
        try {
            await PDVModel.insertMany(pdvs.pdvs);
            return true;
        } catch (err) {
            console.error(err);
            return false;
        }
    }

    public async insertPDV(PDV) {
        PDV.id = await this.getNewID();
        try {
            new PDVModel(PDV).save();
            return true;
        } catch (err) {
            console.error(err);
            return false;
        }
    }

    public retrievePdvInfo(id: Number) {
        return PDVModel.findOne({ id }, '-id -_id -__v').exec();
    }

    public getClosestPdv(lat: Number, long: Number) {
        return PDVModel.find({
            address: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [ long, lat ]
                    },
                }
            }
        }, '-id -_id -__v').limit(1).exec();
    }

    private async getNewID() {
        const lastEntry: any = await PDVModel.findOne().sort({ _id: -1 }).limit(1);
        return lastEntry === null ? 0 : Number(lastEntry.id) + 1;
    }
}
