import db from '../models';

export default {
    list(req, res) {
        db.Item.findAll({
            include: [{
                model: db.CanonicalItem
            }]
        })
        .then(items => {
            res.status(200).json(items)
        })
        .catch(error => {
            res.status(400).send(error)
        })
        // db.Item.findAll({
        //     include: [
        //         {
        //             model: db.CanonicalItem,
        //         }
        //     ]
        // })
        // .then(res => {
        //     res.status(200).json(res)
        // })
        // .catch(error => {
        //     res.status(400).send(error)
        // })
    }
}