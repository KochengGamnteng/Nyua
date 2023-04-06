import db from '../lib/database.js'
import fetch from 'node-fetch'
import { somematch } from '../lib/others.js'

const teks = '0 - Ya\n1 - Tidak\n2 - Saya Tidak Tau\n3 - Mungkin\n4 - Mungkin Tidak\n5 - Kembali ke pertanyaan sebelumnya'


export async function before(m) {
if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text) return !0
	let aki = global.db.data.chats[m.chat]
	if (!aki.sesi || m.quoted.id != aki.soal.key.id) return
	if (!somematch(['0','1','2','3','4','5'], m.text)) return this.sendMessage(m.chat, { text: `[!] Jawab dengan angka 1, 2, 3, 4, atau 5\n\n${teks}` }, { quoted: aki.soal })
	let { server, frontaddr, session, signature, question, progression, step } = aki
	if (step == '0' && m.text == '5') return m.reply('Anda telah mencapai pertanyaan pertama')
	let res, anu, soal
	try {
		if (m.text == '5') res = await fetch(`https://api.lolhuman.xyz/api/akinator/back?apikey=${global.lolkey}&server=${server}&session=${session}&signature=${signature}&step=${step}`)
		else res = await fetch(`https://api.lolhuman.xyz/api/akinator/answer?apikey=${global.lolkey}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&step=${step}&answer=${m.text}`)
		anu = await res.json()
		if (anu.status != '200') {
			aki.sesi = false
			aki.soal = null
			return m.reply('Akinator session expired.')
		}
		anu = anu.result
		if (anu.name) {
			await this.sendMessage(m.chat, { image: { url: anu.image }, caption: `*ᴀᴋɪɴᴀᴛᴏʀ ᴀɴsᴡᴇʀ*\n\nDia adalah *${anu.name}*\n_${anu.description}_`, mentions: [m.sender] }, { quoted: m })
			aki.sesi = false
			aki.soal = null
		} else {
		
		let title = `*ᴀᴋɪɴᴀᴛᴏʀ ɢᴀᴍᴇ*\n•step: ${anu.step} ( ${anu.progression.toFixed(2)} % )\n\n•soal: ${anu.question}`
    let caption = 'KLIK ANGKA DI BAWAH INI UNTUK MENJAWAB YA'
const sections = [
   {
	title: "KLIK UNTUK MENJAWAB",
	rows: [
	    {title: "0", rowId: '0', description: 'YA' },
      {title: "1", rowId: '1', description: 'TIDAK' },
	  {title: "2", rowId: '2', description: 'SAYA TIDAK TAU' },
      {title: "3", rowId: '3', description: 'MUNGKIN' },
      {title: "4", rowId: '4', description: 'MUNGKIN TIDAK' },
      {title: "5", rowId: '5', description: 'KEMBALI KE PERTANYAAN SEBELUMNYA' },
	]
    },
]

const listMessage = {
  text: title,
  footer: caption,
  title: null,
  buttonText: "KLIK UNTUK MENJAWAB",
  sections
}
			soal = await this.sendMessage(m.chat, listMessage, { text: `ðŸŽ® *Akinator* ðŸŽ®\n_step ${anu.step} ( ${anu.progression.toFixed(2)} % )_\n\n@${m.sender.split('@')[0]}\n    ${anu.question}\n\n${teks}`, mentions: [m.sender] }, { quoted: m })
			aki.soal = soal
			aki.step = anu.step
			aki.progression = anu.progression
		}
	} catch (e) {
		aki.sesi = false
		aki.soal = null
		m.reply('Fitur Error!')
	}
	return !0
}