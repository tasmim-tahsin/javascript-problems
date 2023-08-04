function signal(colour)
{
    if(colour=='red')
    {
        console.log("Danger! Don't cross the road.");
    }
    else if(colour=='green')
    {
        console.log("You can cross the road.");
    }
    else if(colour=='yellow')
    {
        console.log("Stop! stand here.");
    }
    else
    {
        console.log("Invalid");
    }

   
}
signal("red");