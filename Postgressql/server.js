require("dotenv").config({ path: `${process.cwd()}/.env`});
const express = require("express");
const authRouter = require("./routes/auth.route.js");
const cartoonRouter = require("./routes/cartoon.route.js")
const app = express();

const PORT = process.env.APP_PORT || 3000;
app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Hello World"
    })
});

app.use('/api/auth',authRouter);
app.use('/api/kid',cartoonRouter);


app.use((req, res) => {
  res.status(404).json({
    message: "Route Not Found",
  });
});

app.listen (PORT,()=>{
    console.log("Server is running on port:",PORT);
});