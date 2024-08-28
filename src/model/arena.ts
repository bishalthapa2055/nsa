import mongoose, { ObjectId } from "mongoose";

export interface Point {
    type: 'Point';
    coordinates: [number, number]; // lontude and latitude
}



export interface ArenaAttrs {  
    
    arena_full_name ?: string;
    phone_number ?:string;
    email ?: string ;
    registered_year ?: number;
    photo_url ?: string;
    registration_number ?: string;
    registration_photo ?: string;
    secondary_number ?: string ;
    telephone_number ?: string ;
    deleted ?:boolean;
    banned ?:boolean;
    under_review ?: boolean;
    onboarding_done ?: boolean ;
    searchTerm ?: string;
    app_version ?: string;
    device_info ?:string;
    lng_lat ?: Point;
    address ?: string ;
    push_token ?: string ;
    deleted_at ?: Date;
    banned_at  ?:Date;
    deleted_reason ?: string ;
    banned_reason ?: string ;
    is_email_verified ?: boolean ;
    stream_token ?: string;
    promotion_notification ?: boolean ;
    booking_confirmation_sms_notification ?: boolean;
    booking_confirmation_email_notification ?: boolean ;
    email_otp_code ?: string ;
    email_otp_expired_at ?: number;
    deactivated ?: boolean;
    pass_key ?: string ;
    email_verification_encrypt ?: string;
    timeZone ?: string;
    weekday_price ?: number ;
    weekend_price ?: number ;
    weekly_availability ?: ObjectId ;
}



interface ArenaModel extends mongoose.Model<ArenaDoc>{
    build(attrs : ArenaAttrs) :ArenaDoc ;
}

export interface ArenaDoc extends mongoose.Document, ArenaAttrs {

    arena_full_name ?: string;
    phone_number ?:string;
    email ?: string ;
    date_of_birth ?: number;
    photo_url ?: string;
    registered_year ?: number;
    registration_number ?: string;
    registration_photo ?: string;
    secondary_number ?: string ;
    telephone_number ?: string ;
    deleted ?:boolean;
    banned ?:boolean;
    under_review ?: boolean;
    onboarding_done ?: boolean ;
    searchTerm ?: string;
    app_version ?: string;
    device_info ?:string;
    lng_lat ?: Point;
    address ?: string ;
    push_token ?: string ;
    deleted_at ?: Date;
    banned_at  ?:Date;
    deleted_reason ?: string ;
    banned_reason ?: string ;
    is_email_verified ?: boolean ;
    stream_token ?: string;
    promotion_notification ?: boolean ;
    booking_confirmation_sms_notification ?: boolean;
    booking_confirmation_email_notification ?: boolean ; 
    email_otp_code ?: string ;
    email_otp_expired_at ?: number;
    deactivated ?: boolean;
    pass_key ?: string ;
    email_verification_encrypt ?: string;
    timeZone ?: string;
    weekday_price ?: number ;
    weekend_price ?: number ;
    weekly_availability ?: ObjectId ;

    createdAt: Date;
    updatedAt: Date;
}

const ArenaSchema = new mongoose.Schema<ArenaDoc>({
    email :{
        type : String,
    },
    date_of_birth :{
        type : Number,
    },
    phone_number :{
        type : String,
    },
    secondary_number :{
        type : String,
    },
    telephone_number :{
        type : String,
    },
    arena_full_name :{
        type : String,
    },
    registration_number :{
        type : String,
    },
    registration_photo :{
        type : String,
    },
    registered_year :{
        type : Number,
    },
    searchTerm :{
        type : String,
    },
    photo_url :{
        type : String,
        default : "null"
    },
    under_review :{
        type : Boolean ,
        default : true
    },
    onboarding_done :{
        type :  Boolean ,
        default : false
     }, 
    deleted :{
        type : Boolean,
        default : false 
    },
    banned :{
        type : Boolean,
        default : false 
    },
    app_version :{
        type : String
    },
    device_info :{
        type  :String,
    },
    lng_lat :{
        // type : Object
        type: {
            type: String,
            enum: ['Point'],
            
          },
          coordinates: {
            type: [Number],
            
          },
    },
    address :{
        type : String
    },
    push_token :{
        type : String,
    },
    deleted_at :{
        type :Date,
    },
    banned_at :{
        type : Date ,
    }, 
    deleted_reason :{
        type :String,
    },
    banned_reason :{
        type : String
    },
    is_email_verified:{
        type : Boolean,
        default : false
    },
    booking_confirmation_email_notification: {
        type : Boolean ,
        default : true
    },
    booking_confirmation_sms_notification: {
        type : Boolean,
        default  : true
    },
    promotion_notification: {
        type : Boolean,
        default :true
    },
    stream_token :{
        type : String
    },
    email_otp_code :{
        type : String
    },
    email_otp_expired_at :{
        type : Number
    },
    weekday_price :{
        type : Number
    },
    weekend_price :{
        type : Number
    },
    deactivated :{
        type: Boolean ,
        default : false 
    },
    pass_key :{
        type : String,
        default : null
    },
    email_verification_encrypt :{
        type : String ,
        default : null
    },
    timeZone :{
        type : String
    },
    weekly_availability :{
        type: mongoose.Schema.Types.ObjectId,
        ref :"WeeklySchedule",
        default : null
    },
},
{
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
    timestamps: true,
  }

)

ArenaSchema.index({ lng_lat: "2dsphere" });
ArenaSchema.index({ "$**": "text" });  // Text index for search

ArenaSchema.statics.build = (attrs: ArenaAttrs) => {
  return new Arena(attrs);
};



const Arena = mongoose.model<ArenaDoc, ArenaModel>("Arena", ArenaSchema);

export { Arena };