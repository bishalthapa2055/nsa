import { BadRequestError } from "../common/errors/bad-request-error";

// Utility function to validate time in HH:mm format
const isValidTime = (time: string) => /^([01]\d|2[0-3]):([0-5]\d)$/.test(time);


// Function to validate each day's schedule
export const validateSchedules = (schedules: any[]) => {
    if (schedules.length !== 7) {
        throw new BadRequestError("Invalid data: must include 7 day schedules.");
    }

    schedules.forEach(schedule => {
        const { day, startTime, endTime } = schedule;

        if (!isValidTime(startTime) || !isValidTime(endTime)) {
            throw new BadRequestError(`Invalid time format for ${day}. Use HH:mm (24-hour format).`);
        }

        const startHour = parseInt(startTime.split(':')[0], 10);
        const startMinute = parseInt(startTime.split(':')[1], 10);
        const endHour = parseInt(endTime.split(':')[0], 10);
        const endMinute = parseInt(endTime.split(':')[1], 10);

        if (startHour > endHour || (startHour === endHour && startMinute >= endMinute)) {
            throw new BadRequestError(`Start time must be before end time for ${day}.`);
        }
    });
};