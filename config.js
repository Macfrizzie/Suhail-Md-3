const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="https://facebook.com/eksubot"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va4c0jLGpLHNfYJYyM1g";
global.website =process.env.GURL || "https://eksubot.blogspot.com" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/a5a07fa94d7106f7a969b.jpg" || "https://telegra.ph/file/a5a07fa94d7106f7a969b.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "+2348037218414";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2348037218414";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_04_04_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNixcbiAgICAgICAgMjIyLFxuICAgICAgICA0NixcbiAgICAgICAgMTcwLFxuICAgICAgICA4NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDgyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDM3LFxuICAgICAgICA0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTI0LFxuICAgICAgICA0LFxuICAgICAgICA5MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgODgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDczLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjIwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTYxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwLFxuICAgICAgICAzMixcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTIyLFxuICAgICAgICA0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDg4LFxuICAgICAgICA5NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDc0LFxuICAgICAgICA1NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQyLFxuICAgICAgICA4NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDksXG4gICAgICAgIDYxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMixcbiAgICAgICAgMjI1LFxuICAgICAgICA2MixcbiAgICAgICAgMTgyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzQsXG4gICAgICAgIDMxLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDg5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAzMixcbiAgICAgICAgNTksXG4gICAgICAgIDc4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjEzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA0N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDksXG4gICAgICAgIDMyLFxuICAgICAgICAxMDksXG4gICAgICAgIDExNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM4LFxuICAgICAgICA3MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzksXG4gICAgICAgIDMyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYyLFxuICAgICAgICA2MixcbiAgICAgICAgMTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAzNSxcbiAgICAgICAgNjksXG4gICAgICAgIDc3LFxuICAgICAgICAxODUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyOCxcbiAgICAgICAgMixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzksXG4gICAgICAgIDk4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNCxcbiAgICAgICAgMCxcbiAgICAgICAgODgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODAsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE5LFxuICAgICAgICA3NixcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIi8rV3VyWmJTQzV5WDZBRHJPMjhrM3dGRmprdHdIT2F1d2hGZ1d2NzdoaDQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm5RNllhYS16UjJHRXNONmpxTkxOcmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZThjMGVlYjQtMWIwOS00NGJmLWExODgtMjYxZjU5MjdiNjA0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI3LFxuICAgICAgMTU0LFxuICAgICAgOTUsXG4gICAgICAzNyxcbiAgICAgIDI0NyxcbiAgICAgIDE3NCxcbiAgICAgIDg1LFxuICAgICAgMjI1LFxuICAgICAgMjI5LFxuICAgICAgMzQsXG4gICAgICA4LFxuICAgICAgNCxcbiAgICAgIDQyLFxuICAgICAgMTk0LFxuICAgICAgMTQ3LFxuICAgICAgODQsXG4gICAgICAyNDcsXG4gICAgICAxMzUsXG4gICAgICAxMzMsXG4gICAgICAxODJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkzLFxuICAgICAgMTMsXG4gICAgICAyMTYsXG4gICAgICA1OSxcbiAgICAgIDgyLFxuICAgICAgNDUsXG4gICAgICA2MyxcbiAgICAgIDI0MCxcbiAgICAgIDEyMSxcbiAgICAgIDI0OSxcbiAgICAgIDY0LFxuICAgICAgNzAsXG4gICAgICAyNTEsXG4gICAgICAyMTQsXG4gICAgICA3MCxcbiAgICAgIDI0OCxcbiAgICAgIDcxLFxuICAgICAgMTcyLFxuICAgICAgMTc3LFxuICAgICAgMTA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdSNUtDVDdYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDM3MjE4NDE0OjU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRWtzdWJvdFwiLFxuICAgIFwibGlkXCI6IFwiMTY5NTMxMDE2MjQ1MjgzOjU5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lMb203UUdFSXZ4a3NBR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiY3plNHpaRkFKZTRSek1DemhlVWVkZkYyZFgyNWFveFh3djdUZngyazkwYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJrN2RFZ2xMN0Y2Y0pPVFFEelhHNjZvRW9RTE1FcjBuNWFGRlhINjlFZTNxK1VOUUs2VmkvZm14ZGorRlozTnhOU1ZORlFQQkJlRzd1aEhWN2hhdDhEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJLdVBraTZIelZneStkS3lvK3NOR3FjTTM0Y0RLbkVRWnBYZFZJVUlhTWlaVE9xd1U3TTZjcnN2WmR6ZGIvUEw1OUNFY0U5QTBQejFWSUh6SWl2aWhpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDM3MjE4NDE0OjU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NTEzOTg1NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdSVVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR1JVLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTXdnOGZCd1pQTXk3M1VLdk0wd3Npc25EaUVhY25ZcC9abHJ3M2ovNk1iZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzIwMTIwMzIyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Eksubot",
  ownername:process.env.OWNER_NAME|| "EksuBot",


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
