'use strict'

function start(){
    while(true){
        let valid = false;
        let input = "";
        while(!valid){
            input = prompt("Enter a binary value to be converted to decimal(type \u0022back\u0022 to go back and hit \u0022Cancel\u0022)");
            if(validInput(input)){
                valid = true;
                break;
            }
        }
        b2d(input);
    }

function b2d(x){
    let pow2 = genPow2(x.length);
    pow2 = pow2.reverse();
    let output = 0;

    for(let i = x.length-1; i > -1; i--){ //I could reverse the pow2 but the user would have to be responible for the size which is better
        if(+x.charAt(i) === 1){
            output += pow2[i];
        }
    }
    alert(output);
    
}

function genPow2(n){
    let arr = [];
    for(let i = 0; i < n; i++){
        arr[i] = Math.pow(2, i);
    }
    return arr;
}

}
function validInput(input){
    if(input.toLowerCase() === "back"){
        alert();
        window.location.replace("../documents/index.html");

    }
    else if(input === ""){
        return false;
    }
    let validSet = ['0','1'];
    let good = true;
    for(let i = 0; i < input.length; i++){
        let setGood = false;
        for(let j = 0; j < validSet.length; j++){
            if(input.charAt(i) === validSet[j]){
                setGood = true;
                break;
            }
        }
        if(!setGood){
            good = false;
        }
        if(good){
            continue;
        }
        else{
            break;
        }
    }
    return good;
}