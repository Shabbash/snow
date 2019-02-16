$(document).ready(function () {


    // Smooth Scroll To Elements

    $('.navbar li a.scrollToAbout, .navbar li a.scrollToContact, .navbar li a.scrollToBlog, .hero a').click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top - 90
        }, 1000);

    });





	/////////// Navbar Scroll Styling//////////////////////////

		$(function(){
			var myNavbar = $('.myNavbar');
			
			$(window).scroll(function(){
				if($(window).scrollTop() <= 40){
					myNavbar.removeClass('navbar-scroll');
				    $(".logo").attr('src', 'assets/img/logo1.png');

				} else {
					myNavbar.addClass('navbar-scroll');
				    $(".logo").attr('src', 'assets/img/logo2.png');
				}
			});
		});

		/////////////////////////////////////////////

		////// first Owl Carousel ///////////
		$('.reviews .owl-carousel').owlCarousel({
			    loop:true,
			    margin:10,
			    responsiveClass:true,
			    smartSpeed:600,
			    responsive:{
			        0:{
			            items:1,
			            nav:true
			        },
			        600:{
			            items:1,
			            nav:false
			        },
			        1000:{
			            items:1,
			            nav:false,
			            loop:false,
			            dots:true
			        }
			    }
			})
		//////////////////////////////////////

				////// second Owl Carousel ///////////
		$('.partners .owl-carousel').owlCarousel({
			    loop:true,
			    margin:10,
			    responsiveClass:true,
			    smartSpeed:600,
			    responsive:{
			        0:{
			            items:1,
			            nav:true
			        },
			        600:{
			            items:1,
			            nav:false
			        },
			        1000:{
			            items:5,
			            nav:false,
			            loop:true,
			            dots:false
			        }
			    }
			})
		//////////////////////////////////////

		////// third Owl Carousel ///////////
		$('.latestBlog .owl-carousel').owlCarousel({
			    loop:true,
			    margin:10,
			    responsiveClass:true,
			    smartSpeed:600,
			    responsive:{
			        0:{
			            items:1,
			            nav:true
			        },
			        600:{
			            items:1,
			            nav:false
			        },
			        1000:{
			            items:3,
			            nav:false,
			            loop:false,
			            dots:true
			        }
			    }
			})
		//////////////////////////////////////

		// start Best Project ///
		$(".bestProjects .project").hover(function() {

			  $(this).children('.onHover').fadeIn();
			}, function() {
			  $(this).children('.onHover').fadeOut();
		});

		/////////////////////


			  /////// Nice Scroll /////////
    
    $("html").niceScroll();

    	///// Loading ////////////////
    
    $(".loading-overlay .spinner").fadeOut(2, function () {
        
        // Show The Scroll

        $("body").css("overflow", "auto");
        
        $(this).parent().fadeOut(2, function () {
            
            $(this).remove();
        });
    });
    	////////////////////////////////////

    	    ///////// caching scroll top element to use it in other places ///////
    var scrollButton = $("#scroll-top");
    $(window).scroll(function() {
        //	console.log($(this).scrollTop());
        if ($(this).scrollTop() >= 800) {

            scrollButton.show();

        } else {
            scrollButton.hide();
        }

    });

    scrollButton.click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
    });

//////////////////////////////////////////

/* ------ Start porfolioMenu -------- */

//slide up and down menu

			$(".bestProjects.portfolio i").click(function(){
			  $(".portfolioMenu").slideToggle();
			});

// sort portfolio menu

			$('.bestProjects.portfolio li').on('click',function(){
				$(this).addClass('active').siblings().removeClass('active');

					if ($(this).data('class') === 'all') {
						$('.bestProjects.portfolio .project').delay(300).fadeIn();
					}else{
							$('.bestProjects.portfolio .project').fadeOut();
							$($(this).data('class')).delay(300).fadeIn();

					}
			});


/* -------- end portfolio menu ---------- */
  
});
