var http = require('http');

var options = {
    host: 'http://finance.google.com/finance/info/?client=ig&q=NSE:INFY'
};

http.get(options, function(res){
    res.setEncoding('utf8');
    var data="";
    res.on('data', function(chunk){
        data += chunk;
    });
    res.on('end', function(){
        var obj = JSON.parse(data);
        //do whatever with obj
    });
});
