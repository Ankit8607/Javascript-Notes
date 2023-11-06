const btn = document.getElementById("button");
const rst = document.getElementById("result");
btn.addEventListener("click",function(){
    const val = document.getElementById("temptext").value;
    const convertTo = document.getElementById("templist").value;
    let result=val;
    if(!isNaN(val)){
        if(convertTo == "celsius") result = (result-32) * 5 / 9;
        else result = result * 9 / 5 + 32;
        rst.innerHTML = result;
    }
    else rst.innerHTML = "Enter a valid number";
})