# WebSocket Server
Create Server WebSocket Server 🍃
```js
wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
    ws.send(`Echo: ${message}`);
  });

  ws.send('Welcome to the WebSocket server!');
});
```
![image](https://user-images.githubusercontent.com/74735976/213060649-4f37fe16-0295-4733-ae8f-9dd81fec953c.png)
```js
// web console  send message to (server)
ws.send("Hello World");
```
![image](https://user-images.githubusercontent.com/74735976/213060794-9a7fb471-00f9-47c8-8955-a91dfaed95e1.png)
#
