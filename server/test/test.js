const request = require('supertest'),
  app = require('../app')

  var example = require('./httpClient')

describe('#test express app', () => {
  describe('#test server', () => {
    var server = app.listen(9900)
    // it('#test GET /api/products', async () => {    
    //   request(server)
    //     .get('/api/products')
    //     .set('Accept', 'application/json')
    //     .expect('Content-Type', /json/)
    //     //.expect(200, '接口测试查看返回结果');
    // })

    // it ('#test Post /api/insertUser', async () => {
    //   let result = await request(server)
    //     .post('/api/insertUser') 
    //     .send({
    //       userName: 'l',
    //       firstName: '2',
    //       lastName: '2',
    //       passWord: '5',
    //       status: '1'
    //     })
    //     //.expect(200, 'post 提交api测试')
    //     .expect(200)
    // })

    it('#test POST /external', (done) => {
      request(server)
        .post('/external')
        .send({
          userPhone: '14782543977',
          channelUrlKey: 'B2EA8E1ABA8B47EA82DB475BA17B517D',
          baseChannelUrlKey: 'B2EA8E1ABA8B47EA82DB475BA17B517D',
          urlKey: '=4F0DB7832ABC466E9C7DBC1FC5AD01A2',
          dparam: '08fd90ce1d0a4eb0ab2cdd7ea065e98e',
          uuid: '00EAA63FA4F368E7009C47F0DE81BC66VlA6z2NuXqxxj9FwpMKUWP7rpBhrp6DCkM0Shmgo3fhteY8RytjkuzbRUUgCl6UZoaH9I5ePbXCLRJG22GnKlt0KYMbz/4FjnhB+TQzZV5Q=',
          originUrl: 'https://activity.waimai.meituan.com/coupon/sharechannel/B2EA8E1ABA8B47EA82DB475BA17B517D?urlKey=4F0DB7832ABC466E9C7DBC1FC5AD01A2',
          from: 'groupmessage',
          platform: '11',
          partner: '162',
          riskLevel: 71,
          //_token: 'eJxVjl2PmkAYhf8LF73BLMwAM2KyaRiBFVFxAcWl6QUinzKoMKjQ9L+XbTZpmrzJc87JSd7zi2usEzcDoijC6YRj7agVCBECEgJTEU64+L9MwhhPuGOz17nZDwmJEwUqPz8Dd/R/AySLPyf/lATH+2xYY4HLGbu2M0GIYlbcC9a/PKKCRsULTQrWRfVLfKFCfOmul1po86hJ4jyq66QSCDS0qQE0ok2JjEcN9ZEK0QAmCsD6966p7KR/lU1RJ3gqQY3MZYQMdY51MgfmXNF0EWjwW9pc6GvWjC9o0rZRlnATjhvnUX+cN/L8xeiL7IttkdXcjEuW/b4UwUAHbeem6sqkD/TRvxOjdt9ExTCutlSWjhNs1pXz0LeWcmPz5coU0rC6qhAccI+7enFP/Kiqd7aYkC6zIZTyR3FYustnbu127TsO6fkmS+fMGt6CtyBhBwEkbBmoYDCJ0BAz0CLk6vbS6Lz94aDrXmF478/EXoPSrQKb8ifKR9v7bdqEAG06OCTMoQCmbibZ9sL3DzAtd504lHKMWiaQRS+gYx+llC2cj0vlPZxiqd2uursyja56NNR2rdvD2mC3LMEd6437GIaGNAMgQ6IpYeYd+ZvoyAgqzxyDdqgdqTDLctsKHuNpvOigZGjleR2c+2xttNE09A3g9pmfZZEy3zraM6902zTyQDbD0g4KdWX4qtF0FUpSzPP1csEfT+xePBUcescQXm5nhNW5xKjwJm8ylFjy1pRitFLTfke8DaLlc9012z6MLbUL/K5k07t3OJ9YDnUK0xN/2OvC1hfXl6305LuVLLgaFhTiOva1FF+5338ABCb2fQ=='

        })
        .end(function (err, res) {
          if (err) done(err);
          // expect(res.status).to.equal(200)
          done()
        })
    })

    // it ('#测试 httpclient', function() {      
    //   return example().then(result => {
    //     console.log(result);        
    //   }).catch(err => {
    //     console.log('err:' + err);        
    //   })
    // })
  })
})


