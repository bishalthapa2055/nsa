import { Request , Response } from "express";
import { Arena } from "../../model/arena";
import { BadRequestError } from "../../common/errors/bad-request-error";
import { User } from "../../model/users";

const createArenaProfileController = async ( req : Request , res : Response ) =>{
    try {
        const {
            lng_lat ,
            address ,
            photo_url ,
            arena_full_name ,
            email ,
            registration_number ,
            registered_year ,
            secondary_number ,
            telephone_number ,
            registration_photo ,
            weekday_price ,
            weekend_price ,
            promotion_notification ,
            booking_confirmation_sms_notification ,
            booking_confirmation_email_notification ,
            timeZone
        } = req.body ;


        const id = req.currentArena?.id;

        const isExistArena = await Arena.findById(id);

        if(!isExistArena){
            throw new BadRequestError("Arena doesnot exists")
        }


        if(promotion_notification === false || promotion_notification === true  ){
            isExistArena.promotion_notification = promotion_notification.toString() ||   isExistArena.promotion_notification

        }
        if( booking_confirmation_email_notification === false || booking_confirmation_email_notification === true){

            isExistArena.booking_confirmation_email_notification =booking_confirmation_email_notification.toString() || isExistArena.booking_confirmation_email_notification
        }
        if(booking_confirmation_sms_notification === false  || booking_confirmation_sms_notification === true){
           
            isExistArena.booking_confirmation_sms_notification = booking_confirmation_sms_notification.toString()  || isExistArena.booking_confirmation_sms_notification
        }

        if(email){
            const isExistArena = await Arena.findOne({
                email,
                _id : {$ne : id}
            })
            if(isExistArena){
                throw new BadRequestError("Email address already used by another user !!!")
            }

            const isExistEmailUser = await User.findOne({
                email
            });

            if(isExistEmailUser){
                throw new BadRequestError("Email Address Used ")
            }
        }


        if(registered_year){
            // console.log(date_of_birth)
            const newDate = new Date(registered_year)
            // console.log(newDate)
            const timeStampMili = newDate.getTime()
            // console.log(timeStampMili)
            isExistArena.registered_year = Math.floor(timeStampMili /1000)
        }

        isExistArena.lng_lat = lng_lat  || isExistArena.lng_lat
        isExistArena.email = email  || isExistArena.email
        isExistArena.address = address  || isExistArena.address
        isExistArena.photo_url = photo_url  || isExistArena.lng_lat
        isExistArena.arena_full_name = arena_full_name  || isExistArena.arena_full_name
        isExistArena.registration_number = registration_number  || isExistArena.registration_number
        isExistArena.registration_photo = registration_photo  || isExistArena.registration_photo
        isExistArena.secondary_number = secondary_number  || isExistArena.secondary_number
        isExistArena.telephone_number = telephone_number  || isExistArena.telephone_number
        isExistArena.weekday_price = weekday_price  || isExistArena.weekday_price
        isExistArena.weekend_price = weekend_price  || isExistArena.weekend_price
        isExistArena.timeZone = timeZone  || isExistArena.timeZone

        const saveData = await isExistArena.save();

        if(!saveData){
            throw new BadRequestError("Unable to add data")
        }

        if(
            saveData.arena_full_name &&
            saveData.lng_lat &&
            saveData.address && 
            saveData.phone_number && 
            saveData.registration_number &&
            saveData.photo_url && 
            saveData.registration_photo && 
            saveData.weekday_price &&
            saveData.weekend_price 
        ){
            const  updateOnboardingStatus = await Arena.findByIdAndUpdate(
                id ,
                { onboarding_done : true }
            )

            if(updateOnboardingStatus){
                //send email template
            }
        }

        res.status(200).json({
            status : true ,
            data : {
                arena_full_name : saveData.arena_full_name  ,
                phone_number :  saveData.phone_number ,
                email :saveData.email ,
                registered_year: saveData.registered_year ,
                photo_url : saveData.photo_url,
                registration_number :saveData.registration_number ,
                registration_photo :saveData.registration_photo ,
                secondary_number  : saveData.secondary_number,
                telephone_number : saveData.telephone_number ,
                lng_lat : saveData.lng_lat,
                address : saveData.address ,
                weekday_price : saveData.weekday_price ,
                weekend_price : saveData.weekend_price ,
                createdAt : saveData.createdAt,
                updatedAt : saveData.updatedAt
            }
        });

        if(
            saveData.arena_full_name &&
            saveData.lng_lat &&
            saveData.address && 
            saveData.phone_number && 
            saveData.registration_number &&
            saveData.photo_url && 
            saveData.registration_photo && 
            saveData.weekday_price &&
            saveData.weekend_price 
        ){

        }

    } catch (error) {
        res.status(400).json({
            status : false ,
            error : (error as any).message ? (error as any).message : "Debug Backend "
        })
    }
}


export { createArenaProfileController as createArenaProfileControllerHandler }