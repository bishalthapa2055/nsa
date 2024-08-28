import mongoose, { Schema, Document } from 'mongoose';


export interface TimeSchedule {
    day: string;         // Day of the week
    startTime: string;   // Start time in HH:mm  24 Hr format
    endTime: string;     // End time in HH:mm  24 Hr format
}


// Define a TypeScript interface for the document
interface IWeeklySchedule extends Document {
    schedules: TimeSchedule[];
}

// Create a schema definition
const TimeScheduleSchema: Schema = new Schema({
    day: { type: String, required: true, enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
});

// Create a schema for the weekly schedule
const WeeklyScheduleSchema: Schema = new Schema({
    schedules: {
        type: [TimeScheduleSchema],
        required: true,
        validate: [(val: TimeSchedule[]) => val.length === 7, 'Schedules must have 7 days.']
    },
});

// Create a Mongoose model
const WeeklySchedule = mongoose.model<IWeeklySchedule>('WeeklySchedule', WeeklyScheduleSchema);

export default WeeklySchedule;
