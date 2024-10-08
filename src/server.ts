import 'dotenv/config';
import { createServer } from 'http';
import { app } from './app';
import config from './config/index';
import mongoose from 'mongoose';
import { Admin } from './model/admin';
import { seedArenaData } from './seeders/seedArena';

const start = async () => {
    console.log("Starting up........");
    const server = createServer(app);
    const PORT = process.env.HOST_PORT || 5045;

    try {
        const mongodb = config.app.mongoUrl;
        mongoose.set("strictQuery", true);
        await mongoose.connect(mongodb).then((res) => {
          console.log("Connected to mongoDb sucessfully");
        });
        
    
        const isExistAdmin = await Admin.findOne({
          email :config?.app?.admin_email!
        })
    
        if(!isExistAdmin || isExistAdmin === null ){
          await Admin.build({
            email :  config?.app?.admin_email!,
            password : config?.app?.admin_password! 
          }).save()
        }
    
    
        //seeding
        // await seedArenaData();
    } catch (e) {
        console.log("ERROR :", e);
    }

    server.listen(PORT, () => {
        console.log(`Server started at port: http://localhost:${PORT}`);
    });
    
}

start();
