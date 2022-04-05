function calcCompound(){
    let p = document.getElementById("prinInput").value;
    let t = document.getElementById("timeInput").value;
    let r = document.getElementById("rateInput").value;
    let n = document.getElementById("periodInput").value;

    let total = p*(Math.pow((1+(r/n)), (n*t)));
    document.getElementById("totals").innerHTML = total;
  //  document.getElementById("totals").innerHTML = total;
}