// Requerir los módulos
import express from "express";
import dotenv from "dotenv";
import cors from "cors"; //COMUNICA EL FORTEND Y BACKEND CON UN CODIGO DE AREA

//Inicializaciones
const app = express()
dotenv.config()

//Configuraciones
app.set('port', process.env.PORT || 3000)
//app.set('port', process.env.CLOUDINARY || 3000) //SON DATOS DELICADOS
app.use(cors()) //Middleware
//Const port = 3000


//Middlewares
app.use(express.json())

//Rutas
app.get('/',(req,res)=>{
    res.send("Server on")
})

//exportar la instancia
export default app;


