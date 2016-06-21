const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;


//서버를 만든다.
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

//서버에 대한 Listening을 시킨다.
//hostname => pc의 ip
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//사용자 3000으로 접속하면 응답하라..응답결과는 'Hello World'
