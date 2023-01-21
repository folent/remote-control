import { httpServer } from "./src/http_server/index.js";
import { WebSocketServer } from "ws";

const HTTP_PORT = 8181;
const WS_PORT = 8080;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: WS_PORT });

wss.on('connection', function connection(ws, req) {
    console.log('CONNECTION_ACCEPTED', req.socket.address().address, req.socket.address().port)
  ws.on('message', data => {
    console.log('received: %s', data);
  });
});

wss.on('close', () => {
    console.log('close')
})

wss.on('error', () => {
    console.log('error')
})     