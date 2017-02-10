const express = require('express');
const SocketServer = require('ws').Server;
const WebSocket = require('ws');
const uuid = require('node-uuid');

// Set the port to 4000
const PORT = 4000;

// Create a new express server
const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

let numClients = 0;

wss.on('connection', function connection(ws) {
  console.log("Client connected to socket server.");
  numClients++;
  wss.broadcast({type: "user_connections", connections: numClients})

  ws.on('message', function(data) {
    // console.log("received data", data);
    const message = JSON.parse(data);

    switch(message.type) {
      case "postMessage":
        const id = uuid.v4();
        message.id = id;
        message.type = "incomingMessage";
        break;
      case "postNotification":
        message.type = "incomingNotification"
        break;
      default:
        throw new Error("Unknown event type " + message.type);
    }
    // console.log('message ', message)
    wss.broadcast(message);
  })

  ws.on('close', () => {
    console.log('Client disconnected')
    numClients--;
    wss.broadcast({type: "user_connections", connections: numClients})
  });

  const color = getRandomColor();
  ws.send(JSON.stringify({type: "user_color", color: color}));
  // ws.color = color;

});


const colors = ["fuchsia", "red", "blue", "green"]

function getRandomColor() {
  return colors[Math.floor(Math.random()*colors.length)]
}

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
};