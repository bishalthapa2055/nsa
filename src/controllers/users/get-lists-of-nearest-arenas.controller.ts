import { Request , Response } from "express";
import { BadRequestError } from "../../common/errors/bad-request-error";
import { Arena } from "../../model/arena";

const getNearestArena = async( req : Request , res : Response ) =>{
    try {
        const  lng_lat  = req.UserData?.lng_lat;
        const  radius = 5 as number ;  //5 KM

        if (!lng_lat) {
            throw new BadRequestError("User location not provided");
        }
        console.log(req.UserData?.lng_lat)

        const data = await Arena.aggregate([
            {
                $geoNear : {
                near :{ type : "Point" , coordinates :[lng_lat.coordinates[0]!, lng_lat.coordinates[1]! ] },
                key   : "lng_lat",
                maxDistance :radius*1000, // distance should be always in meters
                distanceField :"dist.calculated",
                spherical : true
                }
            },
            // {
            //     $match: {
            //        deactivated: false,
            //        under_review: false,
            //       onboarding_done: true
            //     }
            // }
        ]);

        // console.log(data)
        if(!data){
            throw new BadRequestError("Unable to find the Arenas near your location")
        }

        if(data.length === 0){
            throw new BadRequestError("No Futsal Arenas at a moment !!!")
        }

        res.status(200).json({
            status : true ,
            total : data.length ,
            data : data
        })


    } catch (error) {
        res.status(400).json({
            status : false ,
            error : (error as any).message ? (error as any).message : "Debug Backend"
        })
    }
}

export { getNearestArena as getNearestArenaHandler }