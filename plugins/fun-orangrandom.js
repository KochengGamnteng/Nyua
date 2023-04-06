import fetch from 'node-fetch'
let handler  = async (m, { conn }) => {
  let ddd = await fetch(`https://api.lolhuman.xyz/api/random/people?apikey=${global.lolkey}`)
  let pp = 'https://telegra.ph/file/146fb1fed42771885a899.jpg'
  let f = await ddd.json()
let anu =`
*ORANG*
gender: ${f.result.gender}
nama: ${f.result.name.title} ${f.result.name.first} ${f.result.name.last}

*LOKASI*
nomer lokasi: ${f.result.location.street.number}
nama lokasi: ${f.result.location.street.name}
kota: ${f.result.location.city}
negara: ${f.result.location.state}
country: ${f.result.location.country}
kode pos: ${f.result.location.postcode}

*KORDINAT*
garis lintang: ${f.result.location.coordinates.latitude}
garis bujur: ${f.result.location.coordinates.longitude}

*ZONA WAKTU*
offset: ${f.result.location.timezone.offset}
deskripsi: ${f.result.location.timezone.description}
`
  conn.sendButton(m.chat, '*–––––『 RANDOM 』–––––*', anu, pp, [
[`ORANG RANDOM`, `.orangrandom`],
], m, {asLocation: true})
}

handler.help = ['orangrandom']
handler.tags = ['game']
handler.command = /^(orangrandom)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler