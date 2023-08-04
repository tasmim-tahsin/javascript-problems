function make_avg(arr,size)
{
    let sum=0;
    for(var i=0; i<arr.length; i++)
    {
        sum=sum+arr[i];
    }

    var avg=sum/size;
    return avg;
}
var arr=[10,20,30,40,50,60];
var result= make_avg(arr,3);
console.log("Average from array "+result);