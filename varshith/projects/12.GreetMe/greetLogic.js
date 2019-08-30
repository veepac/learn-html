
function greetMe()
{
    var today = new Date();
    var hour = today.getHours();

    if (hour>=3 && hour<12)
    {
        document.getElementById("grettings").innerHTML="good morning";
    }
    else if(hour>=12 && hour<13)
    {
        document.getElementById("grettings").innerHTML="good noon";
    }
    else if(hour>=13 && hour<16)
    {
        document.getElementById("grettings").innerHTML="good after noon";
    }
    else if(hour>=16 && hour<19)
    {
        document.getElementById("grettings").innerHTML="good evening";
    }
    else if(hour>=19 && hour<=23)
    {
        document.getElementById("grettings").innerHTML="good night";
    }
    else
    {
        document.getElementById("grettings").innerHTML="good day";
        return;
    }
}