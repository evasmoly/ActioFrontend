function DropDownTheme(divContainerId, theme)
{
    var ddl = $("#" + divContainerId);
    var list = [
                     "UI-Start",
                     "Web",
                     "Bootstrap",
                     "Metro",
                     "Office",
                     "Fresh",
                     "Black",
                     "Classic",
                     "Summer",
                     "UI-Redmond",
                     "UI-Sunny",
                     "Darkblue",
                     "Highcontrast",
                     "Shinyblack",
                     "UI-Smoothness",
                     "UI-Le-frog"

    ];
    // Create a jqxDropDownList

    ddl.jqxDropDownList({ source: list, width: '200', height: '20', theme: theme });
    var items = ddl.jqxDropDownList('getItems');
    var indexToSelect = 0;

    $.each(items, function (index)
    {
        if (this.value.toLowerCase() == theme)
        {
            indexToSelect = index;
        }
    });
    ddl.jqxDropDownList({ selectedIndex: indexToSelect });
    ddl.on('select', function (event)
    {
        var item = event.args.item;
        setTheme(item.label, true);
    });
}