// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

//dependencies
import $ from 'jquery';
import 'pickadate';
import 'pickadate-date';

// Variable declaration
const $window = $(window),
    $body = $('body');

$(() => {

  $('.datepicker').pickadate({
    format: 'dd-mm-yyyy'
  });

  $body.on('change', '.datepicker', function(e) {
    let $this = $(this),
      isEmpty = $this.val() === '' ? true : false;

    if(isEmpty)
      return false;

    $(this)
      .siblings('label')
      .addClass('is-valid');
  });

});
