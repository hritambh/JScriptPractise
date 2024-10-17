function checkIfPalindrom(x) {
    x = x.toLowerCase();
    let l = 0;
    let r = x.length-1;
    let isPalin = true;
    while (l<r){
        if (x.charAt(l) !== x.charAt(r)){
            console.log(`Value at L is ${l} and char is ${x.charAt(l)} and value of R si ${r} and char is ${x.charAt(r)}`);
            isPalin = false;
            break;
        }else {
            l++;
            r--;
        }
    }
    return isPalin;
}

let x = "ababa";
if (checkIfPalindrom(x))
    console.log("Is Palindrome")
else
    console.log("Is not Palindrome")