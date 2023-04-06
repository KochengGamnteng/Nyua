import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
  let res = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${global.lolkey}&url=args[0]`)
    url: args[0]
  }, 'apivinz'))
  if (res.status !== 200) {
    res.text()
    throw res.status
  }
  let json = await res.json()
  if (!json.result) throw json
  let { caption, owner, data } = json.result
  let text = `
ig 
`.trim()
  for (let { data: url, type } of data)
    conn.sendFile(m.chat, url, 'ig' + (type == 'video' ? '.mp4' : '.jpg'), text, m)
}
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(in)$/i
handler.premium = true
handler.register = true

export default handler

//Modified By Test :")