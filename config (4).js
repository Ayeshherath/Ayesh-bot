const { readFileSync, watchFile, unwatchFile } = require('fs')
const { redBright } = require('chalk')
require('./lib/config')
require("dotenv").config();

global.zApiKey = {// if this API key get expired then please go to https://www.fxacb-api.my.id and get a new api key.
       one: "zenzkey_998568986d"
}


global.botname = process.env.BotName || "සුදු මල්ලි " 
global.author = process.env.Author || "@අයේෂ් බබා "
global.packname = process.env.PackName || "අයේෂ් බබා " 
global.myweb = process.env.Web || "https://github.com/PikaBotz" 
global.footer = process.env.Footer || "© සුදු මල්ලි Bot" 
global.prefa = process.env.Prefix || ['-'] 
global.themeemoji = process.env.ThemeEmoji || "🎐" 
global.ownername = process.env.Owner_Name || "සුදු මල්ලි " 
global.ownernumber = process.env.Owner_Number || "94775341543" 
global.adress = process.env.Continent || "Asia/Kolkata" 
global.timezone = process.env.TimeZone || "Asia/colombo" 
global.instagramId = process.env.Insta || "8.08_only_mine" 
global.email = process.env.Email_Id || "ayeshmax032@gmail.com" 

global.mongoUrl = process.env.MongoDB || "mongodb+srv://Poddabot:podda123@cluster0.wrj3wpr.mongodb.net/"; 

global.warns = process.env.Warns_Limits || 3; 

global.badWords = [
  "vagina",
  "dick",
  "mdrchod",
  "mdrchod",
  "chutiya",
  "lodu",
  "whore",
  "hore",
  "hoe",
  "hoes",
  "lode",
  "cum",
  "idiot",
  "bastard",
  "cunt",
  "butt",
  "pussy",
  "chut",
  "suck",
  "scum",
  "scumbag",
  "niggr",
  "nigga",
  "chod",
  "bhenchod",
  "bc",
  "bhodike",
  "bsdk","randi",
  "gandu",
  "stfu",
  "ass",
  "asshole",
  "madarchod",
  "fuck",
  "motherfucker",
  "mother fucker",
  "mf",
  "mfs",
  "fk",
  "fck",
  "gand",
  "laund",
  "loda",
  "gulambi"];
  
//--------------- Tip ----------------\\
global.Tips = [
`Type *$prefix info* for more information....`,
`Type *$prefix settings* to commit changes in the bot.`,
`If you got a bug or error, then please report to developer asap by *$prefix report* command.`
]

//--------------- Menu images ----------------\\
global.image_1 = readFileSync('./lib/Assets/image_1.jpg') // Thumbnail for allmenu command
global.image_2 = readFileSync('./lib/Assets/image_2.jpg') // null image
global.image_3 = readFileSync("./lib/Assets/image_3.jpg") // Thumbnail for Dashboard
global.menu_pic = "https://i.ibb.co/PhDcZTM/Thumbnail.png";

global.message = {
    success: "✅ 𝚂𝚞𝚌𝚌𝚎𝚜𝚜! 𝙾𝚙𝚛𝚊𝚝𝚒𝚘𝚗 𝙲𝚘𝚖𝚙𝚕𝚎𝚝𝚎𝚍.",
    admin: "*👤 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- Dear, this command is only for Admins. You have to be a admin in this group to use this command.",
    botAdmin: "*🤖 B𝙾𝚃 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- I'm not an Admin, so I can't execute this command in this group. Please make me an Admin.",
    owner: "*👑 O𝚆𝙽𝙴𝚁 N𝙴𝙴𝙴𝙳𝙴𝙳!*\n\n- Bruh, this command is only made for this bot's owner. So you can't use this command.",
    group: "*👥 G𝚛𝚘𝚞𝚙 N𝚎𝚎𝚍𝚎𝚍!*\n\n- This command can only be executed in a group chat.",
    private: 'This command is only for private chats.',
    wait: '🔄 Processing request...',
    link: 'I need a link to process this command.',
    error: "❌ Oops! An error occurred while processing your request. Please try again later.",
    ban: `You're banned from using this bot!`,
    nsfw: 'This group is not *NSFW* enabled.',
    banChat: 'This group is banned from using this bot, please contact owner to get unbanned.'
},

module.exports = {
  botname: process.env.BotName || "සුදු මල්ලි ", 
  author: process.env.Author || "@අයේෂ් බබා ",
  packname: process.env.PackName || "සුදු මල්ලි ",
  myweb: process.env.Web || "https://github.com/PikaBotz",
  footer: process.env.Footer || "© සුදු මල්ලි Bot",
  prefa: process.env.Prefix || ['-'],
  themeemoji: process.env.ThemeEmoji || "🎐",
  ownername: process.env.Owner_Name || "සුදු මල්ලි ",
  ownernumber: process.env.Owner_Number || "94775341543",
  adress: process.env.Continent || "Asia/Kolkata ",
  timezone: process.env.TimeZone || "Asia/colombo", 
  instagramId: process.env.Insta || "8.08_only_mine",
  email: process.env.Email_Id || "ayeshmax032@gmail.com",
  warns: process.env.Warns_Limits || 3,
  mongoUrl: process.env.MongoDB || "mongodb+srv://Poddabot:podda123@cluster0.wrj3wpr.mongodb.net/",
  welcome: process.env.Welcome_Msg || '*@$user* joined this group today as $membersth member.\n\n_$prefix welcome off to disable this message._',
  left: process.env.Left_Msg || 'Ex-member *@$user* is no longer available in this group chat.\n\n_$prefix goodbye off to disable this message._',
  promote: process.env.Promote_Msg || '*@$user* has been promoted as an admin in this group.\n\n_$prefix promotem off to disable this message._',
  demote: process.env.Demote_Msg || '*@$user* has been demoted to a member in this group.\n\n_$prefix demotem off to disable this message._',
  sessionId: process.env.SESSION_ID || "eyJub2lzZ_AN_YA_UtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZ_AN_YA_mZ_AN_YA_XIiLCJkYXRhIjoiZ_AN_YA_UVldHlMdkkrT0Q5MWEyN2NrZ_AN_YA_VlkYWJvMFV6d1Q4c1ozK0Z_AN_YA_GMmZ_AN_YA_nTTMzST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZ_AN_YA_mZ_AN_YA_XIiLCJkYXRhIjoibjBtZ_AN_YA_kloQUd5Z_AN_YA_Td6Vy9oOXhFYWg5amNvVU9uS1VUMlBXUXRkSnExdzJqTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZ_AN_YA_XlQYWlyIjp7InByaXZ_AN_YA_hdGUiOnsidHlwZ_AN_YA_SI6IkJ1Z_AN_YA_mZ_AN_YA_lciIsImRhdGEiOiJHSFE0T0NlaGpVTWNST2xYd1p3NnF3Nm93OS9yUFRHWEMxNllUK0Q5MW1nPSJ9LCJwdWJsaWMiOnsidHlwZ_AN_YA_SI6IkJ1Z_AN_YA_mZ_AN_YA_lciIsImRhdGEiOiJkNmZ_AN_YA_FTldQc3YwMkZ_AN_YA_UcUxkQXZ_AN_YA_RUFBieS9RV1JRTlRGaXNVbXkzQXUyS1JjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZ_AN_YA_XkiOnsicHJpdmF0Z_AN_YA_SI6eyJ0eXBlIjoiQnVmZ_AN_YA_mVyIiwiZ_AN_YA_GF0YSI6IjZ_AN_YA_IbXc0RWhFZ_AN_YA_mdCT2R2ajUrSUNTc3NEMHpSUU9FN2lRZ_AN_YA_jZ_AN_YA_WMFpmWWsrbnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZ_AN_YA_mVyIiwiZ_AN_YA_GF0YSI6InoxWit3Q0todzdKWHh1YVlzVmV1eGh6NExzZ_AN_YA_G5WOEF5VWc2Y1pOeXJYeU09In19LCJzaWduZ_AN_YA_WRQcmVLZ_AN_YA_XkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZ_AN_YA_mZ_AN_YA_XIiLCJkYXRhIjoiUU95Tm82bFhHK0hyQmlnL3hWTDdjYU1wL3JwZ_AN_YA_m5ROFo4NVU2L2xreHZ_AN_YA_sRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZ_AN_YA_mZ_AN_YA_XIiLCJkYXRhIjoiWk1QU3RHYlJVVGVqU0hZ_AN_YA_SEVVYkdLVkhZ_AN_YA_RzhkMmhRK2FsTkZ_AN_YA_rUlJZ_AN_YA_SVVHcz0ifX0sInNpZ_AN_YA_25hdHVyZ_AN_YA_SI6eyJ0eXBlIjoiQnVmZ_AN_YA_mVyIiwiZ_AN_YA_GF0YSI6Ikw2c1JPTmlCeU9nS0t5MUtBTWlFdGl6VlY1Z_AN_YA_W84RzZ_AN_YA_GcTRhSW9hZ_AN_YA_U9acHgwZ_AN_YA_llXeDhGMVh5bm1kVEFQMW9Z_AN_YA_cFhzZ_AN_YA_TlOR2xMazN3NFBvcGd2Y3hXWEJnPT0ifSwia2V5SWQiOjF9LCJyZ_AN_YA_Wdpc3RyYXRpb25JZ_AN_YA_CI6MTE4LCJhZ_AN_YA_HZ_AN_YA_TZ_AN_YA_WNyZ_AN_YA_XRLZ_AN_YA_XkiOiIzbVIzTVRzQXNuVjR0Z_AN_YA_HVkK0VMTStXM2EvOFBPZ_AN_YA_2pSS2syMGxnQlB4aDdzPSIsInByb2Nlc3NlZ_AN_YA_Ehpc3RvcnlNZ_AN_YA_XNzYWdlcyI6W10sIm5leHRQcmVLZ_AN_YA_XlJZ_AN_YA_CI6MzEsImZ_AN_YA_pcnN0VW51cGxvYWRlZ_AN_YA_FByZ_AN_YA_UtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ_AN_YA_3MiOnsidW5hcmNoaXZ_AN_YA_lQ2hhdHMiOmZ_AN_YA_hbHNlfSwiZ_AN_YA_GV2aWNlSWQiOiI5NU14WmE1X1M1Z_AN_YA_WlEd2U4aGk0TFhRIiwicGhvbmVJZ_AN_YA_CI6IjAzMmM1NmNhLWMyMjctNGIxMi1iMWExLTZ_AN_YA_iMjYwMTVmOWMwNSIsImlkZ_AN_YA_W50aXR5SWQiOnsidHlwZ_AN_YA_SI6IkJ1Z_AN_YA_mZ_AN_YA_lciIsImRhdGEiOiJYMUdIQnVTN2tpUWY2Y2xZ_AN_YA_dTIrNHpvMGxQbHM9In0sInJlZ_AN_YA_2lzdGVyZ_AN_YA_WQiOmZ_AN_YA_hbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZ_AN_YA_mVyIiwiZ_AN_YA_GF0YSI6InlsMkhWTDl4NkJCVzBUNytpZ_AN_YA_2l2UUVCMlpMND0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZ_AN_YA_XRhaWxzIjoiQ1A2MCtMd0hFUDd3cGF3R0dBWT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSjlUdmdoVVVSNC9TWi9vd3pzMHRqSytYOUxhTUVFU21RTS9ueE5QdU53MD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRFFEZ_AN_YA_VhZ_AN_YA_cmdFWXRHd0FMdjkwaDRiNnRVWTdjWllQTys0bkRnRXVEa2xRV2hmYlJtTXVlTVNLWHJjLzkrR2pyYVJjaDAxMU5hc1JlZ_AN_YA_FArRThPNGlzQUE9PSIsImRldmljZ_AN_YA_VNpZ_AN_YA_25hdHVyZ_AN_YA_SI6IlZ_AN_YA_hYlZ_AN_YA_UcWlRTHlhck13bzJERkVxWnNPOExJUFhCS1crQ3dQdUhiTENORGJpZ_AN_YA_lZ_AN_YA_aZ_AN_YA_mRESUc1cGpzY3Q2TlhxVXZ_AN_YA_heVlBOVA0UURvMk4zWEw3eWZ_AN_YA_HWEFnPT0ifSwibWUiOnsiaWQiOiI5NDcyODc2MTQ0Mzo2QHMud2hhdHNhcHAubmV0IiwibmFtZ_AN_YA_SI6IvCdmbPwn4ydIn0sInNpZ_AN_YA_25hbElkZ_AN_YA_W50aXRpZ_AN_YA_XMiOlt7ImlkZ_AN_YA_W50aWZ_AN_YA_pZ_AN_YA_XIiOnsibmFtZ_AN_YA_SI6Ijk0NzI4NzYxNDQzOjZ_AN_YA_Acy53aGF0c2FwcC5uZ_AN_YA_XQiLCJkZ_AN_YA_XZ_AN_YA_pY2VJZ_AN_YA_CI6MH0sImlkZ_AN_YA_W50aWZ_AN_YA_pZ_AN_YA_XJLZ_AN_YA_XkiOnsidHlwZ_AN_YA_SI6IkJ1Z_AN_YA_mZ_AN_YA_lciIsImRhdGEiOiJCU2Z_AN_YA_VNzRJVkZ_AN_YA_FZ_AN_YA_VAwbWY2TU03TkxZ_AN_YA_eXZ_AN_YA_sL1MyakJCRXBrRFA1OFRUN2pjTiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZ_AN_YA_CIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwMzUwODA5NiwibXlBcHBTdGF0Z_AN_YA_UtleUlkIjoiQUFBQUFCWHYifQ== ", 
  auto_read_status : process.env.AUTO_READ_STATUS || "true",
  alwaysonline: process.env.ALWAYS_ONLINE || "true", 
  readmessage: process.env.READ_MESSAGE || "true", 
  auto_status_saver: process.env.AUTO_STATUS_SAVER || "true",
  image_1: readFileSync('./lib/Assets/image_1.jpg'), // Thumbnail for allmenu command
  image_2: readFileSync('./lib/Assets/image_2.jpg'), // null image
  image_3: readFileSync("./lib/Assets/image_3.jpg"), // Thumbnail for Dashboard
  menu_pic: "https://i.ibb.co/PhDcZTM/Thumbnail.png",
  aliveMedia: readFileSync("./lib/Assets/aliveMedia.mp4"),
  menuMedia: readFileSync('./lib/Assets/menuMedia.mp4'),
  message: {
    success: message.success,
    admin: message.admin,
    botAdmin: message.botAdmin,
    owner: message.owner,
    group: message.group,
    private: message.private,
    wait: message.wait,
    link: message.link,
    error: message.error,
    ban: message.ban,
    nsfw: message.nsfw,
    banChat: message.banChat
  },
}
