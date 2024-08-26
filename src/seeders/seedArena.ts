import { Arena } from "../model/arena";



const arenas = [
    new Arena({
        arena_full_name : "Global futsal",
        phone_number : "+9779800000000",
        email :"abc@gmail.com",
        registered_year :2022,
        photo_url : "https://plus.unsplash.com/premium_photo-1685303469251-4ee0ea014bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        registration_number :"NAC123442",
        registration_photo : "https://plus.unsplash.com/premium_photo-1685303469251-4ee0ea014bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        secondary_number :"+977980000000001",
        telephone_number :"016632163",
        under_review : false ,
        onboarding_done : true ,
        lng_lat: {
                "type": "Point",
                "coordinates": [
                    85.3237219,
                    27.6771786
                ]
            },
        address :"Koteshwor",
        is_email_verified : true ,
        promotion_notification : true  ,
        booking_confirmation_sms_notification : true ,
        booking_confirmation_email_notification : true ,
        timeZone : "Asia/Kathmandu",
        weekday_price : 800 ,
        weekend_price :1500
    }),
    new Arena({
        arena_full_name : "Apple futsal",
        phone_number : "+9779800000051",
        email :"abcd@gmail.com",
        registered_year :2022,
        photo_url : "https://plus.unsplash.com/premium_photo-1685303468506-b598fbd30f07?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        registration_number :"NAC123442",
        registration_photo : "https://plus.unsplash.com/premium_photo-1685303469251-4ee0ea014bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        secondary_number :"+977980000000001",
        telephone_number :"016632163",
        under_review : false ,
        onboarding_done : true ,
        lng_lat: {
                "type": "Point",
                "coordinates": [
                    85.3237219,
                    27.6771786
                ]
            },
        address :"Patan Durbar square",
        is_email_verified : true ,
        promotion_notification : true  ,
        booking_confirmation_sms_notification : true ,
        booking_confirmation_email_notification : true ,
        timeZone : "Asia/Kathmandu",
        weekday_price : 800 ,
        weekend_price :1500
    }),
    new Arena({
        arena_full_name : "Tri Start futsal",
        phone_number : "+9779800000052",
        email :"abc@gmail.com",
        registered_year :2022,
        photo_url : "https://plus.unsplash.com/premium_photo-1685303469239-c86bc7301940?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8",
        registration_number :"NAC123442",
        registration_photo : "https://plus.unsplash.com/premium_photo-1685303469251-4ee0ea014bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        secondary_number :"+977980000000001",
        telephone_number :"016632163",
        under_review : false ,
        onboarding_done : true ,
        lng_lat: {
                "type": "Point",
                "coordinates": [
                    85.3237219,
                    27.6771786
                ]
            },
        address :"Baneshwor",
        is_email_verified : true ,
        promotion_notification : true  ,
        booking_confirmation_sms_notification : true ,
        booking_confirmation_email_notification : true ,
        timeZone : "Asia/Kathmandu",
        weekday_price : 800 ,
        weekend_price :1500
    }),
    new Arena({
        arena_full_name : "Binayak futsal",
        phone_number : "+9779800000052",
        email :"abc@gmail.com",
        registered_year :2022,
        photo_url : "https://images.unsplash.com/photo-1526842232038-2f89babdc974?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
        registration_number :"NAC123442",
        registration_photo : "https://plus.unsplash.com/premium_photo-1685303469251-4ee0ea014bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        secondary_number :"+977980000000001",
        telephone_number :"016632163",
        under_review : false ,
        onboarding_done : true ,
        lng_lat: {
                "type": "Point",
                "coordinates": [
                    85.3674275,
                    27.6565295
                ]
            },
        address :"Changathali",
        is_email_verified : true ,
        promotion_notification : true  ,
        booking_confirmation_sms_notification : true ,
        booking_confirmation_email_notification : true ,
        timeZone : "Asia/Kathmandu",
        weekday_price : 800 ,
        weekend_price :1500
    }),
    new Arena({
        arena_full_name : "Soccor futsal",
        phone_number : "+97798000000052",
        email :"abc@gmail.com",
        registered_year :2022,
        photo_url : "https://images.unsplash.com/flagged/photo-1571771710019-ca58cf80f225?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
        registration_number :"NAC123442",
        registration_photo : "https://plus.unsplash.com/premium_photo-1685303469251-4ee0ea014bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        secondary_number :"+977980000000001",
        telephone_number :"016632163",
        under_review : false ,
        onboarding_done : true ,
        lng_lat: {
                "type": "Point",
                "coordinates": [
                    85.3664486,
                    27.661849
                ]
            },
        address :"Balkot",
        is_email_verified : true ,
        promotion_notification : true  ,
        booking_confirmation_sms_notification : true ,
        booking_confirmation_email_notification : true ,
        timeZone : "Asia/Kathmandu",
        weekday_price : 800 ,
        weekend_price :1500
    }),
    new Arena({
        arena_full_name : "Aenda futsal",
        phone_number : "+9779800000055",
        email :"abc@gmail.com",
        registered_year :2022,
        photo_url : "https://plus.unsplash.com/premium_photo-1685303469251-4ee0ea014bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        registration_number :"NAC123442",
        registration_photo : "https://plus.unsplash.com/premium_photo-1685303469251-4ee0ea014bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        secondary_number :"+977980000000001",
        telephone_number :"016632163",
        under_review : false ,
        onboarding_done : true ,
        lng_lat: {
                "type": "Point",
                "coordinates": [
                    85.366749,
                    27.6520371
                ]
            },
        address :"Kausaltar",
        is_email_verified : true ,
        promotion_notification : true  ,
        booking_confirmation_sms_notification : true ,
        booking_confirmation_email_notification : true ,
        timeZone : "Asia/Kathmandu",
        weekday_price : 800 ,
        weekend_price :1500
    }),
    new Arena({
        arena_full_name : "United futsal",
        phone_number : "+9779800000055",
        email :"abc@gmail.com",
        registered_year :2022,
        photo_url : "https://images.unsplash.com/photo-1598881034666-6d3443d4b1bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
        registration_number :"NAC123442",
        registration_photo : "https://plus.unsplash.com/premium_photo-1685303469251-4ee0ea014bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        secondary_number :"+977980000000001",
        telephone_number :"016632163",
        under_review : false ,
        onboarding_done : true ,
        lng_lat: {
                "type": "Point",
                "coordinates": [
                    85.3569326,
                    27.6411166
                ]
            },
        address :"Imadol",
        is_email_verified : true ,
        promotion_notification : true  ,
        booking_confirmation_sms_notification : true ,
        booking_confirmation_email_notification : true ,
        timeZone : "Asia/Kathmandu",
        weekday_price : 800 ,
        weekend_price :1500
    }),
    new Arena({
        arena_full_name : "Marathon futsal",
        phone_number : "+9779800000059",
        email :"abc@gmail.com",
        registered_year :2022,
        photo_url : "https://plus.unsplash.com/premium_photo-1685303469251-4ee0ea014bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        registration_number :"NAC123442",
        registration_photo : "https://plus.unsplash.com/premium_photo-1685303469251-4ee0ea014bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        secondary_number :"+977980000000001",
        telephone_number :"016632163",
        under_review : false ,
        onboarding_done : true ,
        lng_lat: {
                "type": "Point",
                "coordinates": [
                    85.3628654,
                    27.6400588
                ]
            },
        address :"Dhungin",
        is_email_verified : true ,
        promotion_notification : true  ,
        booking_confirmation_sms_notification : true ,
        booking_confirmation_email_notification : true ,
        timeZone : "Asia/Kathmandu",
        weekday_price : 800 ,
        weekend_price :1500
    }),
    new Arena({
        arena_full_name : "Quick futsal",
        phone_number : "+9779800000067",
        email :"abc@gmail.com",
        registered_year :2022,
        photo_url : "https://images.unsplash.com/photo-1517747614396-d21a78b850e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        registration_number :"NAC123442",
        registration_photo : "https://plus.unsplash.com/premium_photo-1685303469251-4ee0ea014bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        secondary_number :"+977980000000001",
        telephone_number :"016632163",
        under_review : false ,
        onboarding_done : true ,
        lng_lat: {
                "type": "Point",
                "coordinates": [
                    85.3762862,
                    27.6460814
                ]
            },
        address :"SIrutar",
        is_email_verified : true ,
        promotion_notification : true  ,
        booking_confirmation_sms_notification : true ,
        booking_confirmation_email_notification : true ,
        timeZone : "Asia/Kathmandu",
        weekday_price : 800 ,
        weekend_price :1500
    }),
    new Arena({
        arena_full_name : "Appentrine futsal",
        phone_number : "+9779800000081",
        email :"abc@gmail.com",
        registered_year :2022,
        photo_url : "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
        registration_number :"NAC123442",
        registration_photo : "https://plus.unsplash.com/premium_photo-1685303469251-4ee0ea014bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        secondary_number :"+977980000000001",
        telephone_number :"016632163",
        under_review : false ,
        onboarding_done : true ,
        lng_lat: {
                "type": "Point",
                "coordinates": [
                    85.3284579,
                    27.6668579
                ]
            },
        address :"Gwarkho",
        is_email_verified : true ,
        promotion_notification : true  ,
        booking_confirmation_sms_notification : true ,
        booking_confirmation_email_notification : true ,
        timeZone : "Asia/Kathmandu",
        weekday_price : 800 ,
        weekend_price :1500
    }),
    new Arena({
        arena_full_name : "Legentss futsal",
        phone_number : "+9779800000082",
        email :"abc@gmail.com",
        registered_year :2022,
        photo_url : "https://images.unsplash.com/photo-1525088068454-ff2c453e50e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
        registration_number :"NAC123442",
        registration_photo : "https://plus.unsplash.com/premium_photo-1685303469251-4ee0ea014bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        secondary_number :"+977980000000001",
        telephone_number :"016632163",
        under_review : false ,
        onboarding_done : true ,
        lng_lat: {
                "type": "Point",
                "coordinates": [
                    85.3388997,
                    27.6584035
                ]
            },
        address :"Tikathali",
        is_email_verified : true ,
        promotion_notification : true  ,
        booking_confirmation_sms_notification : true ,
        booking_confirmation_email_notification : true ,
        timeZone : "Asia/Kathmandu",
        weekday_price : 800 ,
        weekend_price :1500
    }),
    new Arena({
        arena_full_name : "HUddleston futsal",
        phone_number : "+97798000000083",
        email :"abc@gmail.com",
        registered_year :2022,
        photo_url : "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
        registration_number :"NAC123442",
        registration_photo : "https://plus.unsplash.com/premium_photo-1685303469251-4ee0ea014bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        secondary_number :"+977980000000001",
        telephone_number :"016632163",
        under_review : false ,
        onboarding_done : true ,
        lng_lat: {
                "type": "Point",
                "coordinates": [
                    85.3560514,
                    27.6617556
                ]
            },
        address :"Imadol pool",
        is_email_verified : true ,
        promotion_notification : true  ,
        booking_confirmation_sms_notification : true ,
        booking_confirmation_email_notification : true ,
        timeZone : "Asia/Kathmandu",
        weekday_price : 800 ,
        weekend_price :1500
    }),
    new Arena({
        arena_full_name : "Brave futsal",
        phone_number : "+9779800000067",
        email :"abc@gmail.com",
        registered_year :2022,
        photo_url : "https://plus.unsplash.com/premium_photo-1685303469357-ab26a1093279?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
        registration_number :"NAC123442",
        registration_photo : "https://plus.unsplash.com/premium_photo-1685303469251-4ee0ea014bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        secondary_number :"+977980000000001",
        telephone_number :"016632163",
        under_review : false ,
        onboarding_done : true ,
        lng_lat: {
                "type": "Point",
                "coordinates": [
                    85.3506237,
                    27.6509443
                ]
            },
        address :"Imadon tempo park",
        is_email_verified : true ,
        promotion_notification : true  ,
        booking_confirmation_sms_notification : true ,
        booking_confirmation_email_notification : true ,
        timeZone : "Asia/Kathmandu",
        weekday_price : 800 ,
        weekend_price :1500
    }),
    new Arena({
        arena_full_name : "Aristotal futsal",
        phone_number : "+9779800000090",
        email :"abc@gmail.com",
        registered_year :2022,
        photo_url : "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
        registration_number :"NAC123442",
        registration_photo : "https://plus.unsplash.com/premium_photo-1685303469251-4ee0ea014bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        secondary_number :"+977980000000001",
        telephone_number :"016632163",
        under_review : false ,
        onboarding_done : true ,
        lng_lat: {
                "type": "Point",
                "coordinates": [
                    85.3707061,
                    27.6488648
                ]
            },
        address :"Changathali bus stop",
        is_email_verified : true ,
        promotion_notification : true  ,
        booking_confirmation_sms_notification : true ,
        booking_confirmation_email_notification : true ,
        timeZone : "Asia/Kathmandu",
        weekday_price : 800 ,
        weekend_price :1500
    }),
    new Arena({
        arena_full_name : "Trite futsal",
        phone_number : "+9779800000091",
        email :"abc@gmail.com",
        registered_year :2022,
        photo_url : "https://plus.unsplash.com/premium_photo-1685089027812-6885c06b0fbf?w=294&dpr=1&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8aFNBN0xuREJVdjB8fGVufDB8fHx8fA%3D%3D",
        registration_number :"NAC123442",
        registration_photo : "https://plus.unsplash.com/premium_photo-1685303469251-4ee0ea014bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        secondary_number :"+977980000000001",
        telephone_number :"016632163",
        under_review : false ,
        onboarding_done : true ,
        lng_lat: {
                "type": "Point",
                "coordinates": [
                    85.3751289,
                    27.6506877
                ]
            },
        address :"Sirutar futsal",
        is_email_verified : true ,
        promotion_notification : true  ,
        booking_confirmation_sms_notification : true ,
        booking_confirmation_email_notification : true ,
        timeZone : "Asia/Kathmandu",
        weekday_price : 800 ,
        weekend_price :1500
    }),
    new Arena({
        arena_full_name : "Legenas futsal",
        phone_number : "+9779800000057",
        email :"abc@gmail.com",
        registered_year :2022,
        photo_url : "https://plus.unsplash.com/premium_photo-1685303469251-4ee0ea014bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        registration_number :"NAC123442",
        registration_photo : "https://plus.unsplash.com/premium_photo-1685303469251-4ee0ea014bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        secondary_number :"+977980000000001",
        telephone_number :"016632163",
        under_review : false ,
        onboarding_done : true ,
        lng_lat: {
                "type": "Point",
                "coordinates": [
                    85.3793374,
                    27.6644735
                ]
            },
        address :"Thimi",
        is_email_verified : true ,
        promotion_notification : true  ,
        booking_confirmation_sms_notification : true ,
        booking_confirmation_email_notification : true ,
        timeZone : "Asia/Kathmandu",
        weekday_price : 800 ,
        weekend_price :1500
    }),

]

let done = 0;

export const seedArenaData = async () => {
    try {
      await Arena.deleteMany({});
      const promises = arenas.map(async (arena) => {
        await arena.save();
      });
  
      await Promise.all(promises);
  
      console.log("Arena Seeding is done");
    } catch (error) {
      throw new Error((error as any).message);
    }
  };