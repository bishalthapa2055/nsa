import * as dotenv from "dotenv";

dotenv.config();

const config = {
  app: {
    mongoUrl:
      process.env.MONGO_URI! ||
      process.env.MONGO_CONNECTION_STRING ||
      "mongodb://localhost:27017/NSA",
    host: process.env.APP_HOST || "localhost",

    port: process.env.PORT || 5045,

    // for mail information 
    email : process.env.EMAIL,
    password : process.env.PASSWORD_MAIL,

    // for sending otp -email 

    // TEST_EMAIL : process.env.TEST_EMAIL,

    // secret key for jwt
    access_token : process.env.JWT_TOKEN_KEY ,

    // for sms twiloo information 
    // phone_number : process.env.PHONE_NUMBER,
    // sid : process.env.SID,
    // auth_token : process.env.AUTH_TOKEN,
    // service_sid : process.env.SERVICE_SID,
    // messaging_service_sid : process.env.MESSAGING_SERVICE_SID,

    //oneSignal implementations

    // app_id : process.env.APP_ID,
    // rest_api_key : process.env.REST_API_KEY ,



    //admin credentials 

    admin_email :  process.env.ADMIN_EMAIL,
    admin_password :  process.env.ADMIN_PASSWORD,


    //For stream chat

    // stream_api_key : process.env.STREAM_API_KEY,
    // stream_api_secret : process.env.STREAM_API_SECRET,


    // node environment 

    node_env : process.env.NODE_ENV ,

    //aws credentials 
    aws_s3_access_key : process.env.AWS_S3_ACCESS_KEY,
    aws_s3_secret_key : process.env.AWS_S3_ACCESS_KEY ,
    aws_s3_bucket : process.env.AWS_S3_BUCKET ,
    aws_s3_region : process.env. AWS_REGION,
    
  },
};

export default config;