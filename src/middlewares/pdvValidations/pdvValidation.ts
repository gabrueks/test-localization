import { Request, Response, NextFunction } from 'express';
import * as assert from 'assert';

export default (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    if (verifier(body)) {
        next();
    } else {
        res.status(400).json({
            message: 'Invalid data.'
        });
    }
}

function verifier(body): boolean {
    try {
        assert.strictEqual(typeof body.tradingName, 'string');
        assert.strictEqual(typeof body.ownerName, 'string');
        assert.strictEqual(typeof body.document, 'string');
        assert.strictEqual(body.document.length >= 11, true);
        assert.strictEqual(typeof body.coverageArea, 'object');
        assert.strictEqual(typeof body.coverageArea.type, 'string');
        assert.strictEqual(Array.isArray(body.coverageArea.coordinates), true);
        assert.strictEqual(typeof body.address, 'object');
        assert.strictEqual(typeof body.address.type, 'string');
        assert.strictEqual(Array.isArray(body.address.coordinates), true);
        return true;
    } catch (err) {
        console.log('Invalid payload on add PDV.');
        console.error(err);
        return false;
    }
}
