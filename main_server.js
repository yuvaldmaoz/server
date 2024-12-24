// // 1. Import Node.js core module
// const http = require("http");

// // 2. Creating an HTTP server
// const server = http.createServer((req, res) => {
//   // Sending a response to the client
//   res.end("Hello, Node.js server!");
// });

// // 3. The server starts listening on port 3000
// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`The server is running on http://localhost:${PORT}`);
// });

// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/plain");
//   res.setHeader("X-Powered-By", "Node.js");
//   res.statusCode = 200;

//   res.end("hello wocccrd");
// });

// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

// const http = require("http");

// const server = http.createServer((req, res) => {
//   // Set headers
//   res.setHeader("Content-Type", "text/html");

//   // Use res.write() to send data in parts
//   res.write("Hello, ");
//   res.write("this is part 1. ");
//   res.write("And this is part 2.");

//   // Finish the response
//   res.end(" Goodbye!");
// });

// server.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });



const http = require("http");

const server = http.createServer(function (req, res) {
  // write http header
  res.setHeader("Content-Type", "text/html");
  // write html to the client
  res.write(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Component By Function</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            background-color: #e6f7ff;
        }
        .container {
            text-align: center;
        }
        .book {
            width: 250px;
            height: 350px;
            border: 1px solid #ccc;
            background: linear-gradient(to bottom, white 55%, #ffdf3c 55%);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            position: relative;
            margin: 20px auto;
        }
        .book::before {
            content: 'O\'REILLY';
            position: absolute;
            top: 10px;
            left: 10px;
            font-size: 10px;
            color: #444;
            font-weight: bold;
        }
        .book-title {
            margin-top: 130px;
            font-size: 20px;
            font-weight: bold;
        }
        .book-subtitle {
            font-size: 12px;
            margin-top: 5px;
        }
        .js-logo {
            font-size: 130px;
            font-weight: bold;
            color: black;
            margin-top: 50px;
        }
        
        }
        .author {
            margin-top: 20px;
            font-size: 16px;
            font-weight: bold;
            color: #0066cc;
        }
        .description {
            margin-top: 10px;
            font-size: 12px;
            color: #555;
        }
        .footer {
            margin-top: 20px;
            font-size: 10px;
            color: #777;
        }
        h2 {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Book Component By Function</h2>
        <div class="book">
            <div class="book-title">SCOPE & CLOSURES</div>
            <div class="book-subtitle">BY KYLE SIMPSON</div>
            <div class="js-logo">JS</div>

        </div>
        <div class="author">By Kyle Simpson</div>
        <div class="description">Parts of the language that many JavaScript programmers simply avoid.</div>
        <div class="footer">&copy; 2021 Tania</div>
    </div>
</body>
</html>


	`);
  res.end("Hello from the server");
});

server.listen(3001, () => {});
