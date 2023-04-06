import fetch from 'node-fetch'
let handler  = async (m, { conn }) => {
  let ddd = await fetch(`https://api.lolhuman.xyz/api/random/nama?apikey=${global.lolkey}`)
  let pp = 'https://telegra.ph/file/fac3f36a4ddd2bdc12979.jpg'
  let f = await ddd.json()
let anu =`
${f.result}
`
  conn.sendButton(m.chat, '*–––––『 BUAT NAMA 』–––––*', anu, pp, [
[`BUAT NAMA`, `.buatnama`],
], m, {asLocation: true})
}

handler.help = ['buatnama']
handler.tags = ['game']
handler.command = /^(buatnama)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler