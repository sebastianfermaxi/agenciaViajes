import Sequelize from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const db = new Sequelize(process.env.DB_NAME,process.env.USER_DB,process.env.PASSWORD_DB,{
    host: process.env.HOST_DB,
    port:process.env.PORT_DB,
    dialect:'postgres',
    dialectOptions: {
        ssl: {
            require: true, // This will help you. But you will see nwe error
            rejectUnauthorized: false // This line will fix new error
        }
    },
    define:{
        timestamps:false
    },
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
    operatorAliases:false
});

export default db;