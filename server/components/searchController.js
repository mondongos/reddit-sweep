const scrape = require('./utils/scraper')

const searchController = async (subreddit, filter) => {
    try {
        const rawLinks = await scrape(subreddit, filter)
        const filtered = []
        rawLinks.map((link) => {
            (link.toLowerCase().includes("reddit") || link.toLowerCase().includes(subreddit) || link.toLowerCase().includes("/user/")) ? null : filtered.push(link)
            
        })
        return filtered.reduce((unique, item) => {
            return unique.includes(item) ? unique : [...unique, item]
        }, [])
    } catch(e) {
        return e 
    }
}

module.exports = searchController
