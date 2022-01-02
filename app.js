// Title: Uptime monitoring Application
// Description: A rest API
// Author:
// Date:
// dependencies
const http = require('http');
const { handelReqRes } = require('./helpers/handleReqRes');

// app object - module scaffolding

const app = {};

// configuration
app.config = {
    port: 3000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handelReqRes);
    server.listen(app.config.port, () => {
        console.log(`listening to port ${app.config.port}`);
    });
};

// handel request response

app.handelReqRes = handelReqRes;

app.createServer();
