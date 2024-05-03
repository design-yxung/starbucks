$(document).ready(()=>{
    // 메뉴 스크립트
    $('.menu').mouseover(function(){
        $(this).find('ul').stop().slideDown(300);
    }).mouseout(function(){
        $(this).find('ul').stop().slideUp(300);
    });

    // 스타벅스 페이지 // 슬라이드
    let slideImg=$('.visual>ul>li');
    let imgNum=slideImg.length;
    let imgWidth=slideImg.width();

    let currentNum=0;
    
    $('.visual>ul').append(slideImg.first().clone());
    
    setInterval(slideRight,3000)

    function slideRight(){
        currentNum++;
        let slideX=currentNum*imgWidth
        $('.visual>ul').animate({left:-slideX},300);
        if(currentNum==imgNum){
            setTimeout(slideRe,300);
        }
    };
    function slideRe(){
        $('.visual>ul').animate({left:0},0);
        currentNum=0;
    }

    // 텍스트 스크롤

    $('.textCon').scroll(function(){
        let textScroll=$('.textCon').scrollTop();
        console.log(textScroll)
        if(textScroll>0){
            $('.textCon .scroll').fadeOut(100);
        }else{$('.textCon .scroll').fadeIn(300);}
    })


})