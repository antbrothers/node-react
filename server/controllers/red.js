var redService = require('../services/redService')
module.exports = {
    'POST /api/getRed': async (req, res, next) => {
        var dt = redService(
            {
                // url: 'https://activity.waimai.meituan.com/coupon/sharechannelredirect/B2EA8E1ABA8B47EA82DB475BA17B517D?urlKey=477F96D5BB4C42D38E9CCDD4DA3B2AE0&state=123&uiId=0&code=003MxfCd1vo7Fr0pPJzd1cMmCd1MxfCW',
                url: 'https://activity.waimai.meituan.com/coupon/sharechannelredirect/B2EA8E1ABA8B47EA82DB475BA17B517D?urlKey=F10DC93CF0374537AE6786F2A660AB10&state=123&uiId=0&code=0039lvvt0Tavke1D5rtt0cbGvt09lvvP',
                mobile: '14782543977',
                cookie: 'ewxinfo="BCB33F13BA1CEFAF4F0F1F474BEA3266%2F8r9C2SVlqtW%2BZeVcyUoV%2B1AsYhSUYKfC43EpbqBzO41uuth5ClQCUJtTmq3dtrCr403DYjqZ5jI8ByqQgFZ4V5cn%2ByV5ejHdV9JFEWazz4NMmsYxVqAn3hQOkCpCcgLkXFTGcPGmIL6n98%2FFnUQR%2FsNGP8AnCXJSnCBR2AWmNxBuqkwGMky6Fjz0iW2U5wl14bzvQxyvMFzuNPiEr99F0ujMxjQDPYGN8ceTHhNYVwCgA9XdhQ13J3gEpWBkTZUEiV%2B9EDK6ZTTuXQmsG6dIuZjmL6tGFXivKigcjFsUWw%3D"'
            }
            
        )
    }
}