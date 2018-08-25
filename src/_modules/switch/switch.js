'use strict';

export default class Switch {
  constructor() {
    	
    	$('.switch__object li').on('click', function(e){

    		let $this = $(this),
    			$otherOption = $this.siblings();

    		if($this.is('active'))
    			return false;
    		else{
    			$otherOption.removeClass('active');
    			$this.addClass('active');
    		}

    	});
  }
}
