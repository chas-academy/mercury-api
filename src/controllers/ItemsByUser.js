import * as Items from '../lib/Items';

export default {
  list(req, res) {
    Items.getAllItemsByUserId(req.params.userId)
      .then((items) => {
        res.status(200).json({
          data: items,
        });
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  },
};
