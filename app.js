// console.log('hello world')
//
// setTimeout(function(){console.log(111111111)},3000)
// let time = 0
//
// let timer = setInterval(function(){
// 	time += 2
// 	console.log(222222)
// 	if(time > 12 )clearInterval(timer)
// },3000)
// console.log(global)
// var stuff = require('./stuff')
// console.log(stuff.counter(['tty','yyt','tyt']))
// console.log(stuff.adder(6,9))
// console.log(stuff.adder(6,stuff.pi))

//事件模块
//1.引入事件模块
// var events = require('events')
// //2.创建EventEmitter对象
// var myEmitter = new events.EventEmitter()
// //3.注册事件
// myEmitter.on('someEvent',function(msg){
// 	console.log('注册事件')
// 	console.log(msg)
// 	setImmediate(() => {console.log('这是异步')})
// })
// //4.触发事件
// myEmitter.emit('someEvent','实现事件')
// console.log(1)


//文件系统
//1.引入模块
// var fs = require('fs')
//2.通过对象调方法
// var readMe = fs.readFileSync('./readMe.txt','utf8')  //同步读取
// console.log(readMe)
// fs.writeFileSync('./writeMe.txt',readMe) //同步写入
// fs.readFile('./readMe.txt','utf8',function(err,data){
// 	if(err) throw err
// 	console.log(data)                         //异步读取文件
// })
// console.log(1)
//异步写入文件


// fs.readFile('./readMe.txt','utf8',function(err,data){
// 	if(err) throw err
//
// 	fs.writeFile('writeMe2.txt',data)
// })

//文件系统操作
var fs = require('fs')
// fs.unlink('writeMe2.txt',function(err){
// 	if(err)
// 		throw err
// 	console.log('文件删除成功')
// })
//创建文件夹 同步
// fs.mkdirSync('stuff')
//删除文件夹 同步
// fs.rmdirSync('stuff')
//异步创建 删除文件夹
// fs.mkdir('stuff',function(){
// 	fs.readFile('readMe.txt','utf8',function(err,data){
// 		if(err) throw err
// 		fs.writeFile('./stuff/writeMe.txt',data)
// 	})
// })
//异步删除文件夹
//1.先删除文件夹内文件
//2.再删除文件




//通过http模块，创建本地服务器
// var http = require('http')
//
// var server = http.createServer(function(req,res){
// 	console.log('客户端向服务器发送请求：'+ req.url)
// 	res.writeHead(200,{"Content-type":"text/plain"})
// 	res.end("Server is working")
// });

//
// server.listen(8888,'127.0.0.1')
// console.log('Server is running')

//读写数据流
// var fs = require('fs')
// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf8')
// // console.log(myReadStream)
// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe3.txt','utf8')
//
// myReadStream.pipe(myWriteStream)

var http = require('http')
var fs = require('fs')
// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf8')
// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe3.txt','utf8')
// myReadStream.pipe(myWriteStream)

var server = http.createServer(function(req,res){

	res.writeHead(200,{"Content-type":"text/html"})
	var myReadStream = fs.createReadStream(__dirname + '/index.html','utf8')
	myReadStream.pipe(res)


	// res.end("Server is working")
});
server.listen(8888,'127.0.0.1')
console.log('Server is running')