import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
const res = 'https://api.lolhuman.xyz/api/meme/memeindo?apikey=SGWN'
await conn.sendButton(m.chat,`ni`, wm, res, [['next','.randommeme']] ,m)
}
handler.help = ['randommeme']
handler.tags = ['fun']
handler.limit = false
handler.command = /^(randommeme)$/i

export default handler