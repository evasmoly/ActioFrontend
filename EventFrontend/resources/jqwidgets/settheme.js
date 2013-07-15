//theme - name of theme param to setup
//syncUrl - true/false, add ?theme to url
function setTheme(theme, reloadPage)
{
    if (theme == null)
    {
        alert("Theme cannot be empty!");
    }
    theme = theme.toString().toLowerCase();
    var url = "resources/jqwidgets/styles/jqx." + theme + '.css';

    //do not append css link if it already exist on the page in header
    var cssExist = $(document).find('head').find("link[rel=stylesheet][href*='jqx.' + theme + '.css']");
    if (cssExist.length == 0)
    {
        if (document.createStyleSheet != undefined)
        {
            document.createStyleSheet(url);
        }
        else
        {
            $(document).find('head').append('<link rel="stylesheet" href="' + url + '" media="screen" />');
        }
    }

    if (reloadPage)
    {
        window.location.assign(window.location.toString().replace(window.location.search,"?" + theme));
    }

    return theme;
};