jQuery.kinetic
========

Add kinetic scrolling functionality to a container using mouse or touch devices, packaged for meteor.

http://davetayls.me/jquery.kinetic

========

## Compatibility

This plugin works with [jQuery](http://jquery.com) and
[Zepto](http://zeptojs.com/)

### Browsers ###

- ie: 7,8,9
- firefox: 3.6,4,5
- chrome: 13
- safari: 5
- iOS Safari: 4

## Demos
Take a look at a demo on <http://davetayls.me/jquery.kinetic>.

Filtering Clickable elements
---

If you need to allow events to be passed through the wrapper. For example to allow clicking on a link or an input then you can use `filterTarget` like so.

```javascript
$('#wrapper').kinetic({
    filterTarget: function(target, e){
        if (!/down|start/.test(e.type)){
            return !(/area|a|input/i.test(target.tagName));
        }
    }
});
```

## Options

    cursor          {string}    default: move   Specify the cursor to use on the wrapper
    slowdown        {number}    default: 0.9    This option affects the speed at which the scroll slows
    x               {string}    default: true   Toggles movement along the x axis
    y               {string}    default: true   Toggles movement along the y axis
    maxvelocity     {number}    default: 40     This option puts a cap on speed at which the container
                                                can scroll
    throttleFPS     {number}    default: 60     This adds throttling to the mouse move events to boost
                                                performance when scrolling
    triggerHardware {boolean} false             This adds css to the wrapper which
                                                will trigger iOS to use hardware acceleration

    filterTarget    {function(target)}          Return false from this function to
                                                prevent capturing the scroll

    movingClass     {object}
        up:         {string}    default: 'kinetic-moving-up'
        down:       {string}    default: 'kinetic-moving-down'
        left:       {string}    default: 'kinetic-moving-left'
        right:      {string}    default: 'kinetic-moving-right'

    deceleratingClass {object}
        up:         {string}    default: 'kinetic-decelerating-up'
        down:       {string}    default: 'kinetic-decelerating-down'
        left:       {string}    default: 'kinetic-decelerating-left'
        right:      {string}    default: 'kinetic-decelerating-right'

    Listeners:  All listeners are called with:
                - this = the instance of the Kinetic class

    moved       {function()}           A function which is called on every move
    stopped     {function()}           A function which is called once all
                                               movement has stopped

    Methods:    You can call methods by running the kinetic plugin
                on an element which has already been activated.

                eg  $('#wrapper').kinetic(); // activate
                    $('#wrapper').kinetic('methodname', options);

    start       Start movement in the scroll container at a particular velocity.
                This velocity will not slow until the end method is called.

                The following line scrolls the container left.
                $('#wrapper#).kinetic('start', { velocity: -30 });

                The following line scrolls the container right.
                $('#wrapper#).kinetic('start', { velocity: 30 });

                The following line scrolls the container diagonally.
                $('#wrapper#).kinetic('start', { velocity: -30, velocityY: -10 });

    end         Begin slowdown of any scrolling velocity in the container.
                $('#wrapper#).kinetic('end');

    stop        Stop the scrolling immediately

    detach      Detach listeners and functionality from the wrapper

    attach      Re-attach listeners and functionality previously detached using
                the detach method

Add your own methods
--------------------

There are some example methods in the `extra-methods` folder. You can also add your own.

	$.Kinetic.prototype.do = function(options){
	  // this -> instance of Kinetic
	  // this.settings -> get current settings
	  // options -> options passed in from call
	};
	
	// use the method
	$('#elem').kinetic('do', { options });