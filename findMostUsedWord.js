module.exports = function(text){

var words= text.split(/[\s.:><,]+/);
var mf = 1; //default maximum frequency
var m = 0;  //counter
var item;  //to store item with maximum frequency
var replaceText; //array
var addFooBar = function(){
     replaceText = ("foo"+ item +"bar");
     var newRegEx= new RegExp('\\b' +item + '\\b', 'g')
    return text.replace(newRegEx, replaceText)
       //console.log(words.splice(words,1,replaceText))
       
};

for (var i=0; i<words.length; i++)    //select element (current element)
{
        for (var j=i; j<words.length; j++)   //loop through next elements in array to compare calculate frequency of current element
        {
                if (words[i] == words[j])    //see if element occurs again in the array
                 m++;   //increment counter if it does
                if (mf<m)   //compare current items frequency with maximum frequency
                {
                  mf=m;      //if m>mf store m in mf for upcoming elements
                  item = words[i];   // store the current element.
                }
        }
        m=0;  
}



 return addFooBar()
}

