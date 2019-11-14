var url = require('url');
var fs = require('fs');

function renderHTML(path, res){
    fs.readFile(path, null, function(error, data) {
        if(error){
            res.writeHead(404);
            res.write('File Not Found');
        }else{
            res.write(data);
        }
        res.end();
    });
}

module.exports = {
  handleRequest: function (req, res) {
      res.writeHead(200, {'ContentType': 'text/html'});

      var path = url.parse(req.url).pathname;
      switch (path) {

          case '/':
              renderHTML('./NodeJS4/index.html', res);
              break;
          case '/login':
              renderHTML('./NodeJS4/login.html', res);
              break;
          default:
              res.writeHead(404);
              res.write('Route not defined');
              res.end();
      }
  }
};