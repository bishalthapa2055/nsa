// import { Request , Response } from "express";
// import { Arena } from "../../model/arena";
// import { BadRequestError } from "../../common/errors/bad-request-error";

// const checkOnboardStats = async( req : Request  , res : Response ) =>{
//     try {
//        const id  = req.currentArena?.id;
       
//        const isExistArena = await Arena.findById(id);

//        if(!isExistArena){
//         throw new BadRequestError("Arena Doesnot exists")
//        }


//        if(
//             !isExistArena.photo_url
//         ){
//             return res.status(200).json({
//                 status : true ,
//                 message : "Profile Picture to be added",
//                 step : 1
//             })
//         }else if(
//             !isExistArena.lng_lat?.coordinates[0] && 
//             !isExistArena.lng_lat?.coordinates[1] &&
//             !isExistArena.address
//         ){
//             return res.status(200).json({
//                 status : true ,
//                 message : "Location to be added ",
//                 step : 2
//             })
//         } else if(
//             !isExistArena.full_name &&
//             !isExistArena.date_of_birth &&
//             !isExistArena.gender 
//         ){
//             return res.status(200).json({
//                 status : true ,
//                 message : "General Details to be added ",
//                 step : 3
//             })
//         } else if(
//             !isExistArena.promotion_notification &&
//             !isExistArena.booking_confirmation_sms_notification &&
//             !isExistArena.booking_confirmation_email_notification
//         ){
//             return res.status(200).json({
//                 status : true ,
//                 message : "Notifications  Details to be added ",
//                 step : 3
//             })
//         }else {
//             return res.status(200).json({
//                 status : true ,
//                 message : "Onboarding completed , Proceed to User Dashboard",
//                 step : 0
//             })
//         }

       
//     } catch (error) {
//         res.status(400).json({
//             status : false ,
//             error : (error as any).message ? (error as any).message : "Internal Server Error"
//         })
//     }
// }


// export { checkOnboardStats as checkOnboardStatsArenaRouter }