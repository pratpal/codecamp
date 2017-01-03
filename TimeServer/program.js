var net = require("net");
var moment = require("moment")


function GetDate() {
    return moment().format('YYYY-MM-DD hh:mm');
}

var server = net.createServer((socket) => {
   socket.end(GetDate() + "\n");
      
})


server.listen(Number(process.argv[2]))




