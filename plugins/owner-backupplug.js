import fs from 'fs'
import cp, { exec as _exec } from 'child_process'
import { promisify } from 'util'
let exec = promisify(_exec).bind(cp)
let handler = async (m, { conn, isOwner, command, text }) => {
  if (global.conn.user.jid != conn.user.jid) return
  m.reply('Executing...')
  let o
  try {
    o = await exec('zip -r miniwon.zip plugins ' + text.trimEnd())
  } catch (e) {
    o = e
  } finally {
    let { stdout, stderr } = o
    if (stdout.trim()) m.reply(stdout)
    if (stderr.trim()) m.reply(stderr)
  }
    m.reply('Tunggu Sebentar, Sedang mengambil file Database')
    let sesi = await fs.readFileSync('./miniwon.zip')
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'miniwon.zip' }, { quoted: m })
}
handler.help = ['backup|bckp']
handler.tags = ['host']
handler.command = /^(backupplug)$/i

handler.rowner = true 

export default handler

//kalau ga work coba "npm install zip / sudo apt install zip {untuk pengguna vps}"
//ini watermark jan di hapus :) made by SEGAWON