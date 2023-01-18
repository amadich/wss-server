const http = require("http");
const WebSocketServer = require("websocket/lib/WebSocketServer");
const webSocketServer = require("ws").server;

//const wss = new WebSocket.Server({ server : server });

const httpserver = http.createServer((req,res) => {
    console.log("We Have Recivied a request");
})

const websocket = new WebSocketServer({
    "httpServer": httpserver
})

websocket.on("request", request => {
    console.log("Sameone here");
})

httpserver.listen( 8080, () => console.log("My server  in 8080 ..."))