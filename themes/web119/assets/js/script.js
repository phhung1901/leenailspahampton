$(document).ready(function() {
    
	/*////////////// MY SLIDER ///////////////*/
    $( '#my-slider' ).sliderPro({
        fade: true,
        width: '100%', 
        height:444,
        arrows: true,
        buttons: false,  
        slideSpeed : 5000,
        slideAnimationDuration:5000,
        breakpoints: {
            990: {height:350},
            768: {height:300},
            480: {height:180},
          
        }
    });
	/*////////////// MOBILE NAV ///////////////*/
	$('.mobile-menu nav').meanmenu({
        meanMenuContainer: '.menu_mobile_v1',
        meanScreenWidth: "990",
        meanRevealPosition: "right",
        meanMenuOpen: "<span></span>"
    });
    

    /*////////////// GALLERY ///////////////*/
    var groups = {};
    $('.gallery-item').each(function() {
      var id = parseInt($(this).attr('data-group'), 10);      
      if(!groups[id]) {
        groups[id] = [];
      }       
      groups[id].push( this );
    });


    $.each(groups, function() {
      
      $(this).magnificPopup({
          type: 'image',
          closeOnContentClick: true,
          closeBtnInside: false,
          gallery: { enabled:true }
      })
      
    });
    /*////////////// BOOKING ///////////////*/
    $(document).ready(function() {
      //$('#datetimepicker_v1').datetimepicker();
    });
    // CONFIRM BOOKING
    $(document).ready(function(){
        $(".databooktime").on("click",".open_booking", function(){
            var hours = $(this).attr("valhours");
            $.magnificPopup.open({
                type: 'inline',
                midClick: true,
                items: {
                  src: '#open_booking'
                },
                callbacks: {
                    beforeOpen: function() {
                        if($(window).width() < 700) {
                            this.st.focus = false;
                        } else {
                            this.st.focus = '#name';
                        }
                        $("input[name='booking_hours']").val(hours);


                    }
                }
            });

            return false;
        });

        $(".btn_cancel").click(function(){
            $.magnificPopup.close();
            
        });
    });
    // END CONFIRM BOOKING
    // FLEX LABEL IN PAYMENT 
   // $('.fl-flex-label').flexLabel();
    
})