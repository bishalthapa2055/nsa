import { Request , Response } from "express";
import { Arena } from "../../model/arena";
import { BadRequestError } from "../../common/errors/bad-request-error";

const getArenaProfile = async( req : Request , res : Response ) =>{
    try {
        const id = req.arenaData?.id;

        const isExistArena = await Arena.findById(id).populate('weekly_availability','schedules');

        if(!isExistArena){
            throw new BadRequestError("Arena doesnot exists")
        }

        res.status(200).json({
            status : true ,
            data : {
                arena_full_name : isExistArena.arena_full_name ,
                phone_number : isExistArena.phone_number ,
                email  : isExistArena.email,
                registered_year : isExistArena.registered_year,
                photo_url  : isExistArena.photo_url,
                registration_number : isExistArena.registration_number,
                registration_photo : isExistArena.registration_photo,
                secondary_number  : isExistArena.secondary_number,
                telephone_number : isExistArena.telephone_number,
                under_review : isExistArena.under_review,
                onboarding_done : isExistArena.onboarding_done,
                lng_lat : isExistArena.lng_lat,
                address : isExistArena.address,
                is_email_verified : isExistArena.is_email_verified,
                promotion_notification : isExistArena.promotion_notification,
                booking_confirmation_sms_notification : isExistArena.booking_confirmation_sms_notification,
                booking_confirmation_email_notification : isExistArena.booking_confirmation_email_notification,
                timeZone : isExistArena.timeZone,
                weekday_price : isExistArena.weekday_price,
                weekend_price : isExistArena.weekend_price,
                weekly_availability : isExistArena.weekly_availability,

                createdAt : isExistArena.createdAt,
                updatedAt : isExistArena.updatedAt,
            }
        })
    } catch (error) {
        res.status(400).json({
            status : false ,
            error  : (error as any).message ? (error as any).message : "Internal Server Error"
        })
    }
}


export { getArenaProfile as getArenaProfileHandler }