const express = require('express');
const webPush = require('web-push');
const bodyParser = require('body-parser')
const path = require('path');

const app = express()

// Set static path 
app.use(express.static(path.join(__dirname, 'client')))


app.use(bodyParser.json())

const publicVapidKey = 'BCJv7j678yas4_JDMT5eqRzVPLhyrOiFhn_tNsnpjjbLIvUTCocfVNoxfObzHy0RUOXIqRi1-itzmdOTiCtMEmc'

const privateVapidKey = 'wXGNZ0JP5sRqn4XwMHymkye1-vMOv1PzHUs6vH-JVEE'

webPush.setVapidDetails('mailto:glngwenya@gmail.com', publicVapidKey, privateVapidKey)


// Subscribe Route
app.post('/subscribe', (req, res)=>{
    // get push subscription object
    const subscription = req.body

    // Send back 201 - resource created successfully
    res.status(201).json({})

    // Create Payload
    const payload = JSON.stringify({ title:'Woza Kimepop notification', body:'Skia bro, vitu vitapop tu, Kuwa mpole.'})

    // Pass object into sendNotification
    webPush.sendNotification(subscription, payload).catch(err => console.error(err))
})

const port = 4100

app.listen(port, () => console.log(`Server is up and running on port ${port}`))

