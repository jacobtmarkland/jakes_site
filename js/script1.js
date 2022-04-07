'use strict'


function clearFields(){
    document.getElementById("plainTextField").value = "";
    document.getElementById("plainTextField").select();
    document.getElementById("aesFieldOutput").innerHTML = "";
    document.getElementById("sha1FieldOutput").innerHTML = "";
    document.getElementById("sha224FieldOutput").innerHTML = "";
    document.getElementById("sha256FieldOutput").innerHTML = "";
}
function submit(){
    if(document.getElementById("plainTextField").value === ""){
        alert("Please enter a value into the text box.");
        document.getElementById("plainTextField").select();
    }
    else{
        let serect = "DSFsakdfj!234dsfj";
        let aes="", sha1="", sha224="", sha256="";
        let pt = document.getElementById("plainTextField").value;
        aes = CryptoJS.AES.encrypt(pt,serect);
        sha1 = CryptoJS.SHA1(pt, serect);
        sha224 = CryptoJS.SHA224(pt, serect);
        sha256 = CryptoJS.SHA256(pt, serect);
        document.getElementById("valueOutput").innerHTML = pt;
        document.getElementById("aesFieldOutput").innerHTML = aes;
        document.getElementById("sha1FieldOutput").innerHTML = sha1;
        document.getElementById("sha224FieldOutput").innerHTML = sha224;
        document.getElementById("sha256FieldOutput").innerHTML = sha256;
    }
}

function setFocus(){
    document.getElementById("plainTextField").value = "";
    document.getElementById("plainTextField").select();
    let input = prompt("This is a password encrypter, please enter a password to be encrypted. If you are still confused, please hit \u0022Cancel\u0022");
    document.getElementById("plainTextField").value = input;
    submit();
}