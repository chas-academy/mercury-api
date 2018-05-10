import algolia from '../config/algolia';

export default {
    testRun(req, res) {
        const index = algolia.initIndex('demo');
        const demoObj = [{
            id: '1',
            name: 'demo',
        }];

        index.addObjects(demoObj, function (err, content) {
            if (err) {
                console.error(err);
            }
            console.log('[algolia] added demo index');
        });

        res.status(200).send({
            message: 'Hope this works'
        })
    }
}