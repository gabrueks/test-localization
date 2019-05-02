import { Schema, model } from 'mongoose';

const PDVSchema = new Schema({
    id: { type: Number },
    tradingName: { type: String, required: true },
    ownerName: { type: String, required: true },
    document: { type: String, required: true },
    coverageArea: { 
        type: {
            type: String,
            enum: ['MultiPolygon'],
            required: true
        },
        coordinates: {
            type: [
                [
                    [
                        [
                            Number,
                            Number
                        ]
                    ]
                ]
            ],
            required: true
        }
    },
    address: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
});

PDVSchema.index({
    address: '2dsphere',
    coverageArea: '2dsphere'
});

export const PDVModel = model('pvds', PDVSchema, 'pdvs');
