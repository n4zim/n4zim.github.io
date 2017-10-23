
// ----------------------------- INTEGRATION DATA -----------------------------

var CONTAINER = document.getElementById('lines-background');

var PARENT = document.getElementsByClassName("page-content")[0];

// ----------------------------- LINES IMAGES DATA -----------------------------

var IMAGES_HEIGHT = 21;

var TYPES = [ 'down-bottom', 'normal', 'down', 'down-top', 'up', 'up-top', 'up-bottom' ];

// -----------------------------------------------------------------------------

function randomTop() {
    return Math.floor(Math.random() * IMAGES_HEIGHT * 4) + IMAGES_HEIGHT * 4;
}

function generate() {
    var leftOrRight = Math.random() >= 0.5;
    for(var TOP = randomTop(); TOP < MAX_HEIGHT; TOP += randomTop()) {
        var type = TYPES[Math.floor(Math.random() * TYPES.length)];
        var width = 10 * Math.floor(Math.random() * 10) + 1;
        CONTAINER.innerHTML += '<div style="' +
            'position:absolute;width:' + width + '%;top:' + TOP + 'px;' +
            'height:' + IMAGES_HEIGHT + 'px;background:url(/assets/lines/' + type + '.png);' +
            (leftOrRight ? 'left:0;' : 'right:0;') +
            '"></div>';
        leftOrRight = !leftOrRight;
    }
}

var MAX_HEIGHT = PARENT.offsetHeight;
window.onresize = function() {
    if(MAX_HEIGHT !== PARENT.offsetHeight) {
        MAX_HEIGHT = PARENT.offsetHeight;
        CONTAINER.innerHTML = "";
        generate();
    }
};

generate();
