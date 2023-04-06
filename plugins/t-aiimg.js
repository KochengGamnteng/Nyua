// • By Zyko-MD

import fetch from 'node-fetch'
let handler = async (m, { conn, text, command, args }) => {
if (!args[0]) throw `Membuat gambar dari AI.\n\nContoh:\n${command} Wooden house on snow mountain`
  m.reply('mencari')
  let res = `https://api.lolhuman.xyz/api/dall-e?apikey=${global.lolkey}&text=${text}`
  
  conn.sendButton(m.chat, 'ai image result', 'ai image', res, [['Back To Menu', `.donasi`]], m)
  
}
handler.help = ['ai-image', 'aidraw']
handler.tags = ['fun']
handler.command = /^(ai-image|aidraw)$/i
handler.limit = false

export default handler