var express = require('express');
var app = express();
var port = 3000;

var middleware = {
    requireAuthentication: function (req, res, next) {
        console.log('özel route girildi!!!');
        next();
    },
    logger: function (req, res, next) {
        console.log(req.method + ' ' + req.originalUrl);
        next();
    }
};
app.use(middleware.logger);
//app.use(middleware.requireAuthentication);

app.get("/Hakkimda", middleware.requireAuthentication, function (req, res) {
    res.send('Hakkımda sayfası');
})
app.use(express.static(__dirname + '/public'));


app.listen(port, function () {
    console.log("\nExpress server :" + port + " nolu portta çalışıyor...");
});
