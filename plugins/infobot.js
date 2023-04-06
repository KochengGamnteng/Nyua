import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let _pp = './src/avatar_contact.png'
  let user = db.data.users[m.sender]
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let pp = await conn.profilePictureUrl(who).catch(_ => './src/avatar_contact.png')
    let { premium, level, limit, exp, lastclaim, registered, regTime, age } = global.db.data.users[m.sender]
    let username = conn.getName(who)
    let name = conn.getName(who)
    let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn, isRowner}) => {
	let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
  const used = process.memoryUsage()
  const cpus = _cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
  let NotDetect = 'Not Detect'
        let cpux = osu.cpu
        let cpuCore = cpux.count()
        let drive = osu.drive
        let mem = osu.mem
        let netstat = osu.netstat
        let HostN = osu.os.hostname()
        let OS = osu.os.platform()
        let ipx = osu.os.ip()
        let cpuModel = cpux.model()
        let cpuPer
        let p1 = cpux.usage().then(cpuPercentage => {
            cpuPer = cpuPercentage
        }).catch(() => {
            cpuPer = NotDetect
        })
        let driveTotal, driveUsed, drivePer
        let p2 = drive.info().then(info => {
                driveTotal = (info.totalGb + ' GB'),
                driveUsed = info.usedGb,
                drivePer = (info.usedPercentage + '%')
        }).catch(() => {
                driveTotal = NotDetect,
                driveUsed = NotDetect,
                drivePer = NotDetect
        })
        let ramTotal, ramUsed
        let p3 = mem.info().then(info => {
                ramTotal = info.totalMemMb,
                ramUsed = info.usedMemMb
        }).catch(() => {
                ramTotal = NotDetect,
                ramUsed = NotDetect
        })
        let netsIn, netsOut
        let p4 = netstat.inOut().then(info => {
                netsIn = (info.total.inputMb + ' MB'),       
                netsOut = (info.total.outputMb + ' MB')
        }).catch(() => {
                netsIn = NotDetect,
                netsOut = NotDetect
        })
        await Promise.all([p1, p2, p3, p4])        
        let _ramTotal = (ramTotal + ' MB')
        let cek = await(await fetch("https://api.myip.com")).json().catch(_ => 'error')
        
        let ip = (cek == 'error' ? 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ' : cek.ip)
        let cr = (cek == 'error' ? 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ' : cek.country)
        let cc = (cek == 'error' ? 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ' : cek.cc)
        
        let d = new Date(new Date + 3600000)
    let locale = 'id'
    let weeks = d.toLocaleDateString(locale, { weekday: 'long' })
    let dates = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
        let times = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let str = `
└𝗕𝗢𝗧 𝗜𝗡𝗙𝗢┐

➜ᴏᴡɴᴇʀ: ʜᴀғɪᴅ sᴇʙᴜᴛᴀɴ ᴅᴏᴅᴏʟᴢ
➜ɴᴀᴍᴀ ʙᴏᴛ: ᴋᴏᴄʜᴇɴɢ ʙᴏᴛ
➜ʟɪʙᴀʀʏ: ʙᴀɪʟᴇʏs-ᴍᴅ
➜ᴜsᴇʀ: ${Object.keys(global.db.data.users).length}
➜ʙᴀɴ: ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}
➜ᴍᴏᴅᴇ ʙᴏᴛ: ${global.opts['self'] ? 'Self' : 'public'}
➜ʀᴜɴᴛɪᴍᴇ: ${muptime}`.trim()
    conn.sendButton(m.chat, '*–––––『 𝗜𝗡𝗙𝗢 』–––––*', str, pp, [
[`ᴛʀᴀɴsғᴇʀ`, `.transfer`],
[`ᴀᴅᴠᴇɴᴛᴜʀᴇ`, `.adventure`]
], m, {asLocation: true})
}
handler.help = ['infobot', 'infobot']
handler.tags = ['info', 'tools']

handler.command = /^(infobot)$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['┃ ', ye, ' *Years 🗓️*\n', '┃ ', mo, ' *Month 🌙*\n', '┃ ', d, ' *Days ☀️*\n', '┃ ', h, ' *Hours 🕐*\n', '┃ ', m, ' *Minute ⏰*\n', '┃ ', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}