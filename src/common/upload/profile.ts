import multerS3 from "multer-s3"
import multer from "multer"
import { Request } from "express"
import { S3Client } from "@aws-sdk/client-s3";
import { BadRequestError } from "../errors/bad-request-error";

// const S3 = require("aws-sdk/clients/s3")

type FileKey = "image" ;

const fileFilter = () =>{
    return (req : Request , file  : any , cb : any ) =>{
            const validFileType = ["jpeg" , "jpg" , "png" , "webp"];

            const fileType = file.mimetype.split("/")[1]

            if(validFileType.includes(fileType)){
                cb(null , true)
            }
            else{
                cb(
                    new BadRequestError(
                        `Invalid File Type, only ${validFileType} fileFilter are accepted `
                    ),
                    false
                )
            }


    }
}


const s3Config = new S3Client({
    region : process.env.AWS_REGION!,
    credentials :{
        accessKeyId : process.env.AWS_S3_ACCESS_KEY!,
        secretAccessKey : process.env.AWS_S3_SECRET_KEY!,
    }
});

const uploadFile = (folderName : string , bucketName : string , key : FileKey ) =>{

    return multer({
        fileFilter : fileFilter() ,
        storage : multerS3({
            s3 : s3Config ,
            bucket : `${bucketName}`,
            // acl: 'public-read',
            metadata(req , file , cb){
                cb(null , {fieldName : "TESTING_METADATA"})
            },
            contentType(req , file , cb){
                cb(null , file.mimetype)
            },
            key(req , file , cb){
                cb(
                    null,
                    `${folderName}/${Date.now().toString()}.${file.mimetype.split("/")[1]}`
                );
            }
        })

    })
}


export { uploadFile as uploadProfileHandler}