let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`${pickRandom(global.iq)}`, m)
}
handler.help = ['pahalacek']
handler.tags = ['game']
handler.command = /^(pahalacek)$/i
handler.owner = false

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.iq = [
'pahala Anda Sebesar : 1',
'pahala Anda Sebesar : 14',
'pahala Anda Sebesar : 23',
'pahala Anda Sebesar : 35',
'pahala Anda Sebesar : 41',
'pahala Anda Sebesar : 50',
'pahala Anda Sebesar : 67',
'pahala Anda Sebesar : 72',
'pahala Anda Sebesar : 86',
'pahala Anda Sebesar : 99',
'pahala Anda Sebesar : 150',
'pahala Anda Sebesar : 340',
'pahala Anda Sebesar : 423',
'pahala Anda Sebesar : 500',
'pahala Anda Sebesar : 676',
'pahala Anda Sebesar : 780',
'pahala Anda Sebesar : 812',
'pahala Anda Sebesar : 945',
'pahala Anda Sebesar : 1000',
'pahala Anda Sebesar : Tidak Terbatas!',
'pahala Anda Sebesar : 5000',
'pahala Anda Sebesar : 7500',
'pahala Anda Sebesar : 10000',
]