import { Request , Response } from "express";
import { User } from "../../model/users";
import { BadRequestError } from "../../common/errors/bad-request-error";
import { Password } from "../../helpers/password";
import { Arena } from "../../model/arena";

const updateUserDetails = async (req : Request , res : Response ) =>{
    try {
        const {
            pass_key ,
            photo_url ,
            lng_lat ,
            full_name ,
            email ,
            address ,
            date_of_birth ,
            gender ,
            promotion_notification ,
            booking_confirmation_email_notification ,
            booking_confirmation_sms_notification
        } = req.body;

        const id = req.UserData?.id;

        const isExistUser = await User.findById(id);
        if(!isExistUser){
            throw new BadRequestError("User doesnot exists")
        }
        let encpassword ;
        if(pass_key){
            encpassword = await Password.toHash(pass_key);
            isExistUser.pass_key = encpassword || isExistUser.pass_key ;
        }

        if(email){
            const isExistEmailUser = await User.findOne({
                email,
                _id : {$ne : id}
            })
            if(isExistEmailUser){
                throw new BadRequestError("Email address already used by another user !!!")
            }

            const isExistEmailArena = await Arena.findOne({
                email
            });

            if(isExistEmailArena){
                throw new BadRequestError("Email Address Used ")
            }
        }

        if(date_of_birth){
            // console.log(date_of_birth)
            const newDate = new Date(date_of_birth)
            // console.log(newDate)
            const timeStampMili = newDate.getTime()
            // console.log(timeStampMili)
            isExistUser.date_of_birth = Math.floor(timeStampMili /1000)
        }

        if(promotion_notification === false || promotion_notification === true  ){
            isExistUser.promotion_notification = promotion_notification.toString() ||   isExistUser.promotion_notification

        }
        if( booking_confirmation_email_notification === false || booking_confirmation_email_notification === true){

            isExistUser.booking_confirmation_email_notification =booking_confirmation_email_notification.toString() || isExistUser.booking_confirmation_email_notification
        }
        if(booking_confirmation_sms_notification === false  || booking_confirmation_sms_notification === true){
           
            isExistUser.booking_confirmation_sms_notification = booking_confirmation_sms_notification.toString()  || isExistUser.booking_confirmation_sms_notification
        }

        isExistUser.photo_url = photo_url || isExistUser.photo_url ;
        isExistUser.email = email || isExistUser.email ;
        isExistUser.full_name = full_name || isExistUser.full_name ;
        isExistUser.lng_lat = lng_lat || isExistUser.lng_lat ;
        isExistUser.address = address || isExistUser.address ;
        isExistUser.gender = gender || isExistUser.gender ;


        const updateUser = await isExistUser.save();

        if(!updateUser){
            throw new BadRequestError("Unable to update the users details")
        }

        if(
            updateUser.full_name &&
            updateUser.pass_key &&
            updateUser.photo_url && 
            updateUser.lng_lat &&
            updateUser.email &&
            updateUser.date_of_birth &&
            updateUser.gender
        ){
            //send onboarding to true 
            const updateOnboardingStatus = await  User.findByIdAndUpdate(
                id ,
                {onboarding_done : true }
            );

            if(updateOnboardingStatus){
                //send email welcome templates || push notificaitons
            }
        }

        res.status(200).json({
            status : true ,
            data : {
                id : updateUser.id,
                photo_url : updateUser.photo_url ,
                full_name : updateUser.full_name,
                lng_lat : updateUser.lng_lat,
                address  : updateUser.address ,
                email :updateUser.email ,
                date_of_birth : updateUser.date_of_birth,
                gender : updateUser.gender,
                is_email_verified :updateUser.is_email_verified,
                stream_token : updateUser.stream_token,
                promotion_notification: updateUser.promotion_notification,
                booking_confirmation_sms_notification : updateUser.booking_confirmation_sms_notification,
                booking_confirmation_email_notification : updateUser.booking_confirmation_email_notification, 
                createdAt : updateUser.createdAt,
                updatedAt : updateUser.updatedAt
            }
        })

    } catch (error) {
        res.status(400).json({
            status : false ,
            error : (error as any).message ? (error as any).message : "Internal Server error"
        })
    }
}

export { updateUserDetails as updateUserDetailsHandler }