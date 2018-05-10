import algolia from '../config/algolia';
import db from '../models';

export default {
    testRun(req, res) {
        const index = algolia.initIndex('canonical_items');
        index.clearIndex();

        db.CanonicalItem.findAll()
            .then((data) => {
                index.addObjects(data, function (err, content) {
                    if (err) {
                        console.error(err);
                    }
                    console.log('[algolia] added canonical_items index');
                });
            })

        res.status(200).send({
            message: 'Hope this works'
        })
    }
}