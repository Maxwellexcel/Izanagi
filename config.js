//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaqgxNt5q08c9XMItG3P";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaqgxNt5q08c9XMItG3P";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2348121373516";
global.owner = process.env.OWNER_NUMBER || "2348121373516";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUVXQWdidWpOZ1ROdTNnOWw2QXBWaHRRZkRjdUVYSWNGc2dJTmNaeEhIbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQXlKRHBXYTZEdW1ZcFNrVXY0eC9Pa2hac2w3ZVVabzR1SEVndktNcmwydz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSFo1ZTFhZWV6S0JUNys5QjRsSGtTNDBiR1BFTXFxNURPMWVLKzdUd1ZNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEUTVIazlMTnlaMmhhd2o1MUlQaE10MFRxU09LTG5Bd2pZMDk0d2YrY0N3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZHV1BWWXRBMW1scUZZSjhkcXNsSnpnMzVJU3NoREJiUUt0SDNWVGRoMTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlkxZHBYODdGcVdrYUJuNjVUV0lNQitHc0lUaEw1WlhLdFNtd09kMnk4RWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0ZlaUZTcXdHRDFuNjNFekxOUHFmb2F3YjE0TTdHcTkwMUd3RFQ2aVNYRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTFBKYkw1TS9IN1MrVkEwdnJhUDJrTCtydlkvY2hjcEFZcU9RNmJ1eFBuUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFETmZMMUNnWTJzT0t4SlFHNFFEQ2t6L1o4cng2MllqWDExZjEyaExaUWExa3JzYmtLSW9seGl1M3FJbUNQNVdqM0RIQjVZM0NrWklxNWMxMEdETEJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE2LCJhZHZTZWNyZXRLZXkiOiJBZ2k4ZlY3WW9nZ2E2eStzb0ZmMFJRSXZad3ljbnRSRVFkUnF4UDc0dVRBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJrTHhUOHhlWlJFQ3dHX3ZrUFFGdUFRIiwicGhvbmVJZCI6IjgzZWQ1YWNmLThiMmMtNDRiNi1iMGNkLWYzMmUxODQ5MzlhNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4QnBPeDB2WEdGa0pSeFA0SHYvVm1DdFVHZlU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM2ZOQmltVWpzTWZJT0FzOEtycjRLTGRPUVgwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlZLNVJRSEFHIiwibWUiOnsiaWQiOiIyMzQ5MDM0MTcxNTE1OjY4QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNObnV4NVlCRUx2eDNMWUdHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJBZFgyV1ZMMjBOQlFKQkVWeC8xaTFOVk9CdDBweHVscU1WdGZzeUJ2QVJBPSIsImFjY291bnRTaWduYXR1cmUiOiIrU2ZHc2VwTFMyeWZsMW1ETFFKN2luU3cwUnBLbEJ1NUxqRTFJeUo4Q1dvZk8yU3BXQzVQR2lzdFJPRmJKcHBzSTVER2lvR29OMWRJYVhyWkRVdnlDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiN1FGaTR3eGFiQWVtbG9DaDkxbCswb09KZWI5RHJvM205c1E0UjVFNEtVMnNza1AyelVTay9WU2VUOXFqZEZmN1JUZHRNMkp1Wjc0WUxqaXp2ODArQUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDM0MTcxNTE1OjY4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFIVjlsbFM5dERRVUNRUkZjZjlZdFRWVGdiZEtjYnBhakZiWDdNZ2J3RVEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjUzODA4MDh9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "QUEEN_NIKKA",
  packname: process.env.PACK_NAME || "N I K K A",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
