import db from '../lib/database.js'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {

let aki = global.db.data.chats[m.chat]
if (text == 'end') {
		if (!aki.sesi) return m.reply('Anda tidak sedang dalam sesi Akinator')
		aki.sesi = false
		aki.soal = null
		m.reply('Berhasil keluar dari sesi Akinator.')
	} else {
		if (aki.sesi) return conn.reply(m.chat, 'Anda masih berada dalam sesi Akinator', aki.soal)
		try {
let res = await fetch(`https://api.lolhuman.xyz/api/akinator/start?apikey=${global.lolkey}`)
			let anu = await res.json()
			if (anu.status !== 200) throw Error('Emror')
let { server, frontaddr, session, signature, question, progression, step } = anu.result
			aki.sesi = true
			aki.server = server
			aki.frontaddr = frontaddr
			aki.session = session
			aki.signature = signature
			aki.question = question
			aki.progression = progression
			aki.step = step
let title = `*ᴀᴋɪɴᴀᴛᴏʀ ɢᴀᴍᴇ*\n\n${question}\n\n`
    let caption = 'KLIK ANGKA DI BAWAH INI UNTUK MENJAWAB YA'
const sections = [
    {
	title: "KLIK UNTUKK MENJAWAB",
	rows: [
	    {title: "0", rowId: '0', description: 'YA' },
      {title: "1", rowId: '1', description: 'TIDAK' },
	  {title: "2", rowId: '2', description: 'SAYA TIDAK TAU' },
      {title: "3", rowId: '3', description: 'MUNGKIN' },
      {title: "4", rowId: '4', description: 'MUNGKIN TIDAK' },
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

	
	
			let txt = `*ᴀᴋɪɴᴀᴛᴏʀ ɢᴀᴍᴇ*\n\n@${m.sender.split('@')[0]}\n${question}\n\n`
			txt += '0 - Ya\n'
			txt += '1 - Tidak\n'
			txt += '2 - Saya Tidak Tau\n'
			txt += '3 - Mungkin\n'
			txt += '4 - Mungkin Tidak\n\n'
			txt += `cara main: ketikan salah satu angka dia atas dan reply pesan bot nya\n\n`
			txt += `*${usedPrefix + command} end* untuk keluar dari sesi Akinator`
			let soal = await conn.sendMessage(m.chat, listMessage, { text: txt, mentions: [m.sender] }, { quoted: m })
			aki.soal = soal
		} catch (e) {
			console.log(e)
			m.reply('Fitur Error!')
		}
	}
}

handler.command = /^akinators/i

handler.limit = false

export default handler