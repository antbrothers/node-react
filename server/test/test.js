const request = require('supertest'),
  app = require('../app')

  var example = require('./httpClient')

  var red = require('./getRed')

  var def = require('../services/redService')

describe('#test express app', () => {
  describe('#test server', () => {
    var server = app.listen(9900)
    // it('#test GET /api/products', async () => {    
    //   request(server)
    //     .get('/api/products')
    //     .set('Accept', 'application/json')
    //     .expect('Content-Type', /json/)
    //     .expect(200, '接口测试查看返回结果');
    // })

    it ('#test Post /api/insertUser', async () => {
      let result = await request(server)
        .post('/api/insertUser') 
        .send({
          userName: 'ye',                
          passWord: '15216761038',
          mobile: '15216761038',
                   
        })
        //.expect(200, 'post 提交api测试')
        .expect(200)
    })

    // it('#test POST /external', (done) => {
    //   request(server)
    //     .post('/external')
    //     .send({
    //       userPhone: '14782543977',
    //       channelUrlKey: 'B2EA8E1ABA8B47EA82DB475BA17B517D',
    //       baseChannelUrlKey: 'B2EA8E1ABA8B47EA82DB475BA17B517D',
    //       urlKey: '=4F0DB7832ABC466E9C7DBC1FC5AD01A2',
    //       dparam: '08fd90ce1d0a4eb0ab2cdd7ea065e98e',
    //       uuid: '00EAA63FA4F368E7009C47F0DE81BC66VlA6z2NuXqxxj9FwpMKUWP7rpBhrp6DCkM0Shmgo3fhteY8RytjkuzbRUUgCl6UZoaH9I5ePbXCLRJG22GnKlt0KYMbz/4FjnhB+TQzZV5Q=',
    //       originUrl: 'https://activity.waimai.meituan.com/coupon/sharechannel/B2EA8E1ABA8B47EA82DB475BA17B517D?urlKey=4F0DB7832ABC466E9C7DBC1FC5AD01A2',
    //       from: 'groupmessage',
    //       platform: '11',
    //       partner: '162',
    //       riskLevel: 71,
    //       //_token: 'eJxVjl2PmkAYhf8LF73BLMwAM2KyaRiBFVFxAcWl6QUinzKoMKjQ9L+XbTZpmrzJc87JSd7zi2usEzcDoijC6YRj7agVCBECEgJTEU64+L9MwhhPuGOz17nZDwmJEwUqPz8Dd/R/AySLPyf/lATH+2xYY4HLGbu2M0GIYlbcC9a/PKKCRsULTQrWRfVLfKFCfOmul1po86hJ4jyq66QSCDS0qQE0ok2JjEcN9ZEK0QAmCsD6966p7KR/lU1RJ3gqQY3MZYQMdY51MgfmXNF0EWjwW9pc6GvWjC9o0rZRlnATjhvnUX+cN/L8xeiL7IttkdXcjEuW/b4UwUAHbeem6sqkD/TRvxOjdt9ExTCutlSWjhNs1pXz0LeWcmPz5coU0rC6qhAccI+7enFP/Kiqd7aYkC6zIZTyR3FYustnbu127TsO6fkmS+fMGt6CtyBhBwEkbBmoYDCJ0BAz0CLk6vbS6Lz94aDrXmF478/EXoPSrQKb8ifKR9v7bdqEAG06OCTMoQCmbibZ9sL3DzAtd504lHKMWiaQRS+gYx+llC2cj0vlPZxiqd2uursyja56NNR2rdvD2mC3LMEd6437GIaGNAMgQ6IpYeYd+ZvoyAgqzxyDdqgdqTDLctsKHuNpvOigZGjleR2c+2xttNE09A3g9pmfZZEy3zraM6902zTyQDbD0g4KdWX4qtF0FUpSzPP1csEfT+xePBUcescQXm5nhNW5xKjwJm8ylFjy1pRitFLTfke8DaLlc9012z6MLbUL/K5k07t3OJ9YDnUK0xN/2OvC1hfXl6305LuVLLgaFhTiOva1FF+5338ABCb2fQ=='

    //     })
    //     .end(function (err, res) {
    //       if (err) done(err);
    //       // expect(res.status).to.equal(200)
    //       done()
    //     })
    // })

    // it ('#测试 httpclient', function() {      
    //   return example().then(result => {
    //     console.log(result);        
    //   }).catch(err => {
    //     console.log('err:' + err);        
    //   })
    // })
    
    // it('#test 红包', function() {
    //   return red({
    //     url: 'https://activity.waimai.meituan.com/coupon/sharechannelredirect/B2EA8E1ABA8B47EA82DB475BA17B517D?urlKey=477F96D5BB4C42D38E9CCDD4DA3B2AE0&state=123&uiId=0&code=003MxfCd1vo7Fr0pPJzd1cMmCd1MxfCW',
    //     mobile: '14782543977'
    //   })      
    // })


    // it ('#test honbao', function() {
    //   return def({
    //     url: 'https://activity.waimai.meituan.com/coupon/sharechannelredirect/B2EA8E1ABA8B47EA82DB475BA17B517D?urlKey=477F96D5BB4C42D38E9CCDD4DA3B2AE0&state=123&uiId=0&code=003MxfCd1vo7Fr0pPJzd1cMmCd1MxfCW',
    //     mobile: '14782543977',
    //     cookie: 'ewxinfo="BCB33F13BA1CEFAF4F0F1F474BEA3266%2F8r9C2SVlqtW%2BZeVcyUoV%2B1AsYhSUYKfC43EpbqBzO41uuth5ClQCUJtTmq3dtrCr403DYjqZ5jI8ByqQgFZ4V5cn%2ByV5ejHdV9JFEWazz4NMmsYxVqAn3hQOkCpCcgLkXFTGcPGmIL6n98%2FFnUQR%2FsNGP8AnCXJSnCBR2AWmNxBuqkwGMky6Fjz0iW2U5wl14bzvQxyvMFzuNPiEr99F0ujMxjQDPYGN8ceTHhNYVwCgA9XdhQ13J3gEpWBkTZUEiV%2B9EDK6ZTTuXQmsG6dIuZjmL6tGFXivKigcjFsUWw%3D"'
    //   })
    // })
  })
})

