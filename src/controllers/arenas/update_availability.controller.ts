import { Request , Response } from "express";
import { Arena } from "../../model/arena";
import { BadRequestError } from "../../common/errors/bad-request-error";
import WeeklySchedule from "../../model/open_end_time";
import { validateSchedules } from "../../helpers/validate-schedules";

const updateWeeklyAvailability = async(req : Request , res : Response ) =>{
    try {
        
        const { schedules } = req.body;
        const id = req.arenaData?.id;

        const isExistArena = await Arena.findById(id);

        if(!isExistArena){
            throw new BadRequestError("Arena Doesnot exists !")
        }

        if(!isExistArena.weekly_availability){
            throw new BadRequestError("Weekly Availbility doesnot exists !")
        }

        if (!schedules || schedules.length !== 7) {
            return res.status(400).json({ message: 'Invalid data: must include 7 day schedules.' });
        }

        const isExistWeekly = await WeeklySchedule.findById(isExistArena.weekly_availability);

        if(!isExistWeekly){
            throw new BadRequestError("Weekly Availability doesnot exists !")
        }

         // Validate schedules input
        await validateSchedules(schedules);

        //delete existing data and put all existing data 
        try {
            await WeeklySchedule.findByIdAndDelete(isExistArena.weekly_availability);
        } catch (error) {
           throw new BadRequestError((error as any).message); 
        }

        const newSchedule = new WeeklySchedule({ schedules });
        const dataRespo = await newSchedule.save();

        if(!dataRespo){
            throw new BadRequestError("Unable to update the weekly avaiability ")
        }

        if(dataRespo){
            isExistArena.weekly_availability = dataRespo.id;
            await isExistArena.save();
        }

        res.status(200).json({
            status : true ,
            data : dataRespo
        })


    } catch (error) {
        res.status(400).json({
            stauts : false ,
            error : (error as any).message ? (error as any).message : "Debug Backend !"
        })
    }
}

export { updateWeeklyAvailability as updateWeeklyAvailabilityHandler  }