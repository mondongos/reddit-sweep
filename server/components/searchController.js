const scrape = require('./utils/scraper')

const searchController = async (subreddit, filter) => {
    try {
        const rawLinks = await scrape(subreddit, filter)
        const filtered = []
        rawLinks.map((link) => {
            (link.includes("reddit") || link.includes(subreddit) || link.includes("/user/")) ? null : filtered.push(link)
        })
        return filtered
    } catch(e) {
        return e 
    }
}

module.exports = searchController
