import { Request , Response } from "express";
import { Arena } from "../../model/arena";
import { BadRequestError } from "../../common/errors/bad-request-error";

const checkOnboardStats = async( req : Request  , res : Response ) =>{
    try {
       const id  = req.currentArena?.id;
       
       const isExistArena = await Arena.findById(id);

       if(!isExistArena){
        throw new BadRequestError("Arena Doesnot exists")
       }


       if(
            !isExistArena.photo_url
        ){
            return res.status(200).json({
                status : true ,
                message : "Cover Photo to be added",
                step : 1
            })
        }else if(
            !isExistArena.address
        ){
            return res.status(200).json({
                status : true ,
                message : "Location to be added ",
                step : 2
            })
        } else if(
            !isExistArena.arena_full_name &&
            !isExistArena.registration_number &&
            !isExistArena.email
        ){
            return res.status(200).json({
                status : true ,
                message : "General Details to be added ",
                step : 3
            })
        } else if(
            !isExistArena.registration_photo 
        ){
            return res.status(200).json({
                status : true ,
                message : "Registration photo  to be added ",
                step : 4
            })
        }else if(
            !isExistArena.weekly_availability 
        ){
            return res.status(200).json({
                status : true ,
                message : "weekly_availability  to be added ",
                step : 5
            })
        }  
        else if(
            !isExistArena.weekend_price &&
            !isExistArena.weekday_price 
        ){
            return res.status(200).json({
                status : true ,
                message : "Price to be added ",
                step : 6
            })
        }else if(
            !isExistArena.promotion_notification &&
            !isExistArena.booking_confirmation_sms_notification &&
            !isExistArena.booking_confirmation_email_notification
        ){
            return res.status(200).json({
                status : true ,
                message : "Notifications  Details to be added ",
                step : 7
            })
        }else {
            return res.status(200).json({
                status : true ,
                message : "Onboarding completed , Proceed to Arena Dashboard",
                step : 0
            })
        }

       
    } catch (error) {
        res.status(400).json({
            status : false ,
            error : (error as any).message ? (error as any).message : "Internal Server Error"
        })
    }
}


export { checkOnboardStats as checkOnboardStatsArenaRouter }