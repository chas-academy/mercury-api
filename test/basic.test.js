import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/server';

chai.use(chaiHttp);
const expect = chai.expect;

describe('/tests route', () => {
  it('should successfully get the route', (done) => {
    // TODO: Make it so chai.request(server) works instead of ('http://localhost:7770)
    chai
      .request('http://localhost:7770')
      .get('/tests')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
  });
});
