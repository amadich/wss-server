const WebSocket = require('ws');

const port = 3000; //listen on port 3000

const wss = new WebSocket.Server({ port });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
    ws.send(`Echo: ${message}`);
  });

  ws.send('Welcome to the WebSocket server!');
});

console.log(`WebSocket server listening on port ${port}`);
