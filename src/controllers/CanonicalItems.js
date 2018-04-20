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
    }
}