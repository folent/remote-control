import { httpServer } from "./src/http_server/index.js";
import WebSocket, { WebSocketServer, createWebSocketStream } from "ws";
import { AddressInfo } from "net";
import { actionHandler } from "./src/actionHandler.js";

const HTTP_PORT = 8181;
const WS_PORT = 8080;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: WS_PORT });

console.log('Start WebSocket server on the ', (wss.address() as AddressInfo).address, (wss.address() as AddressInfo).port)

wss.on('connection', function connection(ws: WebSocket) {
  const duplex = createWebSocketStream(ws, { defaultEncoding: 'utf-8', decodeStrings: false });

  duplex.on('data', (chunk: string) => actionHandler(duplex, chunk))

  duplex.on('end', () => {
    duplex.end();
    console.log("the duplex channel has closed")
  })

  ws.on('close', () => {
    duplex.end();
    ws.close()
    console.log("WebSocket has closed");
  })
  ws.on('error', () => {
    duplex.end()
    console.log("WebSocket has closed");
  })
});

process.on('SIGINT', () => {
  wss.clients.forEach((socket) => {
    socket.send('closed')
    socket.close();
  });
  console.log("WebSocketServer has closed");
  process.exit();
});

wss.on('close', () => {
  console.log("WebSocketServer has closed");
})