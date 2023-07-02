function product (arr) {

    if(arr.length === 0)
	return 1;

    else return arr[0] * product(arr.slice(1))
}
// console.log(product([10,10]))


function longest(arr, max = 0) {

    if(arr.length === 0)
	return max;

    if (arr[0].length > max)
	max = arr[0].length;

    return longest(arr.slice(1), max)
}

// console.log(longest([ "ho", "hola","allison","frankenstein"]))

function everyOther(str, new_str = "") {

    if (str.length === 0)
	return new_str;


    new_str += str[0]

    return everyOther(str.substring(2), new_str)
    
}


// isPalindrome("tacocat")  // true
// isPalindrome("tacodog")  // false

function isPalindrome(str, idx){    

    if (str.length === 0)
	return
    
    isPalindrome(str.slice(1)  )


}

console.log(isPalindrome("tacocat"))
console.log(isPalindrome("zablozki"))
    




function findIndex(arr, str, cnt = 0) {

    if (cnt > arr.length)
	return -1;
    
    if(arr[cnt] === str)
	return cnt
    else return findIndex(arr, str, cnt + 1)
    
}

// let animals = ["duck", "cat", "pony"];

// console.log(findIndex(animals, "cat"));  // 1
// console.log(findIndex(animals, "porcupine"));   // -1
// console.log(findIndex(animals, "fish"));  // 1


function revString(str) {

    if (str === "")
	return ""

    else return (revString(str.substr(1)) + str.charAt(0))

}

// console.log(revString("ariel"))



function gatherStrings(obj, arr = []) {
    for( key in obj ) {
	if ( typeof obj[key]  === "object" )
	    gatherStrings(obj[key], arr)
	else if (typeof obj[key] === "string")
	    arr.push(obj[key])
    }
    return arr
}


let nestedObj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData: {
    lastName: "Testowitz"
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          success: "you made it!"
        }
      }
    },
    favoriteString: "nice!"
  }
};

// console.log(gatherStrings(nestedObj)) // ["Lester", "Testowitz", "you made it!", "nice!"];


