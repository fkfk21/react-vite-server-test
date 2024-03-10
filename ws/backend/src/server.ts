import express from 'express';
import http from 'http';

const app = express();
const port = 3000;
const server = http.createServer(app); 

app.get('/', (req, res) => {
  res.send('Hello! API Server is Running!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


// // WebSocketサーバーのインスタンスを作成
// const wss = new WebSocket.Server({ noServer: true });

// // WebSocket接続の処理
// wss.on('connection', (ws) => {
//   console.log('Client connected');

//   ws.on('message', (message) => {
//     console.log(`Received message: ${message}`);
//   });

//   ws.on('close', () => {
//     console.log('Client disconnected');
//   });
// });

// // HTTPサーバーのアップグレードイベントを処理し、
// // 特定のエンドポイントでのみWebSocket接続を扱う
// server.on('upgrade', (request, socket, head) => {
//   if (request.url === '/websocket') {
//     wss.handleUpgrade(request, socket, head, (ws) => {
//       wss.emit('connection', ws, request);
//     });
//   } else {
//     socket.destroy();
//   }
// });

// // 通常のExpressルート
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });