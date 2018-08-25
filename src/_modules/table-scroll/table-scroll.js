'use strict';

import { debounce } from '../../_scripts/_helpers';

export default class TableScroll {
    
    constructor() {

        if($('.table--scrollable').length === 0)
            return false;

        let $document = $(document),
            $tableWrapper = $('.table--scrollable__wrap'),
            $tableHeader = $('.table--sticky-header__wrap'),
            that = this;
    
        that.fadeScrollableTable();

        $(window).on('resize', debounce (function(e) {
            that.fadeScrollableTable();
        }, 250));

        //scroll header along with the content
        $tableWrapper.on('scroll', function () {

            $tableHeader
                .scrollLeft($(this).scrollLeft());
        }); 

        //display sticky header
        $document.on('scroll', function(e) {

            if($document.scrollTop() >= $tableWrapper.offset().top ){
                $tableHeader.addClass('visible');
            }else{
                $tableHeader.removeClass('visible');
            }
        });  

    }


    /* Toggle class 'no-fading' to apply additional style
    ** for each scrollable table
    */
    fadeScrollableTable(){

        let that = this;

        $('.table--scrollable').each(function (index, item){

            let $this = $(this),
                $parent = $this.parent(),
                $tableContainer = $parent.parent(),
                isScrollable = that.isTableScrollable($this);

            if(isScrollable)
                $tableContainer.removeClass('no-fading');
            else
                $tableContainer.addClass('no-fading');
        });
    };


    /* Define whether the width of the table exceeds the size 
    ** of the available area given by its container */
    isTableScrollable($table){
       let  $parent = $table.parent();

        if( $table.width() > $parent.width()) 
           return true;
        else
            return false;
    };

}
