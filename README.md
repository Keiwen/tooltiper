# Tooltiper
**Require jQuery >= 1.5**

Generate and manage tooltip on webpage

First, include js and css file to your page and create a div with id "commonTooltip", tooltip content will be put in here
```
<div id="commonTooltip"></div>
```

If you want to display a tooltip when you hover an element, add the class "tooltiper"
Then you have two options
- Simple text in tooltip: just add it in a "data-tooltiper" attribute of your element
```
<div class="tooltiper" data-tooltiper="Tooltip content">
    Hover me to see simple text tooltip
</div>
```
- Advanced html text in tooltip: create another element with id equal to original element concatenated with "_tooltiper", and class "tooltiperContent". Content in this element will be display in tooltip
```
<div class="tooltiper" id="elementToHover">
    Hover me to see advanced text tooltip
</div>
<div class="tooltiperContent" id="elementToHover_tooltiper">
    <h1>Advanced tooltip</h1>
    <p>Here you can format html, even add <a href="#">a link</a>
        that cannot be clicked</p>
</div>
```

*See html or png sample in demo folder.*