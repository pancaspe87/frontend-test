// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

//dependencies
import $ from 'jquery';


import './_helpers';

//Active modules
import Link from '../_modules/link/link';
import Switch from '../_modules/switch/switch';
import TableScroll from '../_modules/table-scroll/table-scroll';


// Variable declaration
var $window = $(window),
    $body = $('body');

$(() => {
  new Link(); // Activate Link modules logic
  new Switch();
  new TableScroll();
  console.log('Welcome to Yeogurt!');

});
