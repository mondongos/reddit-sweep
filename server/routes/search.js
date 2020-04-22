const router = require('express').Router()
const searchController = require('../components/searchController')

router.route('/').post(async(req,res) => {
    let subreddit = req.body.subreddit
    let filter = req.body.filter

    try {
        await searchController(subreddit, filter)
        .then((resolve) => {
            res.send(resolve)
            console.log("get it! ___________", resolve)
        })
    } catch(e) {
        res.send(e)
        console.log(e)
    }
})

module.exports = router