let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

handler.before = function (m, { user, isAdmin, isBotAdmin }) {

  if (m.isBaileys && m.fromMe) throw false
  let chat = global.DATABASE.data.chats[m.chat]
  let name = this.getName(m.sender)
  let link = linkRegex.exec(m.text)

  if (chat.antiLinkRendah && link && !isAdmin && !m.isBaileys && m.isGroup && !m.fromMe) {
  if (user.isAdmin || user.isSuperAdmin) return m.reply ('ᴋᴀʀɴᴀ ᴀᴅᴍɪɴ ʙᴏᴛ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴍᴇɴɢʜᴀᴘᴜs ʟɪɴᴋ ɴʏᴀ')
 conn.fakeReply(m.chat, `*「 ʟɪɴᴋ ᴛᴇʀᴅᴇᴛᴇᴋsɪ 」*\nʟɪɴᴋ ɢʀᴜᴘ ᴛᴇʀᴅᴇᴛᴇᴋsɪ ʙᴏᴛ ᴀᴋᴀɴ ᴍᴇɴɢʜᴀᴘᴜs ʟɪɴᴋ ɴʏᴀ ${isBotAdmin ? '' : '\n\n_jadikan bot admin agar bisa menghapus pesan tersebut_'}`, '0@s.whatsapp.net', '*❗ANTILINK RENDAH*', 'status@broadcast')
 let key = {}
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 }
 conn.sendMessage(m.chat, { delete: key })
  ////////// this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  }
}

handler.group = true

export default handler