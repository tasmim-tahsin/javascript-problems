function even_sum(arr)
{
    var sum=0;

    for(var i=0; i<arr.length; i++)
    {
        if(arr[i]%2==0)
        {
            sum+=arr[i];
        }
        else{
            continue;
        }
    }
    return sum;

}

const arr=[5,7,8,10,45,30];
console.log(even_sum(arr));