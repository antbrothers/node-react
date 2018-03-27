const request = require('supertest'),
app = require('../app');

describe('#test express app', () => {
    let server = app.listen(9900);
    describe('#test server', () => {
        it('#test GET /api/products', async () => {        
            let res = await request(server)
                .get('/api/products')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .expect(200, '{"code":200,"message":"请求成功","data":[{"id":"f9f3ec07-4711-46b2-a223-5fb562ca72b0","userName":"linjianxi","firstName":"linjianxi","lastName":"linjianxi","passWord":"14782543977","status":"active","createdAt":"2018-03-27T01:43:57.000Z","updatedAt":"2018-03-27T01:43:57.000Z"}]}');
        })
    })
})