import db from '../models';

export default {
    list(req, res) {
        db.Item.findAll()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(error => {
                res.status(400).send(error)
            })
    },

    create(req, res) {
        db.Item.create({
            res,
            body: req.body
        });
    },

    find(req, res) {
        db.Item.find({
            res,
            where: {
                id: req.params.id
            }
        })
    },

    update(req, res) {
        db.Item.update({
            res,
            body: req.body,
            id: req.params.id
        })
    },
    
    destroy(req, res) {
        db.Item.destroy({
            res,
            id: req.params.id
        })
    }
}