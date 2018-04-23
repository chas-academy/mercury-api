import { authBearer } from '../lib/Sessions'
import C from '../controllers'

export default (app) => {
  app.get('/', (req, res) => res.status(200).send({
    message: 'Hello from 3-items! I will be updated to include items for testing :)'
  }))

  /* Sessions */
  app.post('/sign-in', C.Sessions.authenticate)
  app.post('/sign-out', authBearer(), C.Sessions.signOut)
  app.get('/verify-token', authBearer(), C.Sessions.verifyToken)

  /* Users */
  app.get('/users', authBearer(), C.Users.list)
  app.post('/users', authBearer(), C.Users.create)
  app.get('/users/:userId', authBearer(), C.Users.find)
  app.put('/users/:userId', authBearer(), C.Users.update)
  app.delete('/users/:userId', authBearer(), C.Users.destroy)

  /* Tests */
  app.get('/tests', C.Tests.list)
  app.get('/tests/custom-method', C.Tests.customMethod) // Should be placed before other requests with dynamic values
  app.post('/tests', C.Tests.create)
  app.get('/tests/:id', C.Tests.find)
  app.patch('/tests/:id', C.Tests.update)
  app.put('/tests/:id', C.Tests.update)
  app.delete('/tests/:id', C.Tests.destroy)

  /* Canonical Items */
  app.get('/canonical', C.CanonicalItems.list);
  // TODO: Add logic to the following routes
  // app.post('/canonical/', C.CanonicalItems.create);
  // app.get('/canonical/:id', C.CanonicalItems.find);
  // app.put('/canonical/:id', C.CanonicalItems.update);
  // app.delete('/canonical/:id', C.CanonicalItems.destroy);

  // TODO: Add routes and logic for Items
  app.get('/items', C.Items.list);
}
