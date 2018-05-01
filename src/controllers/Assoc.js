import * as Items from "../lib/Items";
import db from "../models";

export default {
  list: (req, res) =>
    db.Item.findAll({
      include: [
        {
          model: db.CanonicalItem,
          as: "canonicalItem"
        }
      ]
    })
      .then(items => {
        res.status(200).json({
          data: items
        });
      })
      .catch(error => {
        console.log(error);
        res.status(400).send(error);
      }),

  getAll: (req, res) =>
    Items.getAllItemsByUserId(req.params.userId)
      .then(items => {
        res.status(200).json({
          data: items
        });
      })
      .catch(error => {
        console.log(error);
        res.status(400).send(error);
      })
};
