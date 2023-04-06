import fetch from 'node-fetch'
let handler  = async (m, { conn, text, usedPrefix, command }) => {
  let ddd = await fetch(`https://api.lolhuman.xyz/api/upperlower?apikey=${global.lolkey}&text=${text}`)
  if (!text) throw `Use example ${usedPrefix}${command} jangan lupa donasi`
  let pp = 'https://telegra.ph/file/2eeeae6928d2e2b59ec4b.jpg'
  let f = await ddd.json()
let anu =`
${f.result}
`
  conn.sendButton(m.chat, '*–––––『BESAR KECIL』–––––*', anu, pp, [
[`BESAR KECIL`, `.besarkecil`],
], m, {asLocation: true})
}

handler.help = ['besarkecil']
handler.tags = ['game']
handler.command = /^(besarkecil)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler