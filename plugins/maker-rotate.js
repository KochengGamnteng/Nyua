import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'

let handler = async (m, { conn, command, usedPrefix }) => { 
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Kirim foto yang ingin di rotate dengan caption *${usedPrefix}${command}* atau reply medianya`
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif|webp)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  let api = await API('lol', '/api/editor/flip', { img: link }, 'apikey')
  await conn.sendFile(m.chat, api, 'anime.jpg', 'DONE', m)  
}
handler.help = ['rotate <media>']
handler.tags = ['maker']
handler.command = /^(rotate|putarfoto)$/i

export default handler