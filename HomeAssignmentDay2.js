/* Javascript program to find a number is even or odd */

  function isOddOrEven(Number) {
    
    let n=Number
    if(n%2===0){
        console.log("The Number is even" );
    }
    else
    { 
        console.log("The Number is Odd");
 }
        //console.log(n);
} 

isOddOrEven(15); 

/* javascript function that determines the number is positive,negative or zero] */

function numberType(Number) {
    let n= Number
    if(n>0)
    {
        console.log("The number is positive number");
    }
    else if(n<0)
    {
        console.log("The number is Negative Number");
    }
    else{
        console.log("The given number is zero");
    }
}

numberType(-22) 


/* Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and 
`runTests` with `switch` for test type messages. */

 
function launchBrowser(browsername){
    if (browsername==="chrome") {

        console.log("Launched browser is a chrome");
        
    } else {

        console.log("Launched browser not supported");
        
    }
 

}

function runTests(testType) {
   switch (testType) {
    case "smoke":
        console.log("smoke tests");
        break;

        case "sanity":
            console.log("sanity tests");
            break;

            case "Regression":
                  console.log("Regression");
            break;
   
    default:
        break;
   }
}

launchBrowser("chrome")
runTests("sanity") 


 /* To Check the String is a palindrome  */

function revString(element) {
    let reversed = "";

    for (let i = element.length - 1; i >= 0; i--) {
        reversed = reversed + element[i];
    }

    console.log("Reversed String:", reversed);
    return reversed;
}

function isPalindrome(orgstr, reversed) {
    if (orgstr === reversed) {
        return true;
    } else {
        return false;
    }
}

let element = "level";
let reversedStr = revString(element);

console.log("Is Palindrome:", isPalindrome(element, reversedStr)); 

/* To find the two strings are anagram  Example 3*/

 function isAnagram(str1, str2) {
    let sortedStr1 = str1.toLowerCase().split("").sort().join("");
    let sortedStr2 = str2.toLowerCase().split("").sort().join("");

    return sortedStr1 === sortedStr2;
}


console.log(isAnagram("listen", "silent")); 
console.log(isAnagram("hello", "world"));    

/* Example 1  */

function lengthOfLastWord(s) {
    // 1. Split the string into an array of words
    let words = s.trim().split(" ");

    // 2. Find the last word in the array
    let lastWord = words[words.length - 1];

    // 3. Calculate the length of this word
    return lastWord.length;
}


console.log(lengthOfLastWord("Hello World"));        
console.log(lengthOfLastWord(" fly me to the moon ")); 

/* Example 2 */

function lengthOfLastWord(s) {
    // 1. Trim the String
    let trimmedString = s.trim();

    // 2. Split the String into Words
    let words = trimmedString.split(" ");

    // 3. Identify the Last Word
    let lastWord = words[words.length - 1];

    // 4. Calculate the Length of the Last Word
    let length = lastWord.length;

    // 5. Return the Length
    return length;
}

console.log(lengthOfLastWord(" fly me to the moon "));