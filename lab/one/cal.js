function EnterClear()
{
    document.getElementById("Answer").value =" ";
}
function EnterEqual()
{
    var x =document.getElementById("Answer").value;
    var y=eval(x);
    document.getElementById("Answer").value=y
}
function  EnterOperator(oprator)
{
    document.getElementById("Answer").value += oprator;
}
function EnterNumber(num)
{
    document.getElementById("Answer").value += num;
}