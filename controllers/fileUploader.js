const fs=require("fs");
const uploadFile=async(filepath,filetype,filename,driveInstance)=>{
   if(!fs.existsSync(filepath))return; 
   try {
       await driveInstance.files.create({
            requestBody:{
                name:filename,
                MimeType:filetype
            },
            media:{
                MimeType:filetype,
                body:fs.createReadStream(filepath)
            } 
       })
   } catch (error) {
       console.log(error);
   }
}

module.exports=uploadFile;