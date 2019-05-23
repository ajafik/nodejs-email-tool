let email = require('emailjs');
let log = console.log;


var server 	= email.server.connect({
    user:    "username",
    password:"password",
    host:    "smtp.gmail.com",
    ssl:     true
 });


 /* // send the message and get a callback with an error or details of the message that was sent
server.send({
    text:    "Sending Email with EmailJS is fun",
    from:    "Oluwafikayo <oluwafikayoajayi@gmail.com>",
    to:      "Oluwafikayo <oluwafikayoajayi@gmail.com>, Oluwafikayo <oluwafikayoajayi@gmail.com>",
    cc:      "Oluwafikayo <oluwafikayoajayi@gmail.com>",
    subject: "Sending Email with emailjs and NodeJS"
 }, function(err, message) { log(err || message); });

//log(email);

*/
//Sending Email with Image and HTML 

server.send({
    text:    "Sending Email with EmailJS is fun",
    from:    "Oluwafikayo <oluwafikayoajayi@gmail.com>",
    to:      "Oluwafikayo <oluwafikayoajayi@gmail.com>, Oluwafikayo <oluwafikayoajayi@gmail.com>",
    cc:      "Oluwafikayo <oluwafikayoajayi@gmail.com>",
    subject: "Sending Email with emailjs and NodeJS",
    attachment:
[
   {data: "<html>i <i>hope</i> this works! here is an image: <img src='cid:logo' width='100' height ='50'> </html>"},
   {path:"assets/js.png", type:"image/png", headers:{"Content-ID":"logo"}}
]
 }, function(err, message) { log(err || message); });

