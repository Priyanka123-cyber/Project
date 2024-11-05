const express=require('express');
const cookieParser=require('cookie-parser');
const cors=require('cors');
const dotenv=require('dotenv');
dotenv.config({})

const app=new express();


//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const corsOptions={
    //only requests from the origin are allowed to access the resources of this server.
    origin:'http://localhost:5173', 
    //If a request is made from origin, the server will include credentials like cookies in the response.
    credentials:true
}
app.use(cors(corsOptions));


require('./db/connection')

const userRoute=require('./routes/user_route');
app.use('/api/user', userRoute);

const companyRoute=require('./routes/company_route');
app.use('/api/company', companyRoute);



const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is initiated at port ${PORT}`)
})