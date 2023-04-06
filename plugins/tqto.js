import { createHash } from 'crypto'
import fetch from 'node-fetch'

let handler = async function (m, { text, usedPrefix, command }) {
  const ultah = new Date(`${ultahowner} 00:00:01`)
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
    let mage = 'https://telegra.ph/file/ba1c0e24a7842c4c0b14f.jpg'
let cap = `
─────────────────────
• ɢᴏᴅ
• ᴍʏ ᴏʀᴛᴜ
• ᴅᴏᴅᴏʟᴢ (ᴍᴇ)
• ᴋɪɴɢ ᴏғ ʙᴇᴀʀ
• ɴᴜʀᴜᴛᴏᴍᴏ
• ᴀᴅɪᴡᴀᴊsʜɪɴɢ
• ᴀʀɪғғʙ
• ᴀᴍᴇʟ
• ɪʀᴡᴀɴx
• ᴅᴀᴡɴғʀᴏsᴛʏ
• ʀᴛᴇᴀᴍ1
• ʙᴇɴɪɪsᴍᴀᴇʟ
• ʀᴀᴅɪᴛʏᴀ
• ᴀʟʏᴀᴀxᴢʏ
• ʜᴀᴏʀɪ
• ᴅᴀᴠɪᴅ
• ʀᴏᴢɪ
• ʟᴇᴛᴛᴀ
• ʏᴀɴᴢᴢ
• ғᴜʀǫᴀɴ
• ᴇʟʏᴀs
• ʀᴀsᴇʟ
• xᴛᴇᴀᴍ
• ᴋʜᴀᴇʟ
• ᴀᴛᴇɴᴀʙᴏᴛ
• ʙᴀᴋᴀ ʙᴏᴛᴢ
• ᴢᴇᴇᴏɴᴇ ᴏғᴄ
• ᴢᴇᴋs
• ʀᴇɴᴅʏᴄʀᴀғᴛ
• ᴋʀɪᴢʏɴ ᴏғᴄ
• ɴᴀᴅɪɴ
• ᴍᴜʀsɪᴅ
• ᴊᴀʀᴏᴛ
• ᴛɪᴏ
• ᴀᴄᴀ ᴍɪʀᴀʙᴇʟ
• ʀᴀᴍᴅᴀɴɪ
• ᴘᴇɴʏᴇᴅɪᴀ ʟᴀʏᴀɴᴀɴ ᴀᴘᴜ
• ᴏʀᴀɴɢ ᴏʀᴀɴɢ ʏᴀɴɢ ʙᴇʀᴅᴏɴᴀsɪ
─────────────────────`
    conn.sendButton(m.chat, '*–––––『 ᴛʜᴀɴᴋs ᴛᴏ 』–––––*', cap, mage, [
[`BACK TO MENU`, `.menu`],
[`OWNER`, `.menu`]
], m, {asLocation: true})
}
handler.tags = ['xp']

handler.command = /^(tqto)$/i

export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}