import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import fs from 'fs'
let tags = {
  'main': '𝗠𝗔𝗜𝗡',
  'game': '𝗚𝗔𝗠𝗘',
  'rpg': '𝗥𝗣𝗚 𝗚𝗔𝗠𝗘𝗦',
  'xp': '𝗘𝗫𝗣 & 𝗟𝗜𝗠𝗜𝗧',
  'maker': '𝗠𝗔𝗞𝗘𝗥',
  'sticker': '𝗦𝗧𝗜𝗖𝗞𝗘𝗥',
  'kerang': '𝗞𝗘𝗥𝗔𝗡𝗚 𝗔𝗝𝗔𝗜𝗕',
  'quotes': '𝗤𝗨𝗢𝗧𝗘𝗦',
  'group': '𝗚𝗥𝗢𝗨𝗣',
  'internet': '𝗜𝗡𝗧𝗘𝗥𝗡𝗘𝗧',
  'anonymous': '𝗔𝗡𝗢𝗬𝗠𝗢𝗨𝗦 & 𝗖𝗛𝗔𝗧',
  'nulis': '𝗡𝗨𝗟𝗜𝗦',
  'downloader': '𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥',
  'tools': '𝗧𝗢𝗢𝗟𝗦',
  'fun': '𝗙𝗨𝗡',
  'owner': '𝗢𝗪𝗡𝗘𝗥',
  'advanced': '𝗔𝗗𝗩𝗔𝗡𝗖𝗘𝗗',
  'info': '𝗜𝗡𝗙𝗢',
}
const defaultMenu = {
  before: `%readmore`.trimStart(),
  header: '%category',
  body: '•▶︎%cmd %isPremium %islimit',
  after: `  ${'```✨ʜᴏᴩᴇ ʏᴏᴜ ᴇɴᴊᴏʏɪɴɢ ᴛʜᴇ ʙᴏᴛ✨```'}`,
}
let handler = async (m, { conn, usedPrefix, __dirname }) => {
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, limit, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    const wib = moment.tz('Asia/Jakarta').format("HH:mm:ss")
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '🅛' : '')
                .replace(/%isPremium/g, menu.premium ? '🅟' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: usedPrefix, uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, wib, wit, wita, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')
    const menu = './media/menu.jpg'
    const valor = './media/valor.jpg'
    await conn.sendButton(m.chat, `*–––––––『 MENU 』–––––––*

${wish()}, ${name}

ıll *USER INFO* 
•🎯Role: ${role}
•✨Exp: ${exp}
•❗Limit: ${limit}
•🏆Level: ${level}

ıll *TODAY* 
•☁️Hari: ${week}
•🕛Wib: ${wib}
•🕛Wit: ${wit}
•🕛Wita: ${wita}

*⇓ ᴀʟʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛᴇᴅ ʙᴇʟᴏᴡ ⇓*`, text.trim(), `${timeimg()}`, [["D O N A S I ", ".donasi"],["O W N E R",".owner"], ["L I S T M E N U", ".menulist"]], m, { asLocation: true })
    conn.sendMessage(m.chat, {
    	react: {
    		text: "📖",
    		key: { remoteJid: m.key.remoteJid, id: m.key.id, fromMe: false, participant: m.key.participant }
    	}
    })
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu|help|valor|command|commands)$/i

handler.exp = 3

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function wish() {
    let wishloc = ''
  const time = moment.tz('Asia/Kolkata').format('HH')
  wishloc = ('Hi')
  if (time >= 0) {
    wishloc = ('Night Rider')
  }
  if (time >= 4) {
    wishloc = ('Good Morning')
  }
  if (time >= 12) {
    wishloc = ('Good Afternoon')
  }
  if (time >= 16) {
    wishloc = ('️Good Evening')
  }
  if (time >= 23) {
    wishloc = ('Night Rider')
  }
  return wishloc
}
function timeimg() {
    let imgloc = ''
  const time = moment.tz('Asia/Kolkata').format('HH')
  imgloc = ('./media/menu.jpg')
  if (time >= 0) {
    imgloc = ('./media/midnight.jpg')
  }
  if (time >= 1) {
    imgloc = ('./media/aftermid.jpg')
  }
  if (time >= 4) {
    imgloc = ('./media/morning.jpg')
  }
  if (time >= 5) {
    imgloc = ('./media/dawn.jpg')
  }
  if (time >= 6) {
    imgloc = ('./media/sunrise.jpg')
  }
  if (time >= 7) {
    imgloc = ('./media/day.jpg')
  }
  if (time >= 12) {
    imgloc = ('./media/noon.jpg')
  }
  if (time >= 14) {
    imgloc = ('./media/afternoon.jpg')
  }
  if (time >= 16) {
    imgloc = ('./media/evening.jpg')
  }
  if (time >= 18) {
    imgloc = ('./media/sunset.jpg')
  }
  if (time >= 19) {
    imgloc = ('./media/dusk.jpg')
  }
  if (time >= 20) {
    imgloc = ('./media/night.jpg')
  }
  return imgloc
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}