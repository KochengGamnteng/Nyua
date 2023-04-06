import fetch from 'node-fetch'
let handler  = async (m, { conn, text, usedPrefix, command }) => {
  let ddd = await fetch(`https://api.lolhuman.xyz/api/randombahasa?apikey=${global.lolkey}&text=${text}`)
  if (!text) throw `Use example ${usedPrefix}${command} jangan lupa donasi`
  let pp = 'https://telegra.ph/file/0bfe6bc42ccc4220ab17d.jpg'
  let f = await ddd.json()
let anu =`
${f.result}
`
  conn.sendButton(m.chat, '*–––––『 RANDOM 』–––––*', anu, pp, [
[`BAHASA RANDOM`, `.bahasarandom`],
], m, {asLocation: true})
}

handler.help = ['bahasarandom']
handler.tags = ['game']
handler.command = /^(bahasarandom)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler