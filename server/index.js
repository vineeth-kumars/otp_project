//Dependencies: 
//yarn add express cors twilio 

const express = require('express'); 
const cors = require('cors');
const twilio = require('twilio'); 

//twilio requirements -- Texting API 
const accountSid = 'AC4a1635a4a0bd49bb98cd165570cba607';
const authToken = 'Redacted'; 
const client = new twilio(accountSid, authToken);

const app = express(); //alias

app.use(cors()); //Blocks browser from restricting any data


app.get('/send-text', (req, res) => {
    //Welcome Message
    res.send('message will be delivered')

    //_GET Variables
    const { recipient, textmessage } = req.query;


    //Send Text
    client.messages.create({
        body: textmessage,
        to: recipient,  // Text this number
        from: '+15074734314' // From a valid Twilio number
    }).then((message) => console.log(message.body));
})

app.listen(4000, () => console.log("Running on Port 4000"))
