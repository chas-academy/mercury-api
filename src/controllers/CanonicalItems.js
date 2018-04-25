import db from '../models';

export default {
    list(req, res) {
        db.CanonicalItem.findAll()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(error => {
                res.status(400).send(error)
            })
    },

    create(req, res) {
        db.CanonicalItem.create({
            res,
            body: req.body
        });
    },

    find(req, res) {
        db.CanonicalItem.find({
            res,
            where: {
                id: req.params.id
            }
        })
    },

    update(req, res) {
        db.CanonicalItem.update({
            res,
            body: req.body,
            id: req.params.id
        })
    },

    destroy(req, res) {
        db.CanonicalItem.destroy({
            res,
            id: req.params.id
        })
    }
}