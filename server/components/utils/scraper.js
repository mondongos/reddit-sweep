const axios = require('axios')
const cheerio = require('cheerio')

const scrape = async (subreddit, filter) => {
  


    const html = await axios.get('https://www.reddit.com/r/TrueHouse/')
    const $ = cheerio.load(html.data)
    const links = $('a')
    const data = []
    $(links).each(function(i, link){
        data.push(link.attribs.href)
      });
      return data
}

module.exports = scrape
