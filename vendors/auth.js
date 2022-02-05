const { google } = require("googleapis");

//config files
require("dotenv").config();
const CLIENT_ID = process.env.WHATDRIVE_CLIENT_ID;
const CLIENT_SECRET = process.env.WHATDRIVE_CLIENT_SECRET;
const REDIRECT_URI = process.env.WHATDRIVE_REDIRECT_URI;
const REFRESH_TOKEN = process.env.WHATDRIVE_REFRESH_TOKEN;


//setting oauth2 client
const oath2client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oath2client.setCredentials({ refresh_token: REFRESH_TOKEN });

//google drive instance
const driveInstance = google.drive({ version: "v3", auth: oath2client });
module.exports=driveInstance;
