const router = require('express').Router()

router.route('/search').post(async(req,res) => {
    let subreddit = req.body.subreddit
    let filter = req.body.filter

    try {
        // function 
    } catch(e) {
        // error
    }
})

module.exports = router