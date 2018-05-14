import db from '../models';
import * as Items from '../lib/Items';

export default {
  list(req, res) {
    Items.getAllItemsByUserId(req.params.userId)
      .then((items) => {
        res.status(200).json(items);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  },

  createWithAssoc(req, res) {
    Items.createItemWithAssociations({
      res,
      body: req.body,
    });
  },

  find(req, res) {
    db.Item.find({
      res,
      where: {
        id: req.params.id,
      }
        .then((item) => {
          res.status(200).json(item);
        })
        .catch((error) => {
          res.status(400).send(error);
        }),
    });
  },

  update(req, res) {
    db.Item.update({
      res,
      body: req.body,
      id: req.params.id,
    });
  },

  destroy(req, res) {
    db.Item.destroy({
      res,
      id: req.params.id,
    });
  },
};
