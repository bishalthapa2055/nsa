import {Request , Response } from "express";
import { Otp } from "../../../model/otp";
import { otpGenerator } from "../../../common/otp/generateOtp";
import { BadRequestError } from "../../../common/errors/bad-request-error";
import { User } from "../../../model/users";
import { Arena } from "../../../model/arena";

const sendOtpUserController = async(req :Request , res : Response ) =>{
    try {
        const { phone_number } = req.body;
        //check if phone number already registered by other users or arenas

        const isExistUser = await User.findOne({phone_number});

        if(isExistUser){
            throw new BadRequestError("Already registered as Player. Proceed to Login")
        }

        const isExistArena = await Arena.findOne({phone_number});

        if(isExistArena){
            throw new BadRequestError("Phone number registered as Futsal Arena")
        }
        //if phone number already exists in the otp model then update the model else create new documents

        const isExistPhoneNumber = await Otp.findOne({phone_number});

        if(isExistPhoneNumber){
            //update the code
            const otp = otpGenerator();
            const newExpDate = new Date(Date.now() + 10 * 60 * 1000).getTime(); 

            isExistPhoneNumber.otp_code = otp;
            isExistPhoneNumber.expiry = newExpDate;
            const updateCode = await isExistPhoneNumber.save();

            //send sms service integration
            if(!updateCode){
                throw new BadRequestError("Unable to resend code")
            }

            res.status(200).json({
                status : true ,
                message : "OTP resend sucessfull",
                data :{
                    phone_number ,
                    otp
                }
            })

        }else{
            //create new otp doc

            const otp = otpGenerator();
            const newExpDate = new Date(Date.now() + 10 * 60 * 1000).getTime(); 
            const createOtp = await Otp.build({
                phone_number : phone_number,
                otp_code : otp ,
                expiry : newExpDate
            }).save();

            if(!createOtp){
                throw new BadRequestError("Unable to create otp.")
            }
            //send api service integration
            res.status(200).json({
                status : true ,
                message : "Otp created sucessfully",
                data : {
                    phone_number ,
                    otp
                }
            })
        }
        

    } catch (error) {
        res.status(400).json({
            status : false ,
            error : (error as any).message ? (error as any).message : "Internal Server Error"
        })
    } 
}

export  { sendOtpUserController  as sendOtpUserControllerHandler }