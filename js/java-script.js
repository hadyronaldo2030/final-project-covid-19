$(document).ready(function(){
	//	Theme color		
	$(document).ready(function(){	
		$(".btn-theme").click(function(){
		$(".btn-theme").toggle();
		$("link[href*='style']").attr("href",$(this).val() + ".css");
		});
	});
	
	//	Menu slider
    $('.icons,.overlay,.overlay-menu ul li a').click(function() {
        $('.overlay').fadeToggle();
        $('.overlay-menu').fadeToggle();
        $('.close-icon').fadeToggle();
    });
	
	
	//	Nav Scrolltop
    $(window).scroll(function(){
        if($(window).scrollTop() > 50) {
            $('.top-nav-container').addClass("fixed")
            $('.icon-top').fadeIn();
        }else{
            $('.top-nav-container').removeClass("fixed")
            $('.icon-top').fadeOut();
        }
    });

    $(window).scroll(function() {
        $('.section').each(function() {
            if($(window).scrollTop() > $(this).offset().top - 1) {
                let sectionID = $(this).attr('id');
                $('nav li a, .overlay-menu ul li a').removeClass('active');
                $('nav li a[data-scroll="' + sectionID + '"]').addClass('active');
                $('.overlay-menu ul li a[data-scroll="' + sectionID + '"]').addClass('active');
            }
        });
    });

    $('.color-faq').click(function() {
        $('.color-faq').removeClass('active');
        $(this).addClass('active');
    });
    $('.faq-text .item').first().show();
    $('.color-faq').click(function(){
        let indexofColorfaq = $(this).index();
        $('.faq-text .item').hide();
        $('.faq-text .item').eq(indexofColorfaq).show();
    });




    // faq test-1

    $('.click1').click(function(){
        $('.faq-text ul li.click1').toggleClass('style-li');
        $('.faq-text ul li.click1 .icon-minus').toggle();
        $('.faq-text ul li.click1 .icon-plus').toggle();
        $('.faq-text ul li.click1 + .ul-text').slideToggle();
    });
    $('.click2').click(function(){
        $('.faq-text ul li.click2').toggleClass('style-li');
        $('.faq-text ul li.click2 .icon-minus').toggle();
        $('.faq-text ul li.click2 .icon-plus').toggle();
        $('.faq-text ul li.click2 + .ul-text').slideToggle();
    });    
    $('.click3').click(function(){
        $('.faq-text ul li.click3').toggleClass('style-li');
        $('.faq-text ul li.click3 .icon-minus').toggle();
        $('.faq-text ul li.click3 .icon-plus').toggle();
        $('.faq-text ul li.click3 + .ul-text').slideToggle();
    });
    $('.click4').click(function(){
        $('.faq-text ul li.click4').toggleClass('style-li');
        $('.faq-text ul li.click4 .icon-minus').toggle();
        $('.faq-text ul li.click4 .icon-plus').toggle();
        $('.faq-text ul li.click4 + .ul-text').slideToggle();
    });
    $('.click5').click(function(){
        $('.faq-text ul li.click5').toggleClass('style-li');
        $('.faq-text ul li.click5 .icon-minus').toggle();
        $('.faq-text ul li.click5 .icon-plus').toggle();
        $('.faq-text ul li.click5 + .ul-text').slideToggle();
    });
    $('.click6').click(function(){
        $('.faq-text ul li.click6').toggleClass('style-li');
        $('.faq-text ul li.click6 .icon-minus').toggle();
        $('.faq-text ul li.click6 .icon-plus').toggle();
        $('.faq-text ul li.click6 + .ul-text').slideToggle();
    });
    
});
