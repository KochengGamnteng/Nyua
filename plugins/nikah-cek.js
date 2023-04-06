let handler = async (m, { conn, usedPrefix, text }) => {
  function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }
  let pasturi = global.db.data.users[m.sender].pasturi
	
	text = no(text)
  
  if(isNaN(text)) {
		var number = text.split`@`[1]
	}else if(!isNaN(text)) {
		var number = text
	}

  if(number.length > 15 || (number.length < 9 && number.length > 0)) return conn.reply(m.chat, `Maaf, Nomor yang anda masukan salah!`, m)

  if (!text && !m.quoted){
    var user = m.sender
    var orang = "Kamu"
  }else if(text) {
    var user = number + '@s.whatsapp.net'
    var orang = "Orang yang kamu tag"
  } else if(m.quoted.sender) {
    var user = m.quoted.sender
    var orang = "Orang yang kamu balas"
  } else if(m.mentionedJid) {
    var user = number + '@s.whatsapp.net'
    var orang = "Orang yang kamu tag"
  }

  if (typeof global.db.data.users[user] == "undefined"){
    return m.reply("Target tidak terdaftar di dalam database!")
  }

  if (typeof global.db.data.users[global.db.data.users[user].pasturi] == "undefined" && global.db.data.users[user].pasturi != ""){
    return m.reply("Target tidak terdaftar di dalam database!")
  }

  if (global.db.data.users[user].pasturi == "") {
    conn.reply(m.chat, `${orang} tidak memiliki istri dan tidak sedang menikahi siapapun\n\n*Ketik .nikah @user untuk mengajak nikah seseorang*`, m)
  }else if (global.db.data.users[global.db.data.users[user].pasturi].pasturi != user){
    conn.reply(m.chat, `${orang} sedang menunggu jawaban dari @${global.db.data.users[user].pasturi.split('@')[0]} karena sedang tidak diterima atau di tolak\n\nKetik *${usedPrefix}ikhlasin* untuk mengikhlaskan pernikahan mu!`, m,{contextInfo: {
      mentionedJid: [global.db.data.users[user].pasturi]
    }})
  }else {
    conn.reply(m.chat, `${orang} sedang menjalani hubungan dengan @${global.db.data.users[user].pasturi.split('@')[0]}`, m,{contextInfo: {
      mentionedJid: [global.db.data.users[user].pasturi]
    }})
  }
}
handler.help = ['cekistri']
handler.tags = ['jadian']
handler.command = /^(cekistri)$/i

export default handler