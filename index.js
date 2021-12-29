const express = require('express');
const cors = require('cors');
//For mongo
const {dbConnection} = require('./db/database');

//Routes
const postRouter = require('./routes/postRoutes');
const authRouter = require('./routes/authRoutes');


//App Run
const app = express();
const port = process.env.PORT || 4000;

//DB Connection
dbConnection();


//Middlewares
app.use(express.json());
app.use(cors({}))

app.enable("trust proxy")

//Routes
app.use("/api", postRouter);
app.use("/api", authRouter);

app.get('/content', (req, res)=>{
  res.send("<h1>Hello people!.</h1><h2>¡Hola mi gente!</h2>")
});


app.listen(port, ()=>{
  console.log(`App running on port ${port}`)
});

