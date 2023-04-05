const express = require('express')
const app = express();
const http = require('http');

var url = require('url')

let connections = [];


const fs = require('fs');


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
  });
  
  app.use(express.static('public'))
  app.use(express.static('files'))


const server = app.listen(5003, function (req, res){
    console.log("Server is running on localhost 5003");

    // try{
    //     const html1 = fs.readFileSync(__dirname + req.url)
    //     res.sendFile(html1)
    // }catch(e){
    //     console.log(e)
    // }

}); 


var io = require('socket.io')(server, {
 });

io.on("connection", (socket) => {


    //on disconnect remove clinet from array
    socket.on('disconnect', (socket) => {
        console.log("Client Disconnected");
        connections.splice(connections.indexOf(socket), 1);

    });


    //called from clinet with socket.emit("submited, data")
    socket.on('submited', (data) =>{
        //reads the file.
        fs.readFile(__dirname + '/Response.txt', 'utf8', (err, file) => {
            if (err) {
                console.error(err);
                return;
            }

            var lines = []

            //going to hold the strings from the form
            var finalString = []
            // lines = file.split('\n')

            //pusyh all form data into a string with attached designation 
            finalString.push("Type: " + data[0]);
            finalString.push("Name: " + data[1]);
            finalString.push("Email: " + data[2]);
            finalString.push("Message: " + data[3]);
            finalString.push('\n');


            console.log(finalString);

            //run loop for each string in final string
            for(let i = 0; i < finalString.length; i++){

                //append to the file each element of final string or each form submission.
                fs.appendFileSync(__dirname + '/Response.txt', finalString[i] + '\n', err =>{
                        if (err) {
                            console.error(err);
                            return;
                        }
                        else{
                        }
                    })
                

            }

        })
    })    
})


