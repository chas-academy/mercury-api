import _ from 'lodash';
import BCrypt from 'bcryptjs';
import DB from '../models';
import JWT from 'jsonwebtoken';
import * as Paths from '../lib/Paths';
import { filters, pageCount, orderBy } from '../helpers/Data';
import { rand } from '../helpers/Math';

const FILTER_OPTIONS = {
  userId: { type: 'integer' },
  dateFrom: { col: 'createdAt', type: 'minDate' },
  dateTo: { col: 'createdAt', type: 'maxDate' },
};

const INCLUDE_PATHS = [
  {
    model: DB.Path,
    as: 'Paths',
  },
];

export function list(options) {
  const {
    res, query, returnData, jsonData,
  } = options;
  const {
    filtered, sorted, limit, page,
  } = query;

  return DB.User.findAll({
    where: filters(filtered, FILTER_OPTIONS),
    exclude: ['password'],
    include: INCLUDE_PATHS,
    offset: (page - 1) * limit,
    limit,
    order: orderBy(sorted, ['userId', 'asc']),
  })
    .then((Users) => {
      const data = jsonData ? jsonUsers(Users) : Users;

      if (returnData) return data;

      return res.status(data ? 200 : 404).send(data);
    })
    .catch((error) => {
      console.log(error);

      return returnData ? error : res.status(400).send(error);
    });
}

export function pages({ query }) {
  return DB.User.count({
    col: 'userId',
    where: filters(query.filtered, FILTER_OPTIONS),
  }).then(count => pageCount(query, count));
}

export function find(options) {
  const { res, where, returnData } = options;

  return DB.User.findOne({
    where,
    // include: INCLUDE_PATHS,
  })
    .then((User) => {
      const json = User ? jsonUser(User) : null;

      if (returnData) return { object: User, json };

      return res.status(User ? 200 : 404).send(json);
    })
    .catch((error) => {
      console.log(error);

      return returnData ? error : res.status(400).send(error);
    });
}

export function create(options) {
  const res = options.res;
  const body = JWT.verify(options.body.token, process.env.JWT_SECRET);
  let { password } = body;
  const {
    firstName,
    lastName,
    birthday,
    email,
    location
  } = body;
  find({
    res,
    where: { email },
    returnData: true,
  }).then((User) => {
    if (User.object) {
      return res.status(401).send('Email already exists.');
    }

    const salt = BCrypt.genSaltSync(10);
    password = BCrypt.hashSync(password, salt);
    const role = 'n/a';
    const status = 'n/a';
    const redirect = 'n/a';

    DB.User.create({
      firstName,
      lastName,
      email,
      role,
      password,
      status,
      redirect,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
      .then((User) => {
        console.log(User);
        return res.status(200).send(User)
      })
      .catch((error) => {
        console.error(error);
        return res.status(400).send(error);
      });
  });
}

export function update(options) {
  const { res, userId, body } = options;
  const {
    firstName, lastName, email, role, status, redirect, allowedPaths, excludedPaths,
  } = body;

  find({
    res,
    where: { email },
    returnData: true,
  })
    .then((User) => {
      if (User.object !== null && User.object.userId !== parseInt(userId)) {
        return res.status(401).send({ message: 'Email already exists.' });
      }

      DB.User.update(
        {
          firstName,
          lastName,
          email,
          role,
          status,
          redirect,
          updatedAt: new Date(),
        },
        {
          where: { userId },
        },
      )
        .then(User =>
          Paths.update({
            res,
            body,
            userId,
          }))
        .catch((error) => {
          console.log(error);

          return res.status(400).send(error);
        });
    })
    .catch((error) => {
      console.log(error);

      return res.status(400).send(error);
    });
}

export function destroy(options) {
  const { res, userId } = options;

  find({
    res,
    where: { userId },
    returnData: true,
  })
    .then((User) => {
      DB.User.destroy({ where: { userId } })
        .then(() => res.status(200).send())
        .catch((error) => {
          console.log(error);

          return res.status(400).send(error);
        });
    })
    .catch((error) => {
      console.log(error);

      return res.status(400).send(error);
    });
}

function jsonUsers(Users) {
  return Users.map(User => jsonUser(User));
}

function jsonUser(User) {

  return {
    userId: User.userId,
    firstName: User.firstName,
    lastName: User.lastName,
    email: User.email,
    role: User.role,
    status: User.status,
    redirect: User.redirect,
    createdAt: User.createdAt,
  };
}
