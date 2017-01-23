var express = require('express');
var path = require('path'); 
var fileUpload = require('express-fileupload'); 
var findMostUsedWord = require('./findMostUsedWord')
var app = express();  

app.set('port', 3000); 
app.use(fileUpload());

app.use(express.static(path.join(__dirname, 'public')));



app.post('/inputBox', function(req, res) {
    var textFile;
    textFile = req.files.fileUpload;
    //textFile.mv(__dirname + "/fileUploads/1.txt", function(err){
          //console.log(textFile.data.toString('utf8'))
            var text = textFile.data.toString('utf8') 
            //findMostUsedWord(text)
            var result = findMostUsedWord(text)
            console.log(result)       
            //res.send(textFile.data.toString())
            res.send(result)
});




var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Server started and listening on ' + port);
});

//http://www.fullstacktraining.com/articles/how-to-serve-static-files-with-express