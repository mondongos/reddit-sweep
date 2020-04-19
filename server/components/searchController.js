const scrape = require('./utils/scraper')

const controller = async (subreddit, filter) => {
    const rawLinks = await scrape(subreddit, filter)
    const filtered = []
    rawLinks.map((link) => {
        (link.includes("reddit") || link.includes(subreddit) || link.includes("/user/")) ? null : filtered.push(link)
    })
    return filtered
}
