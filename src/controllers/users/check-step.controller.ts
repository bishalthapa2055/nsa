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
        
        if(
            !isExistUser.photo_url
        ){
            return res.status(200).json({
                status : true ,
                message : "Profile Picture to be added",
                step : 1
            })
        }else if(
            !isExistUser.lng_lat?.coordinates[0] && 
            !isExistUser.lng_lat?.coordinates[1] &&
            !isExistUser.address
        ){
            return res.status(200).json({
                status : true ,
                message : "Location to be added ",
                step : 2
            })
        } else if(
            !isExistUser.full_name &&
            !isExistUser.date_of_birth &&
            !isExistUser.gender 
        ){
            return res.status(200).json({
                status : true ,
                message : "General Details to be added ",
                step : 3
            })
        } else if(
            !isExistUser.promotion_notification &&
            !isExistUser.booking_confirmation_sms_notification &&
            !isExistUser.booking_confirmation_email_notification
        ){
            return res.status(200).json({
                status : true ,
                message : "Notifications  Details to be added ",
                step : 3
            })
        }else {
            return res.status(200).json({
                status : true ,
                message : "Onboarding completed , Proceed to User Dashboard",
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


export { checkUserStats as checkUserStatsHandler }