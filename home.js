function validate()
{
    var result=true;
    var i=document.getElementsByTagName("input");
    
    if(i[0].value.length==0 || i[1].value.length==0)
    {  	
    	alert("enter value");

		// result=false;
    }
    // if(i[0].value.length<=5)
    // 	result=false;
    
    if (i[1].value.length<=4) {
    	alert("Password size error");
    }
    if (i[1].value.length>=9) {
    	alert("Password size error");
    }
    if (i[0].value.length<=4)
    {
        result=false;
    }
	if(result==false)
	{
		alert("wrong input");
	}
    return(result);
}



