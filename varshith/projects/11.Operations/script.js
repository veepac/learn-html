function add(a , b)
{
    let c = a+b;
    return c;
}
//
//
function subtract(a , b)
{
    let c = a-b;
    return c;
}
//
//
function multiply(a , b)
{
    let c = a*b;
    return c;
}
//
//
function divide(a , b)
{
    let c = a/b;
    return c;
}
//
//
function operationsWithIf(a , b , o)
{
    if(o == "+")
    {
        c = add(a , b);
        printValue(c);
    }
    else if(o == "-")
    {
        c = subtract(a , b);
        printValue(c);
    }
    else if(o == "*")
    {
        c = multiply(a , b);
        printValue(c);
    }
    else if(o == "/")
    {
        c = divide(a , b);
        printValue(c);
    }
}
//
//
function operationsWithSwitch(a , b , o)
{
    switch(o)
    {
        case "+" :
            c = add(a , b);
            printValue(c);
            break;
        case "-":
            c = subtract(a , b);
            printValue(c);
            break;
        case "*":
            c = multiply(a , b);
            printValue(c);
            break;
        default :
            c = divide(a , b);
            printValue(c);
            break;  
    }
}
//
//
function caluculate(o)
{
    let a = document.getElementById("input-1").value;
    let b = document.getElementById("input-2").value;

    if(a!=="")
    {
        a = parseInt(a);
    }
    else
    {
        alert("please enter a number");
        return;
    }

    if(b!=="")
    {
        b = parseInt(b);
    }
    else
    {
        alert("please enter a number");
        return;
    }
    
    operationsWithSwitch(a , b , o);
}


function printValue(v)
{
    console.log(v);
    document.getElementById("ans").innerHTML=v;
}
