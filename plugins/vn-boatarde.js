import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/boatarde.m4a'
conn.sendFile(m.chat, vn, 'boatarde.m4a', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Buenas tardes|buenas tardes/i
handler.command = new RegExp
handler.fail = null
handler.exp = 100
export default handler
