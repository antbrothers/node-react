
/*
 * @Author: jianxi_lin 
 * @Date: 2018-04-02 16:51:36 
 * @Last Modified by: jianxi_lin
 * @Last Modified time: 2018-04-04 11:05:10
 */

export const RED_REQUEST = 'red/RED_REQUEST';
export const RED_SUCCESS = 'red/RED_SUCCESS';
export const RED_FAIL = 'red/RED_FAIL';

export function red() {
    var params = new URLSearchParams();
    params.append('userPhone', '14782543977')
    params.append('channelUrlKey', 'B2EA8E1ABA8B47EA82DB475BA17B517D')
    params.append('baseChannelUrlKey', 'B2EA8E1ABA8B47EA82DB475BA17B517D')
    params.append('urlKey', '033E0EAB121144C384D3132B7BFA0D7E')
    params.append('dparam', '08fd90ce1d0a4eb0ab2cdd7ea065e98e')
    params.append('uuid', '00EAA63FA4F368E7009C47F0DE81BC66VlA6z2NuXqxxj9FwpMKUWP7rpBhrp6DCkM0Shmgo3fhteY8RytjkuzbRUUgCl6UZoaH9I5ePbXCLRJG22GnKlt0KYMbz/4FjnhB+TQzZV5Q='),
        params.append('originUlr', 'https://activity.waimai.meituan.com/coupon/sharechannel/B2EA8E1ABA8B47EA82DB475BA17B517D')
    params.append('from', 'groupmessage')
    params.append('platform', '11')
    params.append('partner', '162')
    params.append('riskLevel', '71')
    params.append('_token', 'eJxVjl2PmkAYhf8LF73BLMwAM2KyaRiBFVFxAcWl6QUinzKoMKjQ9L+XbTZpmrzJc87JSd7zi2usEzcDoijC6YRj7agVCBECEgJTEU64+L9MwhhPuGOz17nZDwmJEwUqPz8Dd/R/AySLPyf/lATH+2xYY4HLGbu2M0GIYlbcC9a/PKKCRsULTQrWRfVLfKFCfOmul1po86hJ4jyq66QSCDS0qQE0ok2JjEcN9ZEK0QAmCsD6966p7KR/lU1RJ3gqQY3MZYQMdY51MgfmXNF0EWjwW9pc6GvWjC9o0rZRlnATjhvnUX+cN/L8xeiL7IttkdXcjEuW/b4UwUAHbeem6sqkD/TRvxOjdt9ExTCutlSWjhNs1pXz0LeWcmPz5coU0rC6qhAccI+7enFP/Kiqd7aYkC6zIZTyR3FYustnbu127TsO6fkmS+fMGt6CtyBhBwEkbBmoYDCJ0BAz0CLk6vbS6Lz94aDrXmF478/EXoPSrQKb8ifKR9v7bdqEAG06OCTMoQCmbibZ9sL3DzAtd504lHKMWiaQRS+gYx+llC2cj0vlPZxiqd2uursyja56NNR2rdvD2mC3LMEd6437GIaGNAMgQ6IpYeYd+ZvoyAgqzxyDdqgdqTDLctsKHuNpvOigZGjleR2c+2xttNE09A3g9pmfZZEy3zraM6902zTyQDbD0g4KdWX4qtF0FUpSzPP1csEfT+xePBUcescQXm5nhNW5xKjwJm8ylFjy1pRitFLTfke8DaLlc9012z6MLbUL/K5k07t3OJ9YDnUK0xN/2OvC1hfXl6305LuVLLgaFhTiOva1FF+5338ABCb2fQ==')
    params.append('ewxinfo', "BCB33F13BA1CEFAF4F0F1F474BEA3266%2F8r9C2SVlqtW%2BZeVcyUoV%2B1AsYhSUYKfC43EpbqBzO41uuth5ClQCUJtTmq3dtrCr403DYjqZ5jI8ByqQgFZ4V5cn%2ByV5ejHdV9JFEWazz4NMmsYxVqAn3hQOkCpCcgLkXFTGcPGmIL6n98%2FFnUQR%2FsNGP8AnCXJSnCBR2AWmNxBuqkwGMky6Fjz0iW2U5wl14bzvQxyvMFzuNPiEr99F0ujMxjQDPYGN8ceTHhNYVwCgA9XdhQ13J3gEpWBkTZUEiV%2B9EDK6ZTTuXQmsG6dIuZjmL6tGFXivKigcjFsUWw%3D")
    params.append('ewxshinfo', "B39C1452BA46C1D0861B3D5CEC93FFFEKV9e0o%2BNfdFulZCioHjMgPYfAtvjR26Auv9tKtuPS%2BmHIYYLfZsR7zw7Tm2J2fUt0dbvp2i7iOjxLcFcDckYNminr3x2y1KXwg7SRuJcJdAH75%2FsvDknq5NKQ3X7icWl0WkW%2FChKvYIh%2Bup7HCg65AYCpjL7y8U5IbrA6PP4TFZhAfa%2BXpHnV%2FGosb%2BTuDeq02u6D6Mr9X5%2Bd8QsB5JfGN3fgcOD8%2FuM5ouyglreAA0%2Bh%2B8nUxDKDftnET53%2B6wjP%2FNBRxnc%2FyBeNbtB1bKWp3u9L5Yv%2FVuNDAOuTYJtlP%2FVN9M9nQ0cX7McVPoKEvFS")

    return {
        types: [RED_REQUEST, RED_SUCCESS, RED_FAIL],
        promise: client => client.post(`external`, params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'origin': 'https://activity.waimai.meituan.com',
                'referer': 'https://activity.waimai.meituan.com',
                'user-agent': 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T MicroMessenger) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.23 Mobile Safari/537.36'
            }
        })
    }
}