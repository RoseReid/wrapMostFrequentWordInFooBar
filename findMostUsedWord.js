module.exports = function(text){

var wordCounts = { };
var mf = 1;
var m = 0;
//var mostCommonWords = [];
var words = text.toLowerCase().split(/[\s.:><,]+/);

for(var i = 0; i < words.length; i++){
( wordCounts[ words[i]] = (wordCounts[words[i]] || 0) + 1)  //look for array with wordcounts and take the heighest?
console.log(wordCounts)

var addFooBar = function(){
     replaceText = ("foo"+ wordCounts +"bar");
     var newRegEx= new RegExp('\\b' + wordCounts + '\\b', 'g')
    return text.replace(newRegEx, replaceText)
       //console.log(words.splice(words,1,replaceText))
       
}
for (var j=i; j<words.length; j++)   //loop through next elements in array to compare calculate frequency of current element
        {
                if (words[i] === words[j])     //see if element occurs again in the array
                 m++;   //increment counter if it does
                  
            }
            if (mf<m)   //compare current wordCountss frequency with maximum frequency
                {
                  mf=m;      //if m>mf store m in mf for upcoming elements
                  wordCounts = words[i];
                }
                
        
   m=0;



}
       
 return addFooBar()
}