var obj = {
  userPhone: '14782543977',
  channelUrlKey: 'B2EA8E1ABA8B47EA82DB475BA17B517D',
  baseChannelUrlKey: 'B2EA8E1ABA8B47EA82DB475BA17B517D',
  urlKey: 'E8EDDAAC5F454368B8739E6205178809',
  dparam: '5504bae7f8ef408d9d5d8d86149d647d',
  uuid: '00EAA63FA4F368E7009C47F0DE81BC66VlA6z2NuXqxxj9FwpMKUWP7rpBhrp6DCkM0Shmgo3fhteY8RytjkuzbRUUgCl6UZoaH9I5ePbXCLRJG22GnKlt0KYMbz/4FjnhB+TQzZV5Q=',
  originUrl: 'https://activity.waimai.meituan.com/coupon/sharechannel/B2EA8E1ABA8B47EA82DB475BA17B517D?utm_medium=iOSweb',
  utm_source: 'wm-order',
  utm_fromapp: 'wx',
  platform: '11',
  partner: '162',
  riskLevel: 71,
  _token: 'eJxNUmmPqzYU/S98eF8yHWwWAyNFFYshZBIIYYAk1VPFFiBhX0Oq/vcy86ZqJUvn+vjo+J5r/0W0ekS8QQAAxb8QfbfULEVxtMCzPMNxL0T4fw4ByC6yoHUV4u0PGoEXlmJ/fhLHZf9FIAb8fPmvoqllfSr0RUCkfV93byTph302Zv38OvlZ4WevRZz1g1++hlVBhtVQVyXZpX4bh6lflnFOShQWeQxFSeQlhltqSlmQlUTISSzklN+HvviziKNsKNaZaU9x8OOT6aqhDeO1X9dfbj+GNn+P5zXmsaKIosyqDMvQiJf4JRtGFFiseB4IP65tVay7rEzyuIi7zk/iL7s+bou1mNVpVcbSr85l9Mq8AmWKs0dW4qn4rWqjuNUkhVOxjDhAQxUyMg9lSZQFBEUZqQiJGCIKAiTzqgIxQ0s8LQFRECWMllfgBQlSAPKAATQQKB5wSKB+xfkM8Z3p36u+Dj77XUKupwfxQhDLtIuPZdoL3r/R/8b+G7ssKYk3It7O7t3pn9QsOsdR2Kl9DfzKxPHG1pAlycEwMNFlQh/Brj6LfWBuKte+bm4QxhSgT4FqPWm+h09Gu+Re088O9CjvUGd+JYRpXlvK2XFcWZ+5vXH3tH2tb/Fji4uJbEmqVTZxrsym6FYX+xk4QSonWjhmN+3sWLw133DiQYPtTx/enW+fbTEGSqw9vfLUQ/qkAWP5XkF+9CHpFVpDt2E7DyvkD48CDuMGKNrIG6x3uOYfwq7gihVrcgEZoSEZja1HRqsgyOvi3vtAJVXDcLd6Zb87D/smq8bWDi2gdNg62nkyhcFp6wlRb8POj0YvMEHetuaK3eswduEltt1TrB813ciDiJZdur6OPitcDize2sFJlrA1pU56bN6PloLNNNSbB5DkDdYkFUzHRsV337bl811qlLuqF2crSSQrxYnuOHj/lBuevTAdXT9RumPCibMPO0E/Zqv6fehY3sSVnO97dN9ckkThhObkkX0jAy45cIJCw4o8CP2ciYmRzhfNNhR6N+xFX1anXGwc5RZC8SzWR/Xd8sUmn8YsxYfEuQ7gen0A02SDoRBysPIM8yobT3ol4TF8ileXHRCVfUSkv91VXMQ1Dtkegx3rnt34kIcFILuQepYNiOBAJrMcGlvDBmi/ofzWYW+5iZrTjuOuZYSu1W1c7eHo+nRpies18fc/BKlx7A=='
}