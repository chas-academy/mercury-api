import db from "../models";

export function getAllItemsByUserId(userId) {
  return db.Item.findAll({
    where: {
      userId: userId
    },
    attributes: { exclude: ["canonicalId", "userId"] },
    include: [
      {
        model: db.CanonicalItem,
        attributes: { exclude: ["createdAt", "updatedAt"] },
        as: "canonicalItem"
      }
    ]
  });
}
