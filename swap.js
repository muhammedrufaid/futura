function swap() {
    var a,b;
    a=Number(document.getElementById("num").value);
    b=Number(document.getElementById("num1").value);
temp=a;
a=b;
b=temp;
document.getElementById("num2").value=a;
document.getElementById("num3").value=b;


   
}