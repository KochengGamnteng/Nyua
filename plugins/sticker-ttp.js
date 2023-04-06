import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text }) => {
    if (!text) return m.reply(`.ttp halo`)
    let stiker = await sticker(null, global.API(`https://api.lolhuman.xyz/api/ttp?apikey=sgwn&text=${text}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
}
handler.help = ['ttp <teks>']
handler.tags = ['sticker']

handler.command = /^ttp$/i

export default handler