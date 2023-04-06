import fetch from 'node-fetch'
let handler  = async (m, { conn, text, usedPrefix, command }) => {
  let ddd = await fetch(`https://api.lolhuman.xyz/api/artinama?apikey=${global.lolkey}&nama=${text}`)
  if (!text) throw `Use example ${usedPrefix}${command} kocheng`
  let kocheng = text
  let pp = 'https://telegra.ph/file/a4e39a02f8b4d604087ff.jpg'
  let f = await ddd.json()
let anu =`
arti nama ${kocheng} adalah

${f.result}
`
  conn.sendButton(m.chat, '*–––––『 NAMAMU 』–––––*', anu, pp, [
[`ARTI NAMA`, `.artinama`],
], m, {asLocation: true})
}

handler.help = ['artinama']
handler.tags = ['fun']
handler.command = /^(artinama)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler