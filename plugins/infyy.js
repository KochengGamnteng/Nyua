import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
const ftroli = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 999999,
    status: 404,
    surface : 404,
    message: `owner`, 
    orderTitle: ``,
    thumbnail: await conn.resize(await (await fetch('https://telegra.ph/file/8a1c663c84751c10baf65.jpg')).buffer(), 300, 200) //Gambarnye

    }
    }
    }
let info = `
▶︎ʜᴀɪ ᴋᴀᴄᴋ *${name}*, ᴍᴀᴜ ᴛᴀᴜ ᴛᴇɴᴛᴀɴɢ ᴀᴘᴀ?
▶︎ᴋʟɪᴋ ʙᴜᴛᴛᴏɴ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪ ᴜɴᴛᴜᴋ ɪɴғᴏ sᴛᴀғғ`
const sections = [
   {
    title: `${htjava} ᴍᴏᴅᴇʀᴀᴛᴏʀ ᴀɴᴅ ɪɴғᴏ ✦-------`,
	rows: [
	 {title: "ᴍᴏᴅᴇʀᴀᴛᴏʀ ʙᴏᴛ", rowId: '.moderator', description: 'ᴍᴏᴅᴇʀᴀᴛᴏʀ ғʀᴏᴍ ʙᴏᴛ ᴋᴏᴄʜᴇɴɢ' },
  {title: "ᴏᴡɴᴇʀ ɪɴғᴏʀᴍᴀᴛɪᴏɴ", rowId: '.infoowner', description: 'ɪɴғᴏʀᴍᴀᴛɪᴏɴ ᴏᴡɴᴇʀ' },
	]
    },
]

const listMessage = {
  text: info,
  footer: wm,
  title: wm,
  buttonText: "ᴍᴏᴅᴇʀᴀᴛᴏʀ ᴀɴᴅ ɪɴғᴏ",
  sections
}

if (command == 'infir') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;Arifzyn\nNICKNAME:ɪᴛᴜ ᴏᴡɴᴇʀ sᴀʏᴀ ᴋᴀᴄᴋ\nORG:ᴅᴏᴅᴏʟᴢᴏғᴄ\nTITLE:soft\nitem1.TEL;waid=6281230926688:+62 812-3092-6688\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://s.id/Cerdasin62\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:wudysoft@mail.com\nitem3.X-ABLabel:💌 Mail Owner HinataBot\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🔖 5 Agustus \nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: ftroli })
let caption = `ʜᴀɪ ᴋᴀᴄᴋ *${name} @${who.split("@")[0]}*, ɪɴɪ ɴᴏᴍᴇʀ ᴏᴡɴᴇʀ sᴀʏᴀ ʏᴀᴋ`
    await conn.sendMessage(m.chat, listMessage, { quoted: fkontak})
}
if (command == 'moderatoruu') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;Arifzyn\nNICKNAME:ɪᴛᴜ ᴏᴡɴᴇʀ sᴀʏᴀ ᴋᴀᴄᴋ\nORG:ᴍᴏᴅᴇʀᴀᴛᴏʀ ʙᴏᴛ\nTITLE:soft\nitem1.TEL;waid=6289512696170:+62 895-1269-6170\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://s.id/Cerdasin62\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:wudysoft@mail.com\nitem3.X-ABLabel:💌 Mail Owner HinataBot\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🔖 5 Agustus \nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: ftroli })
let captin = `ʜᴀɪ ᴋᴀᴄᴋ *${name}*, ɪɴɪ ᴀᴅᴀʟᴀʜ ᴍᴏᴅᴇʀᴀᴛᴏʀ ʏᴀɴɢ ᴛᴇʟᴀʜ ᴍᴇᴍʙᴀɴᴛᴜ ᴏᴡɴᴇʀ`
    await conn.sendButton(m.chat, captin, author, null, [['ʙᴀᴄᴋ ᴛᴏ ᴍᴇɴᴜ', '.menu']], m, { quoted: ftroli, mentions: conn.parseMention(captin) })
}
if (command == 'pengembanghdh') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${author};;;\nFN:${author}\nORG:${author}\nTITLE:\nitem1.TEL;waid=6281230926688:+62 812-3092-6688\nitem1.X-ABLabel:${author}\nX-WA-BIZ-DESCRIPTION:${htjava} Nih pengembang ku kack yg mengaktifkan aq.\nX-WA-BIZ-NAME:${author}\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: ftroli })
}
if (command == 'creatorhh') {
  try {
  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `👑 Developer Bot `, `🚫 Don't call me 🥺`, `arifofc19@gmail.com`, `🇮🇩 Indonesia`, `🚀 https://rifxz19.github.io/`, `👤 Gada pawang nih senggol dong 😔`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `🔥 Bot WhatsApp 🐣`, `📵 Don't spam/call me 😢`, `Nothing`, `🇮🇩 Indonesia`, `🚀 https://blog.com/Arifzyn/`, `🤖 Hanya bot biasa yang kadang suka eror ☺`]
  ], ftroli)
  await conn.reply(m.chat, `ʜᴀʟᴏ ᴋᴀᴄᴋ! @${m.sender.split(`@`)[0]} ɪᴛᴜ ɴᴏᴍᴇʀ ᴏᴡɴᴇʀ ᴋᴜ, ʙᴏʟᴇ sᴇᴋᴀʟɪᴀɴ ᴅɪ sᴠ ʏᴀ`, sentMsg, {mentions: [m.sender]})
  } catch {
  const sentMsg = await conn.sendContact(m.chat, `${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, m)
  await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor team developerku, jangan di apa-apain ya kak😖`, sentMsg, {mentions: [m.sender]})
  }
  }
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(infir|moderatoruu|pengembanghdh)$/i

export default handler