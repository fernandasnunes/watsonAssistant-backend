const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//cors to front-end
const cors = require('cors')

require('dotenv').config()
app.use(bodyParser.json());

app.use(cors())


//import routers
const assistantdRoutes = require('./routers/assistantRoutes')


app.use('/', assistantdRoutes)

var port = 3000
app.listen(port, function() {
    console.log("Server running at: http://localhost:" + port);
})