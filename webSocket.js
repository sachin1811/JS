const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});


//websocket in browser

const ws = new WebSocket('ws://example.org');

ws.addEventListener('open', () => {
  // Send a message to the WebSocket server
  ws.send('Hello!');
});
 
ws.addEventListener('message', event => {
  // The `event` object is a typical DOM event object, and the message data sent
  // by the server is stored in the `data` property
  console.log('Received:', event.data);
});



//sse with express

var SSE = require('express-sse');
var sse = new SSE();
app.get('/stream', sse.init);
// we can always call sse.send from anywhere the sse variable is available, and see the result in our stream.

let content = 'Test data at ' + JSON.stringify(Date.now());
sse.send(content);

//sse in browser with eventSource
const evtSource = new EventSource("/stream");

evtSource.addEventListener('message', event => {
    console.log(event.data);
});


