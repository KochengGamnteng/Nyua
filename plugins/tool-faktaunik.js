import fetch from 'node-fetch'
let handler  = async (m, { conn }) => {
  let ddd = await fetch('https://recoders-area.caliph.repl.co/api/fakta?apikey='+APIKeys["https://recoders-area.caliph.repl.co"])
  let f = await ddd.json()
let anu =`
────〔 *Fakta Unik* 〕────

${f.result}
`
  conn.sendButton(m.chat, anu, wm, 'Fakta Unik', '.faktaunik', m) 
} 
handler.help = ['fakta unik']
handler.tags = ['internet']
handler.command = /^(fakta|faktaunik)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler