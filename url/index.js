var http=require('http');
var url=require('url');



const server=http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type':'text/html'});
  var q=url.parse(req.url,true).query;
//   res.write("Hello")
  const text=`Name:${q.name} and Age:${q.age}`;
  res.end(text);
})

server.listen(8000,()=>{
 console.log("Server is running at:8000")
})