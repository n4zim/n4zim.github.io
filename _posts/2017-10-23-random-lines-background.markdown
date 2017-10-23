---
layout: post
title:  "Random lines background"
date:   2017-10-22 23:30:00
categories: code js
sitemap: false
---

{% highlight html %}
<div
    id="lines-background"
    style="position: absolute; width: 100%; left: 0; right: 0;"
></div>
{% endhighlight %}

{% highlight css %}
#lines-background {
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
}
{% endhighlight %}

{% highlight javascript %}
var CONTAINER = document.getElementById('lines-background');
var PARENT = document.getElementsByClassName("page-content")[0];
{% endhighlight %}

{% highlight javascript %}
var IMAGES_HEIGHT = 21;
var TYPES = [ 'down-bottom', 'normal', 'down', 'down-top', 'up', 'up-top', 'up-bottom' ];
{% endhighlight %}

{% highlight javascript %}
function randomTop() {
    return Math.floor(Math.random() * IMAGES_HEIGHT * 4) + IMAGES_HEIGHT * 4;
}
{% endhighlight %}

{% highlight javascript %}
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
{% endhighlight %}

{% highlight javascript %}
generate();
{% endhighlight %}

{% highlight javascript %}
var MAX_HEIGHT = PARENT.offsetHeight;
window.onresize = function() {
    if(MAX_HEIGHT !== PARENT.offsetHeight) {
        MAX_HEIGHT = PARENT.offsetHeight;
        CONTAINER.innerHTML = "";
        generate();
    }
};
{% endhighlight %}