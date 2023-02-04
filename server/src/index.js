import cors from 'cors';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import { success, error } from 'consola';
import { v4 as uuidv4 } from 'uuid';
import { PORT } from './config/index';

// Import Routes
// import imagesRoutes from './routes/images';
import { dir } from 'console';

const fs = require('fs');
const fsAsync = require('fs/promises');

// Initialize the express application
const app = express();

// Inject the middlewares to our app Object
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(bodyParser.json());

// Injecting routes in main app
// app.use('/api/images', imagesRoutes);

// Setting up the express static directory
app.use(express.static(path.join(__dirname, './public')));

// const express = require("express");
// const express = require("express");
const { Server } = require("socket.io");
// const app = express();
const helmet = require("helmet");
// const cors = require("cors");
const authRouter = require("./routes/authRouter");
const session = require("express-session");
const server = require("http").createServer(app);
require("dotenv").config();
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: "true",
  },
});

app.use(helmet());

app.use(express.json());
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    credentials: true,
    name: "sid",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.ENVIRONMENT === "production" ? "true" : "auto",
      httpOnly: true,
      expires: 1000 * 60*60*60*60,
      sameSite: process.env.ENVIRONMENT === "production" ? "none" : "lax",
    },
  })
);
app.use("/auth", authRouter);

io.on("connect", socket => {});

// app.post("/getJson", (req,res)=> {
//   const jsonName = req.body.jsonName;
//   console.log(jsonName)
//   const dataObject = JSON.parse(fs.readFileSync(`/Users/varunmotiyani/Development/final-react/upload_server/src/json_files/${jsonName}`));
//   // console.log(dataObject);
//   res.send(dataObject);
// })

// app.post("/setJson",async (req,res)=> {
//   const fileName = req.body.jsonName;
//   const data = req.body.jsonData;
//   console.log(fileName);
//   await fsAsync.writeFile('/Users/varunmotiyani/Development/final-react/upload_server/src/json_files/'+fileName, JSON.stringify(data)).then(()=>{
//     const dataObject = JSON.parse(fs.readFileSync(`/Users/varunmotiyani/Development/final-react/upload_server/src/json_files/${fileName}`));
//   console.log(dataObject);
//   })
//   res.send("Ok")
// })



//code for filelist in json


// const chokidar = require('chokidar');
// // const path = require('path');
// const dirPath = path.join(__dirname , './public/uploads');
// const watcher = chokidar.watch(dirPath , {
//   persistent : true
// })
// watcher.on('add', path=>{function listFilesSync(dirPath) {

//   let fileList = {};
//   let finalList=[];
//   var myJsonString;
//   let myJsonObj = {};
//   let jsonObj;
//   fs.readdir(dirPath, (err, files) => {
//     if (err)
//     console.log(err)
//     else {
//       files.forEach(file => {
//         myJsonObj = {name: file, uuid: uuidv4()};
//         // console.log(file);
//         finalList.push(myJsonObj);
//       })
//       // console.log('FileList:-', fileList);
//     }
//     console.log("finalList", finalList)
  
//     myJsonString = JSON.stringify(finalList, null, 2);
//     console.log(myJsonString);
//     const outfile = `${'/Users/varunmotiyani/Development/final-react/my-app/src/components'}-files-stats.json`;
//     fs.writeFileSync(outfile, myJsonString);
//   })
//    return myJsonString;
// }
// const fullFileList = listFilesSync(dirPath)})




// Starting Application Function
const startApp = () => {
    app.listen(PORT, () => success({ badge: true, message: `Server started on port ${PORT}` }));
};



startApp();

