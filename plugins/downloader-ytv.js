import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, q, isPrems, isOwner }) => {

await conn.sendMessage(m.chat, { react: { text: 'β±οΈ', key: m.key } })

if (!args || !args[0]) throw '*[βππππβ] πΈπ½ππ΄πππ΄ π΄π» π²πΎπΌπ°π½π³πΎ πΌπ°π π΄π» π΄π½π»π°π²π΄ / π»πΈπ½πΊ π³π΄ ππ½ ππΈπ³π΄πΎ π³π΄ ππΎππππ±π΄*'
try {
let { thumbnail, video, title } = await youtubedl(args[0])
.catch(async () => await youtubedlv2(args[0]))
let link = await video['360p'].download()
const isY = /y(es)/gi.test(args[1])
const limitedSize = (isPrems || isOwner ? 350 : 200) * 3074
let isLimit = limitedSize < video['360p'].fileSize
await conn.sendFile(m.chat, link, title + '.mp3', `
*π₯ ππΈπππ»πΎ:* ${title}
*π πΏπ΄ππΎ π³π΄π» ππΈπ³π΄πΎ:* ${video['360p'].fileSizeH}
`.trim(), m, null, {
asDocument: 0
})
conn.sendMessage(m.chat, { audio: { url: link }, mimetype: "audio/mp4", fileName: title + '.mp3', quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply:{
title: "VER VIDEO EN YT",
body: author,
showAdAttribution: false,
mediaType: 2, 
thumbnail: thumbnail,
mediaUrl: args[0], 
sourceUrl: 'https://instagram.com/gustavo_smpi'}}}, { quoted: m })

}catch(e){
m.reply('*[βππππβ] π΄πππΎπ π°π» π΄π½ππΈπ°π π΄π» π°ππ²π·πΈππΎ.. π΄πππΎ ππ΄ πΏππ΄π³π΄ π³π΄π±π΄π π° πππ΄ π΄π» ππΈπ³π΄πΎ π΄π π³π΄ ππ½ πΏπ΄ππΎ / ππ°πΌπ°π½ΜπΎ πΆππ°π½π³π΄*')
console.log(e)
}}
handler.help = ['mp4', 'v'].map(v => 'yt' + v + ` <url>`)
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i

export default handler
