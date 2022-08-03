import express from "express";
import router from "./routes/index.js";
import db from './database/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.set("trust proxy", 1);

db.authenticate()
    .then(()=>{
        console.log('DB conectada')
    })
const port = process.env.port || 4000;
//Habilita pug
app.set('view engine', 'pug');

//Obtiene el año actual
app.use((req,res,next) =>{
    
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de viajes';
    return next();
})

app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

//Agrega router
app.use('/', router);


app.listen(port,()=>{
    console.log(`Servidor funcionando en el puerto ${port}`)
})

