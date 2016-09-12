$(document).ready(function() {
	var sidebar = $('#sidebar'),
	    mask = $('.mask'),
	    sidebar_trigger = $('#sidebar_trigger'),
	    backButton = $('.back-to-top');
	      function showSideBar(){
	    	mask.fadeIn('slow');      //背景变暗
	  	     sidebar.css('right',0);   //侧栏出现
	    }
        function hideSideBar(){
	    	mask.fadeOut('slow');      
	  	    sidebar.css('right',-sidebar.width());  
	    }
	    sidebar_trigger.on('click',showSideBar);
	    mask.on('click',hideSideBar);
        backButton.on('click',function(){
        $('html,body').animate({scrollTop:0}, 800);});
        $(window).on('scroll', function() {
        	if ($(window).scrollTop() > $(window).height()) {
        		backButton.fadeIn();
        	}
        	else{
        		backButton.fadeOut();
        	}
        });
        $(window).trigger('scroll');
	  
       

});