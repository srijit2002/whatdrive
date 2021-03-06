const fs=require("fs");
const uploadFile=async(filepath,filetype,filename,driveInstance)=>{
   try {
       await driveInstance.files.create({
            requestBody:{
                name:filename,
                MimeType:filetype
            },
            media:{
                MimeType:filetype,
                body:filepath
            } 
       })
   } catch (error) {
       console.log(error);
   }
}

module.exports=uploadFile;