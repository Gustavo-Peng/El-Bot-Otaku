const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './media/menus/Menustickers.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let username = await conn.getName(m.sender)
let str = `
*ใ๐ ๐๐ข๐๐ _${username}_ ๐ๅฝก*
๐๐๐๐ก๐ฉ๐๐ก๐๐๐ข ๐๐ ๐ ๐๐ก๐จ ๐ฆ๐ง๐๐๐๐๐ฅ๐ฆ

โโโโโโโโโโโโโโโ
โ *<๐ฆ๐ง๐๐๐๐๐ฅ๐ฆ/>*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ ๐ฝ _${usedPrefix}s_ < *responde al archivo para crear el sticker* >
โฃ ๐ฝ _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
โฃ ๐ฝ _${usedPrefix}attp *<texto>*_
โฃ ๐ฝ _${usedPrefix}attp2 *<texto>*_
โฃ ๐ฝ _${usedPrefix}ttp *<texto>*_
โฃ ๐ฝ _${usedPrefix}removebg *<responder imagen>*_
โฃ ๐ฝ _${usedPrefix}pat *<@tag>_
โฃ ๐ฝ _${usedPrefix}kiss *<@tag>*_
โฃ ๐ฝ _${usedPrefix}wm *<packname> <author>*_
โฃ ๐ฝ _${usedPrefix}stickermarker *<efecto> <responder a imagen>*_
โฃ ๐ฝ _${usedPrefix}stickerfilter *<efecto> <responder a imagen>*_
โฃ ๐ฝ _${usedPrefix}stickerpack *<link>*_
โฃ ๐ฝ _${usedPrefix}bonk_
โโโโโโโโโโโโโโโ
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [
['๐๏ธ๐ ๐๐ก๐จ ๐๐๐ฆ๐ง๐๐๏ธ', '.menu'],
['๐ฅต๐๐ฅ๐๐๐๐ข๐ฅ๐ฅต', '.menu'],
['๐ฎ๐๐ข๐ก๐๐ฅ๐ฎ', '.donar']
], m)
}}
handler.help = ['menustickers']
handler.tags = ['main']
handler.command = /^(menusticker|menustickers)$/i
handler.fail = null
handler.register = true
export default  handler
