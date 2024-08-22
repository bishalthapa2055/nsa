import { Request , Response } from "express";
import { Arena } from "../../../model/arena";
import { BadRequestError } from "../../../common/errors/bad-request-error";
import { Password } from "../../../helpers/password";
import config from "../../../config";
import jwt from "jsonwebtoken";

const loginArenaController = async (req : Request , res : Response ) =>{
    try {
        const {
            phone_number ,
            pass_key
        } = req.body;

        const isExistArena = await Arena.findOne({
            phone_number
        });

        if(!isExistArena){
            throw new BadRequestError("Account doesnot exists")
        }

        //compare password
        const checkPassword = await Password.compare(isExistArena.pass_key! , pass_key);
        if(!checkPassword)  throw new BadRequestError("Invalid Password !!!")


        const arenaJwt = jwt.sign({
            id:isExistArena.id,
            phone_number: phone_number,
                },
            `${config.app.access_token}`,
            {
            expiresIn:"30days"
        })

        res.status(200).json({
            status : true ,
            accessToken : arenaJwt,
            // streamToken : isExistedUser.stream_token,
            message : "Login Sucessfull ",
            data : {
                phone_number : isExistArena.phone_number,
                onboarding_done : isExistArena.onboarding_done,
                under_review : isExistArena.under_review
            }
        })
    } catch (error) {
        res.status(400).json({
            status : false ,
            error : (error as any).message ? (error as any).message : "Intenal Server Error !"
        })
    }
}

export { loginArenaController as loginArenaControllerHandler}