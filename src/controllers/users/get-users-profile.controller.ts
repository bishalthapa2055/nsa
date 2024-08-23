import { Request , Response } from "express";
import { User } from "../../model/users";
import { BadRequestError } from "../../common/errors/bad-request-error";


const getUserProfileController = async(req : Request , res :Response ) =>{
    try {
      const id = req.UserData?.id;
      
      const isExistUser = await User.findById(id);

      if(!isExistUser){
        throw new BadRequestError("User doesnot exists")
      }

      let orgDate ;

      if(isExistUser.date_of_birth){
          const date = new Date(isExistUser.date_of_birth * 1000);

          // Get the date and time in ISO 8601 format
          orgDate = date.toISOString();
      }
      res.status(200).json({
        status : true ,
        data :{
            id : isExistUser.id,
            full_name : isExistUser.full_name,
            gender : isExistUser.gender,
            email : isExistUser.email,
            address : isExistUser.address,
            lng_lat : isExistUser.lng_lat,
            phone_number : isExistUser.phone_number,
            timeZone : isExistUser.timeZone,
            photo_url : isExistUser.photo_url,
            date_of_birth : orgDate,
            promotion_notification : isExistUser.promotion_notification,
            booking_confirmation_sms_notification : isExistUser.booking_confirmation_sms_notification,
            booking_confirmation_email_notification : isExistUser.booking_confirmation_email_notification,
            deleted: isExistUser.deleted,
            banned:isExistUser.banned,
            device_info : isExistUser.device_info,
            createdAt : isExistUser.createdAt,
            updatedAt : isExistUser.updatedAt
        }
      })
    } catch (error) {
        res.status(400).json({
            status : false ,
            error : (error as any).message ? (error as any).message : "Internal Server Error"
        })
    }
}

export { getUserProfileController as getUserProfileControllerHandler }