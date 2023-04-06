let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '5'
let sn = '10'
let ss = '20'
let sp = '35'
let sv = '25'
//premium
let ph = '5'
let pn = '15'
let pp = '25'
let pv = '35'
let ppm = '35'
//jasa run
let ri = '25'
let pk = '30'
let cikiwir = `
〈𝗛𝗔𝗥𝗚𝗔〉
➜ᴘᴀᴋᴇᴛ ʜᴇᴍᴀᴛ
5ᴋ 1ɢᴄ 14 ʜᴀʀɪ

➜ᴘᴀᴋᴇᴛ ɴᴏʀᴍᴀʟ
10ᴋ 1ɢᴄ 30 ʜᴀʀɪ

➜ᴘᴀᴋᴇᴛ ᴘᴇʀᴍᴀɴᴇɴ
50ᴋ ɢᴄ sᴇᴘᴜᴀsɴʏᴀ ᴘᴇʀᴍᴀɴᴇɴ

➜ᴘᴇʀᴘᴀɴᴊᴀɴɢ ʙᴀsɪᴄ ᴅᴀɴ ʟɪᴛᴇ
5ᴋ
▌│█║▌║▌║║▌║▌║█│▌`
let info = `
〈𝗦𝗘𝗪𝗔 𝗕𝗢𝗧〉

➜ᴘɪʟɪʜ ʙᴜᴛᴛᴏɴ ᴅɪ ʙᴀᴡᴀʜ ᴜɴᴛᴜᴋ sᴇᴡᴀ ʙᴏᴛ
➜ᴊɪᴋᴀ sᴜᴅᴀʜ ᴍᴇᴍɪʟɪʜ ᴀᴋᴀɴ ᴅɪ ᴋᴇ ᴋɪʀɪᴍ ᴏᴛᴏᴍᴀᴛɪs ᴋᴇ ᴏᴡɴᴇʀ
➜ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ɴɪᴀᴛᴀɴ ᴍᴇᴍʙᴇʟɪ ᴛɪᴅᴀᴋ ᴜsᴀʜ ᴋʟɪᴋ

➜ʙᴀɴɢ ᴀᴍᴀɴ ɢᴀ?: ᴀᴍᴀɴ ᴅᴏɴɢ ᴘᴀsᴛɪɴʏᴀ
➜ᴘᴀʏᴍᴇɴᴛ ɴʏᴀ ᴀᴘᴀ ᴀᴊ ʙɢ?: ᴋʟɪᴋ ʙᴜᴛᴛᴏɴ ᴅɪ ʙᴀᴡᴀʜ ʏʜ`
const sections = [
   {
	title: `${htjava} SEWA ✦-------`,
	rows: [
	    {title: "➜ᴘᴀᴋᴇᴛ ʜᴇᴍᴀᴛ", rowId: '.order *Paket:* 5K • Sewa', description: 'PRICE: ' + sh + 'k (14 Hari)' },
	    {title: "➜ᴘᴀᴋᴇᴛ ɴᴏʀᴍᴀʟ", rowId: '.order *Paket:* 10K • Sewa', description: 'PRICE: ' + sn + 'k (1 bulan)' },
	{title: "➜ᴘᴀᴋᴇᴛ ᴘᴇʀᴍᴀɴᴇɴ", rowId: '.order *Paket:* 25K • Sewa', description: 'PRICE: ' + sv + 'k (Permanen)' },
	]
    }, {
    title: `${htjava} PAYMENT AND OWNER ✦-------`,
	rows: [
	    {title: "➜ᴘᴀʏᴍᴇɴᴛ", rowId: '.payment' },
	 {title: "➜ᴏᴡɴᴇʀ", rowId: '.owner' },
	]
    },
]

const listMessage = {
  text: info,
  footer: cikiwir,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewabot2)$/i

export default handler