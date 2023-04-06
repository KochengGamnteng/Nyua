import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let _pp = './src/avatar_contact.png'
  let user = db.data.users[m.sender]
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let pp = await conn.profilePictureUrl(who).catch(_ => './src/avatar_contact.png')
    let { premium, level, limit, exp, lastclaim, registered, regTime, age } = global.db.data.users[m.sender]
    let username = conn.getName(who)
    let name = conn.getName(who)
    let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let str = `
〈ＲＵＬＥＳ〉

➜ᴊᴀɴɢᴀɴ sᴘᴀᴍ ʙᴏᴛ ɴʏᴀ
➜ᴛɪᴅᴀᴋ ʙᴏʟᴇʜ ᴍᴇɴɢʜɪɴᴀ ʙᴏᴛ ᴀᴛᴀᴜ ᴏᴡɴᴇʀ
➜ᴊᴀɴɢᴀɴ ᴋɪʀɪᴍ ᴠɪʀᴛᴇx ᴅɪ ʙᴏᴛ
➜ᴊɪᴋᴀ ʙᴏᴛ ᴛɪᴅᴀᴋ ᴍᴇʀᴇsᴘᴏɴ ᴛᴜɴɢɢᴜ ʙᴇʙᴇʀᴀᴘᴀ ᴅᴇᴛɪᴋ
➜ᴊɪᴋᴀ ᴀᴅᴀ ᴍᴀsᴀʟᴀʜ ʙɪsᴀ ʜᴜʙᴜɴɢɪ ᴏᴡɴᴇʀ

➜ᴏᴡɴᴇʀ ᴛɪᴅᴀᴋ ᴍᴇʀᴇsᴘᴏɴ? ᴄʜᴀᴛ ʟᴀɢɪ ᴏᴡɴᴇʀ ɴʏᴀ`.trim()
    conn.sendButton(m.chat, '*–––––『 ＲＵＬＥＳ 』–––––*', str, pp, [
[`ʙᴀᴄᴋ ᴛᴏ ᴍᴇɴᴜ`, `.menu`],
[`ᴄᴏɴᴛᴀᴋ ᴏᴡɴᴇʀ`, `.owner`]
], m, {asLocation: true})
}
handler.command = /^rules|aturan$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['┃ ', ye, ' *Years 🗓️*\n', '┃ ', mo, ' *Month 🌙*\n', '┃ ', d, ' *Days ☀️*\n', '┃ ', h, ' *Hours 🕐*\n', '┃ ', m, ' *Minute ⏰*\n', '┃ ', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}