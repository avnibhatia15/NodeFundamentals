const http =  require('http');//importing the http package

//creating server
const server = http.createServer((req, res)=>{
    res.end('Hello World');//to show in browser
});

//running server
server.listen(4242,()=>{
    console.log('Server is running...');
});