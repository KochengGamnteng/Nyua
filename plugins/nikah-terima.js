import { areJidsSameUser } from '@adiwajshing/baileys'

let handler = async (m, { conn, text, participants, groupMetadata }) => {
	if(isNaN(text)) {
  	var number = text.split`@`[1]
  } else if(!isNaN(text)) {
  	var number = text
  }

  if(!text && !m.quoted) return conn.reply(m.chat, `Berikan nomor, tag atau balas pesan target.`, m)
  
  if(isNaN(number)) return conn.reply(m.chat, `Nomor yang anda masukan tidak salah!`, m)
  if(number.length > 15) return conn.reply(m.chat, `Format salah!`, m)
  try {
		if(text) {
			var user = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var user = m.quoted.sender
		} else if(m.mentionedJid) {
  		  var user = number + '@s.whatsapp.net'
			}  
		} catch (e) {
  } finally {
    let users = m.isGroup ? participants.find(v => areJidsSameUser(v.jid == user)) : {}
    if(!users) return conn.reply(m.chat, `Target atau Nomor tidak ditemukan, mungkin sudah keluar atau bukan anggota grup ini.`, m)
    if(user === m.sender) return conn.reply(m.chat, `Tidak bisa nikah dengan diri sendiri!`, m)
    if(user === conn.user.jid) return conn.reply(m.chat, `Tidak bisa nikah dengan saya t_t`, m)
    let me = m.sender

    if(global.db.data.users[user].pasturi != m.sender){
      conn.reply(m.chat, `Maaf @${user.split('@')[0]} tidak sedang ingin menikahi anda`, m, { contextInfo: { mentionedJid: [user]}})
    }else{
      global.db.data.users[m.sender].pasturi = user
      conn.reply(m.chat, `Selamat anda resmi menikah dengan @${user.split('@')[0]}\n\nSemoga langgeng dan bahagia selalu @${user.split('@')[0]}❤️@${me.split('@')[0]}`,m, { contextInfo: { mentionedJid: [user, me]}})
    }
	}	
}
handler.help = ['terimanikah *@tag*']
handler.tags = ['jadian']
handler.command = /^(terimanikah)$/i
handler.group = true
handler.limit = false
handler.fail = null
export default handler