var count=10;
let x=Math.floor(Math.random()*10)+1;
let w=document.getElementById("attemptLabel").innerHTML;
function link()
{
    
    let y=document.getElementById("textBox").value;
    console.log(x)
    console.log(y)
    if(count<=10&&count>=1)
    {
        count=count-1;
        document.getElementById("attemptCount").innerHTML=count;
        
    if(x==y)
    {
        location.replace("pro6.1.html");
    }
    if(x>y)
    {

        document.getElementById("smaller").style.visibility='visible';
        //alert("SMALL")
        document.getElementById("greater").style.visibility='hidden';
        document.getElementById("attemptLabel").innerHTML=w.replace("NO. OF ATTEMPTS","REMAINING ATTEMPTS");
    }
    if(x<y)
    {
       // alert("BIG")
        document.getElementById("greater").style.visibility='visible';
        document.getElementById("smaller").style.visibility='hidden';
        document.getElementById("attemptLabel").innerHTML=w.replace("NO. OF ATTEMPTS","REMAINING ATTEMPTS");
    }
    if(count<1)
    {
        location.replace("pro6.2.html");

        
    }

}
}