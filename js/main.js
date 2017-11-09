$(document).ready(function(){

/*
left 37
up 38
right 39
down 40
*/

$(document).keydown(function (event){
    event.preventDefault();

    if (event.which == 37) {
        addKey('left');

    } else if (event.which == 38) {
        addKey('up');

    } else if (event.which == 39){
        addKey('right');

    } else if (event.which == 40){
        addKey('down');
    }
});

function addKey (direction) {
    var keyHtml = '<div class="key" data-arrow="' + direction + '">' + direction + '</div>';
    $('.key-list').prepend(keyHtml);
}

});
