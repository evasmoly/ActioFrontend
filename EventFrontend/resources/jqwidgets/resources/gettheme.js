function getTheme(theme) 
{
	
	var url;
	//check if theme passed into this function as parameter, then inject it as stylesheet link
	if(theme != null)
	{
		url = "resources/jqwidgets/styles/jqx." + theme + '.css';
		if (document.createStyleSheet != undefined) 
		{
	            document.createStyleSheet(url);	        
	    }
	    else 
	    {
	    	$(document).find('head').append('<link rel="stylesheet" href="' + url + '" media="screen" />');
	    }
		return theme;
	}
	
    var theme =  $.data(document.body, 'theme');
    
    if (theme == null) 
    {
        theme = '';
    }
    else 
    {
        return theme;
    }
    
    //check if theme passes as query string parameter
    var themestart = window.location.toString().indexOf('?');
    if (themestart == -1) 
    {
        return '';
    }

    var theme = window.location.toString().substring(1 + themestart);
    url = "resources/jqwidgets/styles/jqx." + theme + '.css';

    if (document.createStyleSheet != undefined) 
    {
        var hasStyle = false;
        $.each(document.styleSheets, function (index, value) 
        {
            if (value.href != undefined && value.href.indexOf(theme) != -1) 
            {
                hasStyle = true;
                return false;
            }
        });
        if (!hasStyle) {
            document.createStyleSheet(url);
        } 
    }
    else 
    {
    	$(document).find('head').append('<link rel="stylesheet" href="' + url + '" media="screen" />');
    }
  
    return theme;
};