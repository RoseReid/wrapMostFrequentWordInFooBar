module.exports = function(text){

var wordCounts = {};
var mostFrequentWords = []
var mf = 0;
var m = 0;
//var mostCommonWords = [];
var words = text.toLowerCase().split(/[\s.:><,]+/);

for(var i = 0; i < words.length; i++){
    ( wordCounts[ words[i]] = (wordCounts[words[i]] || 0) + 1)  //look for array with wordcounts and take the heighest?
    m = wordCounts[words[i]];
    if (mf<m){
        mostFrequentWords = []
        mf=m;     
        mostFrequentWords.push(words[i]);
    } else if (mf === m){
        mostFrequentWords.push(words[i]);
    }

}

var addFooBar = function(word){
     var replaceText = ("foo"+ word +"bar");
     var newRegEx= new RegExp('\\b' + word + '\\b', 'g')
    return text.replace(newRegEx, replaceText)
}
 console.log(mostFrequentWords) 

 for (let j=0; j<mostFrequentWords.length; j++){
     text = addFooBar(mostFrequentWords[j])
 }  

 return text
}

