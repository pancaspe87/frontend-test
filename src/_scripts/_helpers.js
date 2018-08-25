'use strict';

let debounce = function(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}


let delay = function (label,callback){
    if(typeof window.delayed_methods=="undefined"){window.delayed_methods={};}  

    delayed_methods[label]=Date.now();

    var t=delayed_methods[label];

    setTimeout(function(){ if(delayed_methods[label]!=t){return;}else{  callback();}}, 500);
};

let isFieldSame = function($el1, $el2) {
    return $el1.val().trim() == $el2.val().trim();
}

let isValidEmail = function(email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

//zero not allowed
let isValidDecimal = function(value) {
    
    let re = /^(?!^0*$)(?!^0*\.0*$)^\d{1,2}(\.\d{1,2})?$/;
    return re.test(value);
}

//zero allowed
let isDecimal = function(value) {
    
    let re = /^\d*\.?\d*$/;
    return re.test(value);
}

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',
    easeOutExpo: function (x, t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function (x, t, b, c, d) {
        if (t == 0) {
            return b;
        }

        if (t == d) {
            return b + c;
        }

        if ((t /= d / 2) < 1) {
            return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        }

        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
});

export{ debounce, isValidEmail, isFieldSame, isValidDecimal, isDecimal, delay };



