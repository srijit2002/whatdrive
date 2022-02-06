const express = require("express");
const path = require("path");
const driveInstance = require("../vendors/auth");

//controllers
const uploadFile = require("../controllers/fileUploader");
const downloadFile = require("../controllers/fileDownloader");
const fs = require("fs");

//initializing api route
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/upload", async (req, res) => {
  const { url, filetype } = req.body;
  const filename = `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}.${path.basename(filetype)}`;
  const localfilepath = path.join(__dirname, "../", "public", filename);
  await downloadFile(url,localfilepath);
  await uploadFile(localfilepath,filetype,filename,driveInstance);
  if(fs.existsSync(localfilepath)){
    fs.unlinkSync(localfilepath);
  }
  res.json({message:"file saved in your drive successfully"});
});
module.exports = app;
