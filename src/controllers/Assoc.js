import db from '../models';

export default {
  list: (req, res) =>
    db.Item.findAll({
      include: [{
        model: db.CanonicalItem,
        as: 'CanonicalItem',
        include: [{
          model: db.Category,
          as: 'Category'
        }]
      }]
    })
      .then((items) => {
        res.status(200).json({
          data: items,
        });
      })
      .catch((error) => {
        res.status(400).send(error);
      }),
};
