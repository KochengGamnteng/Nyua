let handler = async (m, { conn }) => {
  var ayg = global.db.data.users[m.sender]
  var beb = global.db.data.users[global.db.data.users[m.sender].pasturi]

  if(ayg.pasturi == ""){
    return conn.reply(m.chat,`Anda tidak memiliki pasangan.`,m)
  }
  if (typeof beb == "undefined"){
    conn.reply(m.chat,`Berhasil putus hubungan dengan @${global.db.data.users[m.sender].pasturi.split('@')[0]}`,m,{contextInfo: {
      mentionedJid: [global.db.data.users[m.sender].pasturi]
    }})
    ayg.pasturi = ""
  }

  if (m.sender == beb.pasturi){
    conn.reply(m.chat,`Berhasil putus hubungan dengan @${global.db.data.users[m.sender].pasturi.split('@')[0]}`,m,{contextInfo: {
      mentionedJid: [global.db.data.users[m.sender].pasturi]
    }})
    ayg.pasturi = ""
    beb.pasturi = ""
  }else {
    conn.reply(m.chat,`Anda tidak memiliki pasangan.`,m)
  }
}
handler.help = ['putusnikah']
handler.tags = ['jadian']
handler.command = /^(putusnikah)$/i
handler.group = true
handler.fail = null
export default handler