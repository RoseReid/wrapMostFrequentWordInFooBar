module.exports = function(text){
var words = text.toLowerCase().split(/[\s.:><,]+/);

//console.log(commonElementArray)

function findCommonElements() {
var commonElementArray = [];    // an array to hold the common elements in all the array
var lookupArray = [words];    // an array to hold the count of each elements in the input elements

    // iterates through each elements in the array to find the common elements
    for (var arrayIndex = 0; arrayIndex < words.length; arrayIndex++) {
        for (var childArrayIndex = 0; childArrayIndex < words[arrayIndex].length; childArrayIndex++) {

            // check whether we have already find the current element
            if (lookupArray[words[arrayIndex][childArrayIndex]]) {

                // we have already seen this element, so increment count by one
                lookupArray[words[arrayIndex][childArrayIndex]]++;
            } else {
                // this is a new element so set the count to 1
                lookupArray[words[arrayIndex][childArrayIndex]] = 1;
            }

            // check the updated count of the current element in the look up table, if the 
            // count is same as the number of input arrays, then its a common element
            if (lookupArray[words[arrayIndex][childArrayIndex]] == words.length) {
                    var newWord = lookupArray[words[arrayIndex][childArrayIndex]] == words.length;
                // this is a common element, push it to the array
                commonElementArray.push(newWord);
                console.log(commonElementArray)
                //console.log(commonElementArray)
                //console.log(childArrayIndex)
            }
        }
    }

      //console.log(commonElementArray);
}
    return commonElementArray;
    console.log(commonElementArray)

return findCommonElements()

}

