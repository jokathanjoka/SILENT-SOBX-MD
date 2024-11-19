const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({

    pattern: "menu",

    react: "🛸",

    alias: ["panel","commands"],

    desc: "Get bot\'s command list.",

    category: "main",

    use: '.menu',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeMenu = `have a nice day @ *${pushname}*
welcome to 𝙹𝙾𝚎𝚕 𝚖𝚍

┏❐ 𝙹𝙾𝚎𝚕 𝚖𝚍 𝚋𝚘𝚝 ❑
┃*ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
┃*ʀᴀᴍ ᴜsᴇ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┃*ɴᴀᴍᴇ ʙᴏᴛ* : *𝙹𝙾𝚎𝚕 𝚖𝚍*
┃*ᴄʀᴇᴀᴛᴏʀ* : *𝙹𝙾𝚎𝚕 𝚃𝚎𝚌𝚑*
┃*ᴠᴇʀsɪᴏɴs* : *7*
┃*ᴍᴇɴᴜ ᴄᴍᴅ* : *ᴍᴇɴᴜ ʟɪsᴛ*
┗━❏

┏❐ *DOWNLOADER-CMD* ❐ 
┃*.ғʙ <ᴜʀʟ>*
┃*.ɪɴꜱᴛᴀ <ᴜʀʟ>*
┃*.ᴠɪᴅᴇᴏ <ᴜʀʟ>*
┃*.ɢᴅʀɪᴠᴇ <ᴜʀʟ>*
┃*.ᴛᴡɪᴛᴛᴇʀ <ᴜʀʟ>*
┃*.ᴛᴛ<ᴜʀʟ>*
┃*.ᴍᴇᴅɪᴀғɪʀᴇ <ᴜʀʟ>*
┃*.ꜱᴏɴɢ <ϙᴜᴇʀʏ>*
┃*.ᴘʟᴀʏ <ᴜʀʟ>*
┃*.ᴠɪᴅᴇᴏ <ϙᴜᴇʀʏ>*
┃*.ᴠɪᴅᴇᴏ <ᴜʀʟ>*
┃*.ɪᴍɢ <ϙᴜᴇʀʏ>*
┃*.ᴀᴘᴋ <ɴᴀᴍᴇ>*
┃*.xᴠɪᴅᴇᴏ <ᴛɪᴛᴛʟᴇ>*
┗━❏
┏❐ *SEARCH-CMD* ❑ 
┃*.ʏᴛꜱ  <ᴛᴇxᴛ>*
┃*.ʟᴏʟɪ <ᴛᴇxᴛ>*
┃*ᴍᴏᴠɪᴇ <ᴛᴇxᴛ>*
┃*.ɪᴍɢ <ᴛᴇxᴛ>*
┃*.ᴡᴇᴀᴛʜᴇʀ <ᴄɪᴛʏ>
┗━❑
┏❐ *AI-CMD* ❑ 
┃*.ɢᴘᴛ <ᴛᴇxᴛ>*
┃*.ᴀɪ <ᴛᴇxᴛ>*
┗━❑
*OWNER-CMD* 
*.ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*
*.ᴏᴡɴᴇʀ*
*.ʀᴇᴘᴏ*
*.ꜱʏꜱᴛᴇᴍ*
*.ꜱᴛᴀᴛᴜꜱ*
*.ʙʟᴏᴄᴋ*
*.ᴜɴʙʟᴏᴄᴋ*
*.sʜᴜᴛᴅᴏᴡɴ*
*.ᴄʟᴇᴀʀᴄʜᴀᴛs*
*.sᴇᴛᴘᴘ*
*.ʙʀᴏᴀᴅᴄᴀsᴛ*
*.ᴊɪᴅ*
*.ɢᴊɪᴅ*
*.ʀᴇꜱᴛᴀʀᴛ*

*GROUP-CMD* 
*.ʀᴇᴍᴏᴠᴇ <ʀᴇᴘʟʏ ғᴏʀ ᴅᴇʟᴇᴛᴇ sᴍs>*
*.ᴅᴇʟᴇᴛᴇ <ʀᴇᴘʟʏ ғᴏʀ ᴅᴇʟᴇᴛᴇ sᴍs>*
*.ᴀᴅᴅ*
*.ᴋɪᴄᴋ*
*ɢᴏᴏᴅʙʏᴇ <ᴛᴇxᴛ>*
*.sᴇᴛᴡᴇʟᴄᴏᴍᴇ <ᴛᴇxᴛ>*
*.ᴘʀᴏᴍᴏᴛᴇ*
*.ᴅᴇᴍᴏᴛᴇ*
**.ᴛᴀɢᴀʟʟ*
*.ɢᴇᴛᴘɪᴄ*
*.ɪɴᴠɪᴛᴇ*
*.ʀᴇᴠᴏᴋᴇ*
*.ᴊᴏɪɴʀᴇǫᴜᴇsᴛs*
*.ᴀʟʟʀᴇǫ*
*.ᴍᴜᴛᴇ*
*.ᴜɴᴍᴜᴛᴇ*
*.ʟᴏᴄᴋɢᴄ*
*.ᴜɴʟᴏᴄᴋɢᴄ*
*.ʟᴇᴀᴠᴇ*
*.ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ*
*.ᴜᴘᴅᴀᴛᴇɢᴅᴇsᴄ*
*.ᴊᴏɪɴ*
*.ʜɪᴅᴇᴛᴀɢ*
*.ɢɪɴғᴏ*
*.ᴅɪsᴀᴘᴘᴇᴀʀ ᴏɴ*
*.ᴅɪsᴀᴘᴘᴇᴀʀ ᴏғғ*
*.ᴅɪsᴀᴘᴘᴇᴀʀ 7ᴅ 24ʜ 90ᴅ*
*.sᴇɴᴅᴅᴍ*

*INFO-CMD* 
*.ᴍᴇɴᴜ*
*.ᴍᴇɴᴜ2*
*.ᴍᴇɴᴜ3*
*.ᴀʙᴏᴜᴛ*
*.sᴄʀɪᴘᴛ*
*.ʀᴇᴘᴏ*
*.ᴀʟɪᴠᴇ*
*.ʙᴏᴛɪɴꜰᴏ*
*.ꜱᴛᴀᴛᴜꜱ*
*.ꜱᴜᴘᴘᴏʀᴛ*
*.pɪɴɢ*
*.ᴘɪɴɢ2*
*.ꜱʏꜱᴛᴇᴍ*

*CONVERTER-CMD*
*.sᴛɪᴄᴋᴇʀ*


*RANDOM-CMD* 
*.ᴋɪɴɢ*
*.ᴅᴏɢ*
*.ᴀɴɪᴍᴇ*
*.ᴀɴɪᴍᴇɢɪʀʟ*
*.ᴀɴɪᴍᴇɢɪʀʟ1*
*.ᴀɴɪᴍᴇɢɪʀʟ2*
*.ᴀɴɪmᴇɢɪʀʟ3*
*.ᴀɴɪᴍᴇɢɪʀʟ4*
*.ᴀɴɪᴍᴇɢɪʀʟ5*

*WALLPAPERS-CMD* 
*.ɪmg

*OTHER-CMD* 
*.ᴛʀᴛ*
*.ᴊᴏᴋᴇ*
*.ᴍᴏᴠɪᴇ*
*.ꜰᴀᴄᴛ*
*.ɢɪᴛʜᴜʙꜱᴛᴀʟᴋ*
*.ɢᴘᴀꜱꜱ*
*.ʜᴀᴄᴋ*
*.ǫᴜᴏᴛᴇ*
*.ꜱʀᴇᴘᴏ*
*.ᴅᴇꜰɪɴᴇ*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
