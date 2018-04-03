/*
 * @Author: jianxi_lin 
 * @Date: 2018-04-02 16:51:36 
 * @Last Modified by: jianxi_lin
 * @Last Modified time: 2018-04-03 17:43:47
 */

 export const RED_REQUEST = 'red/RED_REQUEST';
 export const RED_SUCCESS = 'red/RED_SUCCESS';
 export const RED_FAIL = 'red/RED_FAIL';
 
 export function red() {
     return {
         types: [RED_REQUEST, RED_SUCCESS, RED_FAIL],
         promise: client => client.post(`external`, {
            userPhone: '14782543977',
            channelUrlKey: 'B2EA8E1ABA8B47EA82DB475BA17B517D',
            baseChannelUrlKey: 'B2EA8E1ABA8B47EA82DB475BA17B517D',
            urlKey: '=4F0DB7832ABC466E9C7DBC1FC5AD01A2',
            dparam: '08fd90ce1d0a4eb0ab2cdd7ea065e98e',
            uuid: '00EAA63FA4F368E7009C47F0DE81BC66VlA6z2NuXqxxj9FwpMKUWP7rpBhrp6DCkM0Shmgo3fhteY8RytjkuzbRUUgCl6UZoaH9I5ePbXCLRJG22GnKlt0KYMbz/4FjnhB+TQzZV5Q=',
            originUrl: 'https://activity.waimai.meituan.com/coupon/sharechannel/B2EA8E1ABA8B47EA82DB475BA17B517D',
            from: 'groupmessage',
            platform: '11',
            partner: '162',
            riskLevel: '71',
            _token: 'eJxVjl2PmkAYhf8LF73BLMwAM2KyaRiBFVFxAcWl6QUinzKoMKjQ9L+XbTZpmrzJc87JSd7zi2usEzcDoijC6YRj7agVCBECEgJTEU64+L9MwhhPuGOz17nZDwmJEwUqPz8Dd/R/AySLPyf/lATH+2xYY4HLGbu2M0GIYlbcC9a/PKKCRsULTQrWRfVLfKFCfOmul1po86hJ4jyq66QSCDS0qQE0ok2JjEcN9ZEK0QAmCsD6966p7KR/lU1RJ3gqQY3MZYQMdY51MgfmXNF0EWjwW9pc6GvWjC9o0rZRlnATjhvnUX+cN/L8xeiL7IttkdXcjEuW/b4UwUAHbeem6sqkD/TRvxOjdt9ExTCutlSWjhNs1pXz0LeWcmPz5coU0rC6qhAccI+7enFP/Kiqd7aYkC6zIZTyR3FYustnbu127TsO6fkmS+fMGt6CtyBhBwEkbBmoYDCJ0BAz0CLk6vbS6Lz94aDrXmF478/EXoPSrQKb8ifKR9v7bdqEAG06OCTMoQCmbibZ9sL3DzAtd504lHKMWiaQRS+gYx+llC2cj0vlPZxiqd2uursyja56NNR2rdvD2mC3LMEd6437GIaGNAMgQ6IpYeYd+ZvoyAgqzxyDdqgdqTDLctsKHuNpvOigZGjleR2c+2xttNE09A3g9pmfZZEy3zraM6902zTyQDbD0g4KdWX4qtF0FUpSzPP1csEfT+xePBUcescQXm5nhNW5xKjwJm8ylFjy1pRitFLTfke8DaLlc9012z6MLbUL/K5k07t3OJ9YDnUK0xN/2OvC1hfXl6305LuVLLgaFhTiOva1FF+5338ABCb2fQ=='
         })
     }
 }