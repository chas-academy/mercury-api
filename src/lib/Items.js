import db from '../models';

export function getAllItemsByUserId(userId) {
  return db.Item.findAll({
    where: {
      userMetaId: userId,
    },
    attributes: { exclude: ['canonicalId', 'userMetaId'] },
    include: [
      {
        model: db.CanonicalItem,
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'canonicalId'],
        },
        as: 'CanonicalItem',
        include: [{
          model: db.Category,
          attributes: {
            exclude: ['createdAt', 'updatedAt']
          }
        }]
      },
    ],
  });
}

export function createItemWithAssociations(options) {
  const { res, body } = options;
  const {
    delimiter = 0,
    goal,
    goalType = 'number of uses',
    price,
    auto = false,
    completed = false,
    userMetaId,
    canonicalId,
  } = body;

  db.Item.create({
    delimiter,
    goal,
    goalType,
    price,
    auto,
    completed,
    canonicalId,
    userMetaId,
    createdAt: new Date(),
    updatedAt: new Date(),
  })
    .then((Item) => {
      console.log(Item);
      return res.status(200).send(Item);
    })
    .catch((error) => {
      console.log(error);
      return res.status(400).send(error);
    });
}
