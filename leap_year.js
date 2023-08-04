function ISLP(y)
  {
    if((y % 400 == 0) ||
       (y % 100 != 0) &&
       (y % 4 == 0))
    {
      return 1;
    }
    else
    {
      return 0;
    }
  }

const year= ISLP(2024);
if(year==1)
{
    console.log("Leap Year");
    
}
else
{
    console.log("Not Leap Year");

}