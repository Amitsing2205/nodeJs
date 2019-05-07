//Create a server which Display "Hello World " message on a web page as well as on console 
// this Server is Listning on a port 5656

//Program Written by Amitsing Chaudhari 

var http=require('http');
function onRequest(request,response)
{
    response.writeHead(200,"('content-type':'text/plain')");
    
    response.write("Hello world");


    response.end(); 
}
console.log("Program execute sucessfull");
http.createServer(onRequest).listen(5656);