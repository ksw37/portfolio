$(document).ready(function(){

    // 제이쿼리선택자는 $(CSS표기방법)으로 선택함
    
    // addEventLisner의 경우 이벤트와 함수의 조합으로 표현



    
    // $('#gnb li:nth-child(3)').click(function(){ //gnb li의 3번째것을 클릭하는 펑션(작동)했을때 (순서)↓
    
    // // 모든 section의 div의 클래스명의 on 값을 지워라.(2)
    //     $('section>div').removeClass('on');

    //     // section의 div 중 3번째 아이에게 클래스명에 on 값을 더해주어라.(1)
    //     $('section>div:nth-child(3)').addClass('on');
    //     //그리고 nav의 on 값의 클래스를지워라(3)
    //     $('nav').removeClass('on');
    //     //그리고 section의 on 값의 클래스를지워라(4)
    //     $('section').removeClass('on');
    //     //그리고 버튼메뉴를 서서히 나타나게해라(5)
    //     $('.btnMenu').fadeIn()
    
    // })
    
    // $('#gnb li:nth-child(1)').click(function(){
    
    //     // 모든 section의 div의 클래스명의 on 값을 지워라.
    //         $('section>div').removeClass('on');
    //         // section의 div 중 1번째 아이에게 클래스명에 on 값을 더해주어라.
    //         $('section>div:nth-child(1)').addClass('on');
    //         $('nav').removeClass('on');
    //         $('section').removeClass('on');
    //         $('.btnMenu').fadeIn()
    //     })
    
    //     $('#gnb li:nth-child(2)').click(function(){
    
    //         // 모든 section의 div의 클래스명의 on 값을 지워라.
    //             $('section>div').removeClass('on');
    //             // section의 div 중 2번째 아이에게 클래스명에 on 값을 더해주어라.
    //             $('section>div:nth-child(2)').addClass('on');
    //             $('nav').removeClass('on');
    //             $('section').removeClass('on');
    //             $('.btnMenu').fadeIn()
    
    
            
    //         })
            

    // -----------------위의 함수 축약하기------------------//
    $('#gnb li').click(function(){

        let i = $(this).index()
        $('section>div').removeClass('on')
        $('section>div').eq(i).addClass('on');
        $('nav').removeClass('on');
        $('section').removeClass('on');
        $('.btnMenu').fadeIn()

    })




        // btn 을 클릭했을때 nav 가 왼쪽 기준으로 오른쪽이 열리고
        // section은 오른쪽을 기준으로 왼쪽이 열린다.
    
        $('.btnMenu').click(function(){
    
            // $('nav').css({'transform':'rotateY(15deg)'});
            // $('section').css({'transform':'rotateY(-10deg)'});
    
            $('nav').addClass('on');
            $('section').addClass('on');
            $(this).fadeOut() //이것(클릭하는것=btnmenu을 서서히 사라지게해라)
        })
    
    
    
    })



