import { areJidsSameUser } from '@adiwajshing/baileys'

let handler = async (m, { conn, text, participants, groupMetadata }) => {
	if(isNaN(text)) {
  	var number = text.split`@`[1]
  } else if(!isNaN(text)) {
  	var number = text
  }

  if(!text && !m.quoted) return conn.reply(m.chat, `Masukan nomor, tag atau balas pesan target.`, m)
  
  if(isNaN(number)) return conn.reply(m.chat, `Nomor yang anda masukan salah!`, m)
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
    if(user === m.sender) return conn.reply(m.chat, `Tidak bisa berpacaran dengan diri sendiri!`, m)
    if(user === conn.user.jid) return conn.reply(m.chat, `*Tidak bisa berpacaran dengan saya t_t`, m)
    
    if(global.db.data.users[user].pasturi != m.sender){
      conn.reply(m.chat,`Maaf @${user.split('@')[0]} tidak sedang ingin menikahi anda`,m,{contextInfo: {
        mentionedJid: [user]
      }})
    }else{
      global.db.data.users[user].pasturi = ""
      conn.reply(m.chat,`Anda baru saja menolak ajakan nikah dari @${user.split('@')[0]}`,m,{contextInfo: {
        mentionedJid: [user]
      }})
    }
	}	
}
handler.help = ['tolaknikah *@tag*']
handler.tags = ['jadian']
handler.command = /^(tolaknikah)$/i
handler.mods = false
handler.premium = false
handler.group = true
handler.limit = false
handler.fail = null
export default handler