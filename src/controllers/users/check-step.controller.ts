import { Request , Response }  from "express";
import { User } from "../../model/users";
import { BadRequestError } from "../../common/errors/bad-request-error";

const checkUserStats = async (req : Request , res : Response ) =>{
    try {
        const id = req.currentUser?.id;

        const isExistUser = await User.findById(id);

        if(!isExistUser){
            throw new BadRequestError("User doesnot exists !")
        }

        if(isExistUser.onboarding_done){
            return res.status(200).json({
                status : true ,
                message : "Onboarding completed , Proceed to User Dashboard",
                step : 0
            })
        }
        if(isExistUser.pass_key){
            return res.status(200).json({
                status : true ,
                message : "Passkey already added ",
                step : 1
            })
        } 

        if(isExistUser.photo_url){
            return res.status(200).json({
                status : true ,
                message : "Profile Picture already added ",
                step : 2
            })
        } 

        if(
            isExistUser.lng_lat?.coordinates[0] && 
            isExistUser.lng_lat?.coordinates[1] &&
            isExistUser.address
        ){
            return res.status(200).json({
                status : true ,
                message : "Location already added ",
                step : 3 
            })
        } 

        if(
            isExistUser.full_name &&
            isExistUser.date_of_birth &&
            isExistUser.gender 
        ){
            return res.status(200).json({
                status : true ,
                message : "General Details already added ",
                step : 5
            })
        } 

        if(
            isExistUser.promotion_notification &&
            isExistUser.booking_confirmation_sms_notification &&
            isExistUser.booking_confirmation_email_notification
        ){
            return res.status(200).json({
                status : true ,
                message : "Notifications  Details already added ",
                step : 6
            })
        } 


    } catch (error) {
        res.status(400).json({
            status : false ,
            error : (error as any).message ? (error as any).message : "Internal Server Error"
        })
    }
}


export { checkUserStats as checkUserStatsHandler }