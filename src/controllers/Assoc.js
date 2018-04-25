import db from '../models';

export default {
    list(req, res) {
        db.Item.findAll({
            include: [{
                model: db.CanonicalItem,
                as: 'CanonicalItem'
            }]
        })
        .then(items => {
            res.status(200).json(items)
        })
        .catch(error => {
            console.log(error)
            res.status(400).send(error)
        })
    }
}