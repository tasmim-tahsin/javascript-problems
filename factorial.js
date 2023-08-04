//for loop
function facto(number)
{
    let result=1;

    for(let i=1; i<=number; i++)
    {
        result*=i;
    }
    return result;
}
//while Loop
function facto_while(number)
{
    let result=1;
    let i=1;

    while(i<=number)
    {
        result*=i;
        i++;
    }
    return result;
}


console.log(facto(5));
console.log(facto_while(3));