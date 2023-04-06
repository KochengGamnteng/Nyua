import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
const res = 'https://gxsy.frteamapp.me/api/random/patrick?&apikey=APIKEY'
await conn.sendButton(m.chat,`ni`, wm, res, [['next','.randommeme']] ,m)
}
handler.help = ['patric']
handler.tags = ['fun']
handler.limit = false
handler.command = /^(patrik|patric|patrick)$/i

export default handler