const express = require('express');
const morgan = require('morgan');
const path = require('path');
const server = require('http');


const app = express();
const servidor = server.createServer(app);

// setting
app.set("puerto", process.env.PORT || "3000");


//static files
app.use(express.static(path.join(__dirname, "public")));

//middlewares
app.use(morgan);

servidor.listen(app.get("puerto"), () => {
    console.log(`escuchando en puerto${app.get("puerto")}`);

});