/*//////////////////////////////////

Cretor : Hairul Lana
https://github.com/hairullana 

/*////////////////////////////////*/

let handler = async (m, { conn }) => {
  if (global.db.data.users[m.sender].pasturi == "") return conn.reply(m.chat, `Kamu tidak punya istri`, m)
  if (global.db.data.users[global.db.data.users[m.sender].pasturi].pasturi == m.sender) return conn.reply(m.chat, `Kamu telah menikah dengan @${global.db.data.users[m.sender].pasturi.split('@')[0]}`, m, {contextInfo: {
    mentionedJid: [global.db.data.users[m.sender].pasturi]
  }})
  conn.reply(m.chat, `Kamu sudah mengikhlaskan pernikahan dengan @${global.db.data.users[m.sender].pasturi.split('@')[0]} karena dia tidak memberikan jawaban diterima atau ditolak`, m, {contextInfo: {
    mentionedJid: [global.db.data.users[m.sender].pasturi]
  }})
  global.db.data.users[m.sender].pasturi = ""
}
handler.help = ['ikhlasinnikah']
handler.tags = ['jadian']
handler.command = /^(ikhlasinnikah|ikhlasnikah)$/i
handler.mods = false
handler.premium = false
handler.group = true
handler.fail = null
export default handler