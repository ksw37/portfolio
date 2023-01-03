$(document).ready(function(){ /*ready function = 준비했을때, 리셋했을때, 새로고침했을때, 같은말*/

    // 순차적으로 opacity가 1로 바뀌어라
    $('.luck1').stop().animate({'opacity':1},1000,function(){ /*luck1번이 애니메이트(보여져라, 1초동안),(그리고 또 )작동해라*/
    $('.tea1').stop().animate({'opacity':1},800,function(){
    $('.tea2').stop().animate({'opacity':1},800,function(){
    $('.tea3').stop().animate({'opacity':1},800)
    })
    })
    })





    $('.search a').click(function(){

        // $('.search').addClass('on')   /*애드클래스에는 , 가 안됌*/

        $('.search').animate({'width':'160px'},800,function(){

            $('.search').find('input').stop().animate({'opacity':1},200)
        })
    });





    // 메뉴를 호버했을떄 sub_menu 가 보여라
    $('.gnb li').mouseenter(function(){
        let i = $(this).index()
        console.log(i)
        $('sub_menu>div').slideUp()
        $('.sub'+(i+1)).slideDown()

    });

    $('header').mouseleave(function(){

        $('.sub_menu>div').slideUp()
    })







    // 스크롤바가 일정거리만큼 이동했을때 promotion_img 와 promotion_txt 가 움직여라.
    // left:0 , right:0 으로 

    $(window).scroll(function(){

        let sc = $(this).scrollTop()/*현재 스크롤 탑의 위치를 sc라고 변수를 설정하겠다*/
        $('h1').text(sc) /*h1에다 보여라(text해라) sc값을 => 화면에서 스크롤값 보기 = 800 */

        if(sc>=800 && sc<1400){ /*만약sc가 800보다 크거나 같을때  그리고 1400보다 작을때*/
        // 애니메이트해라
        $('.promotion_img').stop().animate({'left':0},1800)
        $('.promotion_txt').stop().animate({'right':0},1800)
        }
        else{  /*그 외의 값일때*/
        $('.promotion_img').stop().animate({'left':'-100%'},1800)
        $('.promotion_txt').stop().animate({'right':'-100%'},1800)
        }

    })







})