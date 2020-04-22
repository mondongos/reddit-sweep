const axios = require('axios')
const cheerio = require('cheerio')

const tubeTitle = async (link) => {
    const html = await axios.get(link)
    try {
        const $ = cheerio.load(html.data)
        const links = $('.title')
        const data = []
        $(links).each((i,link) => {
        !link.attribs.title ? null : data.push(link.attribs.title)
        });
        console.log(data[0])
        return data[0]
    } catch (e) {
        console.log(e)
        return e
    }
}

module.exports = tubeTitle