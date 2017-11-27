var fs = require('fs');







var sometext = fs.readFileSync('./File/spanishtext.txt', 'binary');

//  Hebrew text will disply properly when written to the file, needs to be encoded in utf-8
//var sometext = fs.readFileSync('./File/hebrewtext.txt', 'utf-8');







var punctuationless = sometext.replace(/[.,\/#!$%\^&?\*;:{}=\-_`~()]/g,"");
var finalString = punctuationless.replace(/\s{2,}/g," ");


var splittedArray = finalString.split(' ');

var freqArray = [];



freqArray.push([1,splittedArray[0]]);
splittedArray.splice(0,1);


var splittedArrayLength = splittedArray.length;
for(var i = 0; i < splittedArrayLength; i++)
{  
        for(var k = 0; k < freqArray.length; k++)
        {
            if(splittedArray[i] === freqArray[k][1])
            {
                freqArray[k][0]++;
               
                break;
                
            }

            if(k === freqArray.length - 1){
                 freqArray.push([1,splittedArray[i]]); 
                 break;
            }
          
        }
}

freqArray.sort(sortFunction);

function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] > b[0]) ? -1 : 1;
    }
}

//console.log(freqArray.length);

//fs.writeFileSync('./File/TESTTEST.txt')










for(var i = 0; i < freqArray.length; i++){


    fs.appendFileSync('./File/TESTTEST.txt', freqArray[i][0] + " -- " + freqArray[i][1]);
    fs.appendFileSync('./File/TESTTEST.txt', '\r\n');


}



















