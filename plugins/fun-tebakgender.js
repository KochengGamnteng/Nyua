import fetch from 'node-fetch'
let handler  = async (m, { conn, text, usedPrefix, command }) => {
  let ddd = await fetch(`https://api.lolhuman.xyz/api/tebakgender?apikey=${global.lolkey}&name=${text}`)
  if (!text) throw `Use example ${usedPrefix}${command} asep`
  let kocheng = text
  let pp = 'https://telegra.ph/file/6e4fc1d71423dabb886e0.jpg'
  let f = await ddd.json()
let anu =`
nama: ${kocheng}
gender: ${f.result.gender}
`
  conn.sendButton(m.chat, '*–––––『 GENDER 』–––––*', anu, pp, [
[`TEBAK GENDER`, `.tebakgender`],
], m, {asLocation: true})
}

handler.help = ['tebakgender']
handler.tags = ['game']
handler.command = /^(tebakgender|tebakkelamin)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler