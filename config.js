const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348155715870";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_44_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI4LFxuICAgICAgICA2NyxcbiAgICAgICAgNjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODgsXG4gICAgICAgIDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDUyLFxuICAgICAgICA5OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDkyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDc0LFxuICAgICAgICA2NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTksXG4gICAgICAgIDE0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjUxLFxuICAgICAgICA0NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDk0LFxuICAgICAgICA4MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg1LFxuICAgICAgICAyOCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTA3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTczLFxuICAgICAgICA5LFxuICAgICAgICA3MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTksXG4gICAgICAgIDUzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDM5LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzksXG4gICAgICAgIDUwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDExNixcbiAgICAgICAgNDMsXG4gICAgICAgIDQ4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzksXG4gICAgICAgIDQyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAxLFxuICAgICAgICA3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzEsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDg2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDY5LFxuICAgICAgICA5NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXTG1RUm05SjVIK1JtRFQ4bFJrdkFuS3NJbmJ6b2h3QVFxWnJGbkJzcnA4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxNTU3MTU4NzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkExNjJCMUYxNUQxODIwQ0JBREM2NUI2NTU2NTQ4ODBBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTk0MjI2NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxNTU3MTU4NzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjA4RkZDNzAzQzNDMDY0MTgwREQyNEZGRTBFNzk4QjRBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTk0MjI2OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJnRTRmeVUwclRrdTlDYmFvOUJnOWdnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjVkYjM1MTRkLTBkZjktNGNhNC05ZWU2LTlkMWMyNDYxOTk2NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNSxcbiAgICAgIDU0LFxuICAgICAgMTY0LFxuICAgICAgMTU5LFxuICAgICAgNDIsXG4gICAgICA4NSxcbiAgICAgIDI3LFxuICAgICAgMTQxLFxuICAgICAgNTYsXG4gICAgICAxMTAsXG4gICAgICAxNjEsXG4gICAgICA2MixcbiAgICAgIDIwNSxcbiAgICAgIDc3LFxuICAgICAgMjQ5LFxuICAgICAgNDgsXG4gICAgICAxOTMsXG4gICAgICAxMTMsXG4gICAgICA0NCxcbiAgICAgIDIxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTIsXG4gICAgICAyMzgsXG4gICAgICAyMTksXG4gICAgICA1LFxuICAgICAgMTA0LFxuICAgICAgMTAsXG4gICAgICA1LFxuICAgICAgMTk3LFxuICAgICAgMTgwLFxuICAgICAgMTY5LFxuICAgICAgMTQ1LFxuICAgICAgMTMzLFxuICAgICAgMTg1LFxuICAgICAgMjE5LFxuICAgICAgMTg1LFxuICAgICAgMTkyLFxuICAgICAgOSxcbiAgICAgIDE0NyxcbiAgICAgIDg2LFxuICAgICAgMTM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxCU01GUkJQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTU1NzE1ODcwOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNYXN0ZXIgSm9oblwiLFxuICAgIFwibGlkXCI6IFwiOTA0ODY2NTYyNjIzODY6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOUEFpcTBGRVBMNGtMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInNUUDNBYk1HdWk5Y1NqdWdYbDN0dWhlcWhqV2M2clZmMnJqUU1JdkZJM0E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMTVWWWFvdnVjdkRwdWJCSEpQNTFic2tSRytQYXV0a3RYdTVEa1E2ZENVMUhvT2EyZnA2bytNSjQ2dVUydzVkSmhZazd4WXB2bUMrY0NIY3V1bGlmQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiazRxaXloOFAzRGMvd1c0MVF3Z0ltc091WWdMRlZsTHlTZUlnQWxKYXVHY2RxbU03OHBuS1lTNDZ5MnlkQkJrM1Q2K0d2MTZVWWRDOGEvbDY4MGEvaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE1NTcxNTg3MDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk5NDIyNjIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIbEhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhsSC5qc29uIjogIntcImtleURhdGFcIjpcIi9uejNhQ0tZeTFYdnBwL3hOQkZpQStzL0xRblBGQ3NoSUVBdy9HRTZZTnM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQzNjcyMTIzNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5OTQyMjcwNjQ3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
