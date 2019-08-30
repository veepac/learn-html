function genTabe()
{
    var n = document.getElementById("inputNumber").value;
    if(n == "")
    {
        document.getElementById("err").innerHTML="please write a number."
        alert("please write a number.")
    }
    else
    {
        document.getElementById("err").innerHTML=""
        document.getElementById("ans").innerHTML=n+"x1="+n*1+"<br/>"+n+"x2="+n*2+"<br/>"+n+"x3="+n*3+"<br/>"+n+"x4="+n*4+"<br/>"+n+"x5="+n*5+"<br/>"+n+"x6="+n*6+"<br/>"+n+"x7="+n*7+"<br/>"+n+"x8="+n*8+"<br/>"+n+"x9="+n*9+"<br/>"+n+"x10="+n*10+"<br/>";
}}
function erease()
{
    document.getElementById("ans").innerHTML="";
}