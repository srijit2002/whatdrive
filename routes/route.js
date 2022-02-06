const express=require("express");
const path = require("path");
const fs = require("fs");
const driveInstance=require("../vendors/auth");

//controllers
const uploadFile = require("../controllers/fileUploader");
const downloadFile = require("../controllers/fileDownloader");


//initializing api route
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/upload",async (req, res) => {
  try {
    const {url,filetype}=req.body;
    const filename = `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}.${path.basename(filetype)}`;
    await downloadFile(url, filename);
    const localfilepath = path.join(__dirname,"../","public",filename);
    await uploadFile(localfilepath, filetype, filename, driveInstance);
    fs.unlinkSync(localfilepath);
    res.status(200).json({message:`file uploaded to your drive succesfully`});
  } catch (error) {
    res.status(500).json({ message: `file upload failed.\n error-message:${error}` });
  }
});
module.exports=app;