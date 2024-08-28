import { Request , Response } from "express";
import WeeklySchedule from "../../model/open_end_time";
import { BadRequestError } from "../../common/errors/bad-request-error";
import { Arena } from "../../model/arena";
import { validateSchedules } from "../../helpers/validate-schedules";


const addWeeklyAvaibleController = async (req :Request , res : Response ) =>{
    try {
        const { schedules } = req.body;
        const id = req.arenaData?.id;

        const isExistArena = await Arena.findById(id);

        if(!isExistArena){
            throw new BadRequestError("Arena Doesnot exists !")
        }

        if(isExistArena.weekly_availability){
            throw new BadRequestError("Weekly Availbility already added")
        }

        if (!schedules || schedules.length !== 7) {
            return res.status(400).json({ message: 'Invalid data: must include 7 day schedules.' });
        }
        // Validate schedules input
        await validateSchedules(schedules);

        const newSchedule = new WeeklySchedule({ schedules });
        const dataRespo = await newSchedule.save();
    
        if(!dataRespo){
            throw new BadRequestError("Unable to add the weekly avaiability ")
        }

        if(dataRespo){
            isExistArena.weekly_availability = dataRespo.id;
            await isExistArena.save();
        }

        res.status(201).json({
            status : true ,
            data : dataRespo
        });
    } catch (error) {
        res.status(400).json({
            status : false ,
            error : (error as any).message ? (error as any).message : "Debug Backend !"
        })
    }
}

export { addWeeklyAvaibleController as addWeeklyAvaibleControllerHandler }