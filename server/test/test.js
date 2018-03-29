const request = require('supertest'),
  app = require('../app');

describe('#test express app', () => {
  let server = app.listen(9900);
  describe('#test server', () => {
    it('#test GET /api/products', async () => {    
      let res = await request(server)
        .get('/api/products')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        //.expect(200, '接口测试查看返回结果');
    })

    it ('#test Post /api/insertUser', async () => {
      let result = await request(server)
        .post('/api/insertUser') 
        .send({
          userName: 'l',
          firstName: '2',
          lastName: '2',
          passWord: '5',
          status: '1'
        })
        //.expect(200, 'post 提交api测试')
        .expect(200)
    })
  })
})