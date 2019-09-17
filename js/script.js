$(function(){



    var fade_img=$('#wrap #main_full #mainFadeImg ul li');
    var fade_onButton=$('#wrap #main_full #imgButton div.first');
	var fade_text1=$('#wrap #main_full #main_contents #mainFadeText .fadeText01 h2');
	var fade_text2=$('#wrap #main_full #main_contents #mainFadeText .fadeText01 p');
	var fade_text3=$('#wrap #main_full #main_contents #mainFadeText .fadeText01 .buttons');
    fade_img.not(':first').hide();
	fade_text1.css({left:'-200px',opacity:'0'});
	fade_text2.css({left:'-200px',opacity:'0'});
	fade_text3.css({left:'-200px',opacity:'0'});
	$('#main_contents #mainFadeText .fadeText01:first h2').stop().animate({left:0,opacity:1},800);
    $('#main_contents #mainFadeText .fadeText01:first p').stop().delay(150).animate({left:0,opacity:1},800);
    $('#main_contents #mainFadeText .fadeText01:first .buttons').stop().delay(300).animate({left:0,opacity:1},800);

    $('#wrap #main_full #imgButton div').click(function (){
        tg=$(this);
        $('#main_contents #mainFadeText .fadeText01 h2:visible').stop().animate({left:-200,opacity:0},500);
        $('#main_contents #mainFadeText .fadeText01 p:visible').stop().animate({left:-200,opacity:0},500);
        $('#main_contents #mainFadeText .fadeText01 .buttons:visible').stop().animate({left:-200,opacity:0},500);
		$('#mainFadeImg ul li:visible').fadeOut(1000);
        var num=$('#wrap #main_full #imgButton div').index(this);
        $(fade_img).eq(num).fadeIn(1000);
		$(fade_text1).eq(num).stop().animate({left:0,opacity:1},1000);
		$(fade_text2).eq(num).stop().delay(150).animate({left:0,opacity:1},1000);
		$(fade_text3).eq(num).stop().delay(300).animate({left:0,opacity:1},1000);

        fade_onButton.removeClass('on');
        tg.addClass('on');

        fade_onButton=$(this);
    });


    var btnNum=0;

    function autoPlay() {
        btnNum++
        if(btnNum>=4){
            btnNum=0;
        }
        $('#wrap #main_full #imgButton div').eq(btnNum).stop().trigger('click');
        auto1=setTimeout(autoPlay,5000);
    }
    auto1=setTimeout(autoPlay,5000);

    $('#wrap #main_full #imgButton div').hover(function () {
        clearTimeout(auto1);
    },function() {
        auto1=setTimeout(autoPlay,4000);
    });



	//메뉴바 hover//


	$('.menu_bar').hover(function(){
		$('.menu_bar .bar01').css({transition:'all 0.3s',background:'#ff4c79'}).animate({width:'30px'},200)
		$('.menu_bar .bar02').css({transition:'all 0.3s',background:'#ff4c79'}).animate({width:'20px'},200)
		$('.menu_bar .bar03').css({transition:'all 0.3s',background:'#ff4c79'}).animate({width:'30px'},200)
	},function(){
		$('.menu_bar .bar01').css({transition:'all 0.3s',background:'#fff'}).animate({width:'30px'},200)
		$('.menu_bar .bar02').css({transition:'all 0.3s',background:'#fff'}).animate({width:'30px'},200)
		$('.menu_bar .bar03').css({transition:'all 0.3s',background:'#fff'}).animate({width:'30px'},200)
	});

	$('.menu_bar').toggle(function(){
		$('.menu_bar').addClass('menu_bar_act');
		$('#wrap #mainFadeImg').css({zIndex:'51'});
		$('#wrap #main_contents').addClass('none')
		$('#mainFadeImg ul li img').addClass('bgOn');
        $('#wrap #main_contents02').css({display:'block'}).stop().animate({opacity:1},500);
        $('#main_contents02 .contents02_nav ul li a:first').trigger('click');
        $('#main_contents02 .box01 h3').stop().animate({opacity:1,left:0},'slow');
        $('#main_contents02 .box01 p').stop().delay(100).animate({opacity:1,left:0},'slow');
        clearTimeout(auto1);
	},function(){
		$('.menu_bar').removeClass('menu_bar_act');
		$('#wrap #mainFadeImg').css({zIndex:'50'});
		$('#wrap #main_contents').removeClass('none')
		$('#mainFadeImg ul li img').removeClass('bgOn');
        $('#wrap #main_contents02').css({display:'none'}).stop().animate({opacity:0},500);
        $('#main_contents02 .box01 h3').stop().animate({opacity:0,left:200},600);
        $('#main_contents02 .box01 p').stop().animate({opacity:0,left:200},600);
		auto1=setTimeout(autoPlay,4000);
	});


    //컨텐츠02 슬라이드//

    var box=$('#main_contents02 .contents02_box .slide_contents .slide');
	var col1=0;
	var col2=1;
	var col3=2;
	var col4=3;
	var col5=4;
	var timer;


    timer=setInterval(event,3000);
    function event() {
        box.eq(col1).css({zIndex:53, transform:'scale('+0.8+')'}).stop().animate({left:'0px', opacity:0.6,},800);
        box.eq(col2).css({zIndex:52, transform:'scale('+0.8+')'}).stop().animate({left:'1200px', opacity:0},800);
        box.eq(col3).css({zIndex:53, transform:'scale('+0.8+')'}).stop().animate({left:'900px', opacity:0.3},800);
        box.eq(col4).css({zIndex:53, transform:'scale('+0.8+')'}).stop().animate({left:'600px', opacity:0.6},800);
        box.eq(col5).css({zIndex:53, transform:'scale('+1+')'}).stop().animate({left:'300px', opacity:1},800);
        col1--;
		col2--;
		col3--;
		col4--;
        col5--;
        if(col1<0){col1=4}
		if(col2<0){col2=4}
		if(col3<0){col3=4}
		if(col4<0){col4=4}
		if(col5<0){col5=4}
    }


    $('.contents02_box .slide_contents .slide .col_img').hover(function(){
        $(this).css({transform:'scale('+1.1+')', borderRadius:'20px'})
	},function(){
        $(this).css({transform:'scale('+1+')', borderRadius:'0px'})
	});

    $('.contents02_box .slide_contents .slide .col_img').click(function(){
        $(this).parents('.slide').css({zIndex:55}).addClass('on_click');
        $('#wrap #main_full #nav .menu_bar').css({opacity:0});
        $(this).parents('.on_click').find('.col_click_text').css({display:'block'})
        clearInterval(timer);
    });

    $('.close_btn').click(function(){
        $(this).parents('.slide').css({zIndex:53}).removeClass('on_click');
        $('#wrap #main_full #nav .menu_bar').css({opacity:1})
        $(this).parents('.slide').find('.col_click_text').css({display:'none'})
        timer=setInterval(event,3000);
    });


    var next=$('.contents02_box .slide_contents .btns_slide .next_btn');
    var prev=$('.contents02_box .slide_contents .btns_slide .prev_btn');

	next.hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval(event,3000);
	});
    prev.hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval(event,3000);
	});

    next.click(function(){
        box.eq(col1).css({zIndex:53, transform:'scale('+0.8+')'}).stop().animate({left:'0px', opacity:0.6,},800);
        box.eq(col2).css({zIndex:52, transform:'scale('+0.8+')'}).stop().animate({left:'1200px', opacity:0},800);
        box.eq(col3).css({zIndex:53, transform:'scale('+0.8+')'}).stop().animate({left:'900px', opacity:0.3},800);
        box.eq(col4).css({zIndex:53, transform:'scale('+0.8+')'}).stop().animate({left:'600px', opacity:0.6},800);
        box.eq(col5).css({zIndex:53, transform:'scale('+1+')'}).stop().animate({left:'300px', opacity:1},800);
        col1--;
		col2--;
		col3--;
		col4--;
        col5--;
        if(col1<0){col1=4}
		if(col2<0){col2=4}
		if(col3<0){col3=4}
		if(col4<0){col4=4}
		if(col5<0){col5=4}
    });

    prev.click(function(){
        box.eq(col1).css({zIndex:53, transform:'scale('+0.8+')'}).stop().animate({left:'600px', opacity:0.6,},800);
        box.eq(col2).css({zIndex:53, transform:'scale('+1+')'}).stop().animate({left:'300px', opacity:1},800);
        box.eq(col3).css({zIndex:52, transform:'scale('+0.8+')'}).stop().animate({left:'0px', opacity:0.6},800);
        box.eq(col4).css({zIndex:53, transform:'scale('+0.8+')'}).stop().animate({left:'1200px', opacity:0},800);
        box.eq(col5).css({zIndex:53, transform:'scale('+0.8+')'}).stop().animate({left:'900px', opacity:0.6},800);
        col1++;
		col2++;
		col3++;
		col4++;
        col5++;
        if(col1>4){col1=0}
		if(col2>4){col2=0}
		if(col3>4){col3=0}
		if(col4>4){col4=0}
		if(col5>4){col5=0}
    });


    //nav hover//


	$('#main_contents02 .contents02_nav ul li a').hover(function(){
        $(this).find('.width_bar').css({width:'100%'});
	},function(){
		$(this).find('.width_bar').css({width:0});
	});


    //nav click//
    var nav_on=$('#main_contents02 .contents02_nav ul li a.select_nav');

    $('#main_contents02 .contents02_nav ul li a').click(function(){
        nav_on.removeClass('select_nav');
        $(this).addClass('select_nav');
        nav_on=$(this);

        $('#main_contents02 .contents02_box h3:visible').stop().animate({left:200,opacity:0});
        $('#main_contents02 .contents02_box p:visible').stop().animate({left:200,opacity:0});
        var num_nav=$('#main_contents02 .contents02_nav ul li a').index(this);
        $('#main_contents02 .contents02_box').eq(num_nav).find('h3').stop().animate({left:0, opacity:1},600)
        $('#main_contents02 .contents02_box').eq(num_nav).find('p').stop().delay(100).animate({left:0, opacity:1},600)

    })



    function moveContents(index){
        var willMoveLeft;
		var willMoveTop;

        if(index==0){
			willMoveTop=0;
		}else if(index==1){
			willMoveTop='-650px';
		}else if(index==2){
			willMoveTop='-1300px';
		}else if(index==3){
			willMoveTop='-1950px';
		}else if(index==4){
			willMoveTop='-2600px';
		}else{
			willMoveTop='-3250px';
		}

		$('#main_contents02 .visual').animate({top:willMoveTop},'slow');
    }

    $('#main_contents02 .contents02_nav ul li a').each(function(index){
		$(this).attr('data-index', index);
	}).click(function(){
		var index=$(this).attr('data-index');
		moveContents(index);
	});





});
