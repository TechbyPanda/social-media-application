import  express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors"

const app = express()
app.use(express.static('public'))
app.use('/images',express.static('images'))
app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
app.use(cors())
import authRoute from './routes/AuthRoute.js'
import userRoute from './routes/UserRoute.js'
import postRoute from './routes/PostRoute.js'
import uploadRoute from './routes/UploadRoute.js'

dotenv.config()

mongoose.connect(process.env.MONGO_DB)
.then(() => app.listen(process.env.PORT, () => console.log(`listening to port ${process.env.PORT}`)))
.catch((error) => console.log(error))

app.use('/auth',authRoute)
app.use('/user',userRoute)
app.use('/post',postRoute)
app.use('/upload',uploadRoute)