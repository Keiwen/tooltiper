
//class recognized as generating tooltip (the generator)
var tooltiperClass = 'tooltiper';
//define common tooltip html elmt id
var tooltipId = 'commonTooltip';
//generator's data attribute containing simple content
var tooltipDataName = 'tooltiper';
//id prefix of elmt with tooltip complex content
var tooltipContentIdSuffix = '_tooltiper';
var windowsWidth = $(window).width();
var windowsHeight = $(window).height();
//margin between mouse and tooltip, left and bottom (px)
var marginToMouse = 20;
//margin when tooltip is moved on the other side of the mouse
var marginToMouseInvert = 40;
//minimal margin from the windows border before reversing
var marginTooltip = 100;


$(document).ready(function() {

    //get all elmt with dedicated class (generators)
    var tooltipers = $('.' + tooltiperClass);

    //when mouse is over a tooltip generator
    tooltipers.mouseover(function(e) {
        //call move function to update tooltip position
        move(e);
        //check data attribute first
        var content = $(this).data(tooltipDataName);
        if(typeof content == 'undefined') {
            //no data, check the associated div
            var elmtId = $(this).attr('id');
            var contentElmt = $('#' + elmtId + tooltipContentIdSuffix);
            content = contentElmt.html();
        }
        //if content found, display tooltip
        if(typeof content != 'undefined') {
            displayTooltip(content);
        }
    });

    //when mouse leave the generator
    tooltipers.mouseout(function() {
        hideTooltip();
    });

});



function move(e) {
    var tooltipElmt = $('#'+tooltipId);
    //get tooltip elmt dimensions
    var tooltipWidth = tooltipElmt.width();
    var tooltipHeight = tooltipElmt.height();

    //default set left to mouse with margin
    var posX = e.pageX + marginToMouse;
    //when close to left border, move to right
    if(e.pageX > (windowsWidth - tooltipWidth - marginTooltip)) {
        posX = e.pageX - marginToMouseInvert - tooltipWidth;
    }

    //default set under mouse with margin
    var posY = e.pageY + marginToMouse;
    //when close to bottom border, move to top
    if(e.pageY > (windowsHeight - tooltipHeight - marginTooltip)) {
        posY = e.pageY - marginToMouseInvert - tooltipHeight;
    }

    tooltipElmt.css('left', posX + 'px');
    tooltipElmt.css('top', posY + 'px');
}

function displayTooltip(content) {
    var tooltipElmt = $('#'+tooltipId);
    tooltipElmt.html(content);
    tooltipElmt.show();
}

function hideTooltip() {
    var tooltipElmt = $('#'+tooltipId);
    tooltipElmt.hide();
}
