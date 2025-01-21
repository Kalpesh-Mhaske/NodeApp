// Import the http module
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
    // Set the response header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Check the request URL
    if (req.url === '/') {
        // Write the welcome message
        res.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Welcome Page</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        text-align: center;
                        background-color: #f0f8ff;
                        margin: 0;
                        padding: 0;
                    }
                    h1 {
                        color: #4CAF50;
                    }
                    p {
                        color: #555;
                    }
                </style>
            </head>
            <body>
                <h1>Welcome to the Website of Kalpesh Mhaske</h1>
                <p>Thank you for visiting!</p>
            </body>
            </html>
        `);
    } else {
        // Handle other routes
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write(`
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        `);
    }

    // End the response
    res.end();
});

// Define the port
const PORT = 3000;

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
