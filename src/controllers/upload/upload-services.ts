import { Request , Response } from "express";
import { uploadProfileHandler } from "../../common/upload/profile";





const uploadFile = (
    key : any , 
    path : "profile"
) =>  async(req : Request  , res : Response) =>{
//   console.log(key , "key")
    const singleUpload = uploadProfileHandler(
        path ,
       process.env.AWS_S3_BUCKET!,
       key
    ).single(key)
    
    singleUpload(req, res, (err: any) => {
      // console.log(req.file)
        if (err) {
          return res
            .status(500)
            .json({ message: err.message ?? "Something Went Wrong" });
        }
  
        if (!req.file) {
          return res
            .status(400)
            .json({ message: "Please attach an file to upload" });
        }
        return res.json({ data: (req.file as any).location , originalName : req.file.originalname });
      });
}



export {uploadFile as uploadProfileControllerHandler}