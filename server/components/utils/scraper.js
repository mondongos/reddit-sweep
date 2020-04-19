const axios = require('axios')
const cheerio = require('cheerio')

const scrape = async (subreddit, filter) => {
  const subredditLink = "https://www.reddit.com/" + subreddit + "/top/?t=" + filter
  const html = await axios.get(subredditLink)
  try {
    const $ = cheerio.load(html.data)
    const links = $('a')
    const data = []
    $(links).each((i,link) => {
      data.push(link.attribs.href)
    });
    return data
  } catch (e) {
    return e
  }
}

module.exports = scrape