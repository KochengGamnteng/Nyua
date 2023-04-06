let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`${pickRandom(global.iq)}`, m)
}
handler.help = ['kepintarancek']
handler.tags = ['game']
handler.command = /^(kepintarancek)$/i
handler.owner = false

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.iq = [
'kepintaran Anda Sebesar : 1',
'kepintaran Anda Sebesar : 14',
'kepintaran Anda Sebesar : 23',
'kepintaran Anda Sebesar : 35',
'kepintaran Anda Sebesar : 41',
'kepintaran Anda Sebesar : 50',
'kepintaran Anda Sebesar : 67',
'kepintaran Anda Sebesar : 72',
'kepintaran Anda Sebesar : 86',
'kepintaran Anda Sebesar : 99',
'kepintaran Anda Sebesar : 150',
'kepintaran Anda Sebesar : 340',
'kepintaran Anda Sebesar : 423',
'kepintaran Anda Sebesar : 500',
'kepintaran Anda Sebesar : 676',
'kepintaran Anda Sebesar : 780',
'kepintaran Anda Sebesar : 812',
'kepintaran Anda Sebesar : 945',
'kepintaran Anda Sebesar : 1000',
'kepintaran Anda Sebesar : Tidak Terbatas!',
'kepintaran Anda Sebesar : 5000',
'kepintaran Anda Sebesar : 7500',
'kepintaran Anda Sebesar : 10000',
]