import fetch from 'node-fetch'
let handler  = async (m, { conn, text, usedPrefix, command }) => {
  let ddd = await fetch(`https://api.lolhuman.xyz/api/primbon/artimimpi?apikey=${global.lolkey}&query=${text}`)
  if (!text) throw `Use example ${usedPrefix}${command} kaya`
  let kocheng = text
  let pp = 'https://telegra.ph/file/ab3d7af476ab72bfa47bc.jpg'
  let f = await ddd.json()
let anu =`
arti mimpi ${kocheng} adalah

${f.result}
`
  conn.sendButton(m.chat, '*–––––『 MIMPIMU 』–––––*', anu, pp, [
[`ARTI MIMPI`, `.artimimpi`],
], m, {asLocation: true})
}

handler.help = ['artimimpi']
handler.tags = ['fun']
handler.command = /^(artimimpi)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler