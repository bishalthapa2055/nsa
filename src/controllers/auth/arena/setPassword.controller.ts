import { Request , Response } from "express";
import { BadRequestError } from "../../../common/errors/bad-request-error";
import { Otp } from "../../../model/otp";
import { Password } from "../../../helpers/password";
import config from "../../../config";
import jwt from "jsonwebtoken";
import { Arena } from "../../../model/arena";


const setArenaPassword = async ( req : Request , res : Response ) =>{
    try {
        const { 
            phone_number ,
            pass_key 
        } = req.body;

        const isExistOtpNumber = await Otp.findOne({
            phone_number
        });

        if(!isExistOtpNumber){
            throw new BadRequestError("Arena doesnot exists ")
        }

        if(!isExistOtpNumber.verified){
            throw new BadRequestError("Otp not verified")
        }
        
        let trimmedPass ;
        if(pass_key){
            trimmedPass = pass_key ? pass_key.trim() : " "
        }
        const hashedPass = await Password.toHash(trimmedPass);

       // create user 
       const createArena = await Arena.build({phone_number , pass_key : hashedPass}).save();
       if(!createArena){
           throw new BadRequestError("Unable to create user")
       }

       //if verified then remove  otp model and then create the arenas  
       await Otp.findByIdAndDelete(isExistOtpNumber.id);
        //create access token for further processing
        const arenaJwt = jwt.sign({
            id:createArena.id,
            phone_number: phone_number,
                },
                `${config.app.access_token}`,
                {
                expiresIn:"30days"
            });

            res.status(200).json({
                status : true ,
                message : "Otp verified ",
                data  :{
                    accessToken : arenaJwt,
                    phone_number : phone_number ,
                    arena_id : createArena.id
                }
            })
    } catch (error) {
        res.status(400).json({
            status : false ,
            error : (error as any).message ?(error as any).message : "Internal Server Error "
        })
    }
}

export { setArenaPassword as setArenaPasswordHandler }