import db from '../models';

export default {
  list(req, res) {
    db.Item.findAll()
      .then((items) => {
        res.status(200).json(items);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  },

  create(req, res) {
    db.Item.create({
      res,
      body: req.body,
    })
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((error) => {
        res.status(400).send(error);
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
