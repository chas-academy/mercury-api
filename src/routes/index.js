import { authBearer } from '../lib/Sessions';
import C from '../controllers';

export default (app) => {
  app.get('/', (req, res) =>
    res.status(200).send({
      message: "Hello from Mercury's API! Don't forget to thank your backend-developer.",
    }));

  /* Sessions */
  app.post('/sign-in', C.Sessions.authenticate);
  app.post('/sign-out', authBearer(), C.Sessions.signOut);
  app.get('/verify-token', authBearer(), C.Sessions.verifyToken);

  /* Users */
  app.get('/users', authBearer(), C.Users.list);
  app.post('/users', authBearer(), C.Users.create);
  app.get('/users/:userId', authBearer(), C.Users.find);
  app.put('/users/:userId', authBearer(), C.Users.update);
  app.delete('/users/:userId', authBearer(), C.Users.destroy);

  /* Tests */
  app.get('/tests', C.Tests.list);
  app.get('/tests/custom-method', C.Tests.customMethod); // Should be placed before other requests with dynamic values
  app.post('/tests', C.Tests.create);
  app.get('/tests/:id', C.Tests.find);
  app.patch('/tests/:id', C.Tests.update);
  app.put('/tests/:id', C.Tests.update);
  app.delete('/tests/:id', C.Tests.destroy);

  /* Canonical Items */
  app.get('/canonical', C.CanonicalItems.list);
  app.post('/canonical/', C.CanonicalItems.create);
  app.get('/canonical/:id', C.CanonicalItems.find);
  app.put('/canonical/:id', C.CanonicalItems.update);
  app.delete('/canonical/:id', C.CanonicalItems.destroy);

  /* Items */
  app.get('/users/:userId/items', authBearer(), C.Items.list);
  app.get('/items/:id', authBearer(), C.Items.find);
  app.put('/items/:id', authBearer(), C.Items.update);
  app.delete('/items/:id', authBearer(), C.Items.destroy);

  /* Advanced Items */
  app.post('/items', authBearer(), C.Items.createWithAssoc);

  /* Test get items with associations */
  app.get('/assoc', C.Assoc.list);
  /* Test get user-meta and associated user */
  app.get('/user-meta', C.UserMeta.list);

  /* WARNING! DON'T GO TO THIS ROUTE UNLESS YOU KNOW WHAT YOU'RE DOING */
  app.get('/algolia', C.AlgoliaSync.sync);
};
