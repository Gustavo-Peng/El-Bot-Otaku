import util from 'util'
import path from 'path'
import fs from 'fs'
let handler = async (m, { conn}) => {
await conn.sendMessage(m.chat, { react: { text: 'āØ', key: m.key } })
let pp = './media/menus/Menu2.jpg'
let name = conn.getName(m.sender)
const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "573017901707-1625305606@g.us" } : {}) },
message: { 
orderMessage: { itemCount : 69, status: 1, surface : 1, message: '*EL BOT OTAKU*', orderTitle: 'Bang', thumbnail: fs.readFileSync('./media/menus/Menu2.jpg'), sellerJid: '0@s.whatsapp.net'    
}}}
let fgac = [ pp, "adri"]
let nfg = fgac[Math.floor(Math.random() * fgac.length)] 

conn.sendHydrated(m.chat, `\nšš¢šš *${name}* \n\n*š”šššš¦šš§šš¦ šš¬šØšš?* `-wm, null, 'https://instagram.com/gustavo_smpi', 'Sigueme en Instagram', null, null, [ 
      ['ā¦ā° Menu', '.help'],
      ['ā¦ā° MenuAudios', '.menuaudios'],
    ], m)
// conn.sendFile(m.chat, null, null, m, null, true, {
// type: 'audioMessage', 
// ptt: true
// })
}
handler.customPrefix = /^(bot|robot)$/i
handler.command = new RegExp
export default handler
