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

    // connections.push(socket);
    // console.log(socket.id + ' Connected');
    // console.log('Serving ' + connections.length + " Clients");
    // socket.emit("hello from server", "hello socket " + socket.id);
    

    //on disconnect remove clinet from array
    socket.on('disconnect', (socket) => {
        console.log("Client Disconnected");
        connections.splice(connections.indexOf(socket), 1);

    });


    //called from clinet
    socket.on('submited', (data) =>{
        fs.readFile(__dirname + '/Response.txt', 'utf8', (err, file) => {
            if (err) {
                console.error(err);
                return;
            }

            var lines = []

            var finalString = []
            // lines = file.split('\n')

            
            
            var completeString  = "Type: " + data[0] + "\nEmail: " + data[1] + "\nProduct:" + data[2] + "\nReview:" + data[3] + "\nRating:" + data[4] 

            // var completStringArry = []
            // completStringArry[0] = "Type: " + data[0] + '\n'
            // completStringArry[1] = "Email: " + data[1] + '\n'
            // completStringArry[2] = "Rating: " + data[2] + '\n'
            // completStringArry[3] = "Review: " + data[3] + '\n'


            finalString.push("Type: " + data[0]);
            finalString.push("Name: " + data[1]);
            finalString.push("Email: " + data[2]);
            finalString.push("Message: " + data[3]);
            finalString.push('\n');


            console.log(finalString);

            for(let i = 0; i < finalString.length; i++){

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


