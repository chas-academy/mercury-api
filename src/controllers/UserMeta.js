import db from '../models';

export default {
    list(req, res) {
        db.UserMeta.findAll({
            include: [{
                model: db.User,
                as: 'User'
            }]
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            console.log(error)
            res.status(400).send(error)
        })
    }

    //TODO : add more routes as necessary
}