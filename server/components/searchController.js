const scrape = require('./utils/scraper')
const tubeTitle = require('./utils/tubeTitle')

const searchController = async(subreddit, filter) => {
    try {
        const rawLinks = await scrape(subreddit, filter)
        let filtered = []
        let filtered2 = []
        rawLinks.map((link) => {
            (link.toLowerCase().includes("reddit") || link.toLowerCase().includes(subreddit) || link.toLowerCase().includes("/user/")) || link === "/"
                ? null
                : filtered.push(link)
        })
        return filtered2 = filtered.reduce((unique, item) => {
            return unique.includes(item)
                ? unique
                : [
                    ...unique,
                    item
                ]
        }, [])


    } catch (e) {
        return e
    }
}

module.exports = searchController
