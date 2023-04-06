import fetch from 'node-fetch'
let handler  = async (m, { conn, text, usedPrefix, command }) => {
  let ddd = await fetch(`https://api.lolhuman.xyz/api/bahasapurba?apikey=${global.lolkey}&text=${text}`)
  if (!text) throw `Use example ${usedPrefix}${command} tahu bacem`
  let pp = 'https://telegra.ph/file/7572fc4384fd8b9a0ebf1.jpg'
  let f = await ddd.json()
let anu =`
${f.result}
`
  conn.sendButton(m.chat, '*–––––『 BASA PURBA 』–––––*', anu, pp, [
[`BAHASA PURBA`, `.bahasapurba`],
], m, {asLocation: true})
}

handler.help = ['bahasapurba']
handler.tags = ['game']
handler.command = /^(bahasapurba)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler