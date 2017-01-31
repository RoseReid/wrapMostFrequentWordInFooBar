module.exports = function(text){

var words= text.split(/[\s.:><,]+/);
var mf = 0; //default maximum frequency
var m = 0;  //counter
var items = [];  //to store item with maximum frequency
var replaceText; //array
var addFooBar = function(item){
     replaceText = ("foo"+ item +"bar");
     var newRegEx= new RegExp('\\b' +item + '\\b', 'g')
    return text.replace(newRegEx, replaceText)
};

for (var i=0; i<words.length; i++)    //select element (current element)
{
        for (var j=i; j<words.length; j++)   //loop through next elements in array to compare calculate frequency of current element
        {
                if (words[i] === words[j])     //see if element occurs again in the array
                 m++;   //increment counter if it does
        }
        if (mf<m)   //compare current items frequency with maximum frequency
        {
                mf=m;     //if m>mf store m in mf for upcoming elements
                items = [];
                items.push(words[i]);  //to save you do arrayname.push(item)
                // store the current element.
        } else if (mf === m) {
                //handle tie here
                items.push(words[i]);             
                        console.log(items)

        }
        m=0;  
}

items.forEach(function(item){
      text = addFooBar(item)
})
 return text;
}

