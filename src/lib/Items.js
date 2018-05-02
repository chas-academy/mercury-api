import db from "../models";

export function getAllItemsByUserId(userId) {
  return db.Item.findAll({
    where: {
      userMetaId: userId
    },
    attributes: { exclude: ["canonicalId", "userMetaId"] },
    include: [
      {
        model: db.CanonicalItem,
        attributes: {
          exclude: ["createdAt", "updatedAt", "canonicalId"]
        },
        as: "canonicalItem"
      }
    ]
  });
}
