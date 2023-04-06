import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
    const ultah = new Date('November 4 2022 00:00:01')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
    let gam = 'https://telegra.ph/file/88d635fa6f14ae67ec7f6.jpg'
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 let kon = `${totalf}`.trim()
 await conn.sendButton(m.chat, '*TOTAL FITUR SAAT INI*', kon, gam, [
[`BACK TO MENU`, `.menu`],
[`DONASI BUAT BOT`, `.donasi`]
], m, {asLocation: true})
}


handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']
export default handler