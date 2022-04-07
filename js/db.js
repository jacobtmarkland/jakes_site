'use strict'

function start(){
    while(true){
        let valid = false;
        let input = "";
        while(!valid){
            input = prompt("Enter a value to be converted to binary(only whole values and no negatives) max 80 bits (type \u0022back\u0022 to go back and hit \u0022Cancel\u0022)");
            if(validInput(input)){
                valid = true;
                break;
            }
        }
        d2b(input);
    }
}
function d2b(x){
    x = +x;
    let pow2 = genPow2(80);//I could use a method to generate an array completly different hash on each call to provide flexibiliy to bits depending on the size of the n 
    let output = genBitStream(x, pow2); //to remove only 16 bits and add flexibility to the size of the number I need to see the powers of 2 as a limiting bit scope to perfectly get the right size. forumla = ((2^(x+1))-1 = (all of the added values of the previous power) where ^x = intended bit + 1) after you will minus one and that is the scope of numbers you can make, simple if statment
    let done = false;
    while(!done){
        for(let i = 0; i < output.length; i++){
            let ele1 = pow2[i];
            let ele2 = pow2[i+1];
            if((x > ele1 || x === ele1) && x < ele2){
                output[i] = '1';
                x -= pow2[i];
                if(x===0){
                    done = true; 
                }
                break;
            }
        }
    }
    alert(output.reverse());
}

function genBitStream(x, pow2){ //0-79
    x = +x;
    let empty = [];

    for(let i = 0; i < 80-1; i++){
        let prop1 = pow2[i];
        let prop2 = pow2[i+1];

        if((x > prop1 || x === prop1) && x < prop2) {
            for(let j = 0; j <= i; j++){
                empty[j] = 0;
            }
            break;
        }
    }
    return empty;
}
function genArr(size){

}

function genPow2(n){
    let arr = [];
    for(let i = 0; i < n; i++){
        arr[i] = Math.pow(2, i);
    }
    return arr;
}


function validInput(input){
    if(input.toLowerCase() === "back"){
        alert();
        window.location.replace("../documents/index.html");
    }
    else if(input === ""){
        return false;
    }
    let validSet = ['0','1','2','3','4','5','6','7','8','9'];
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