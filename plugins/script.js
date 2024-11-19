const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`┏━❐
┃ *BOT OWNER:* 
┃ *𝙹𝙾𝚎𝚕*
┃ *JOEL-MD REPO:*
┃*https://github.com/joeljamestech3/JOEL-MD*
┃ *SUPPORT CHANNEL:*
┃ *https://whatsapp.com/channel/0029Vade9VgD38CPEnxfYF0M*
┗━━❑
 𝚔𝚎𝚎𝚙 𝚞𝚜𝚒𝚗𝚐 𝙹𝙾𝚎𝚕 𝚖𝚍
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '12036323258171807@newsletter',
      newsletterName: "JOEL BOT",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'JOEL-MD',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/joeljamestech3/JOEL-MD" ,
thumbnailUrl: "https://files.catbox.moe/5a2euh.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
