$(document).ready(function(){


    // body 높이값과 section의 가로값 통일시키기 
    // article갯수를 구하고(=size)  article의 가로값을 구해서 두개를 곱한값을 section의 가로값으로 변환
    let a = $('article').size();
    let aWd= $('article').width()

    $('section').width((a*(aWd+20))+600);
    $('body').height(a*(aWd+20));
    $('html,body').scrollTop(a*(aWd+20))




    $(window).resize(function(){
    //  화면이 리사이즈 될때마다, body 높이값과 section의 가로값 통일시키기 

    // article갯수를 구하고  article의 가로값을 구해서 두개를 곱한값을 section의 가로값으로 변환
    let a = $('article').size();
    let aWd= $('article').width()

    $('section').width((a*(aWd+20))+600);
    $('body').height(a*(aWd+20));


    })





    // 화면에서 스크롤바가 움직일때 
    //상단의 위치값을 찾아라.

    $(window).scroll(function(){
        let sc = $(window).scrollTop();
        $('h1').text(sc);
        $('section').stop().animate({'left':-sc},600)



    });


    $('.gnb li').click(function(){

        let i = $(this).index();

    $('html,body').scrollTop(1000*i)
    })




    //article 을 클릭했을때 내가 클릭한 그아이에게 addClass를 해라.
    //모든 article에겐 removeClass를 먼저 해라.

    $('article h2').click(function(e){
        e.preventDefault(); //기존에 있었던 a의 이벤트값을 없애라 -> a를 클릭했을때 값을 설정해줘야하는데 a의 링크값이 있기때문에 링크로 가니까 없애줌


        //클릭한 나의 부모자의 순번을 찾아라.
        let id = $(this).parent().index()
        //클릭한 나의 자손인 a 의 속성값 중의 href를 불러라(=attr=태그안에있는하나하나의속성명=>href)
        let src = $(this).children('a').attr('href') 
        // alert(src) // 잘 불러오나 알림창으로 확인하기
        $('article p img').attr({'src':''})


        //클릭한 나의형제인 'p'의 자손인 'img' 안에 속성명 src 안에 대입해라.
        $(this).siblings('p').children('img').attr({'src':src})//따옴표안쓴애는 변수

        $('article').removeClass('on')
        $(this).parent().addClass('on')
        $('html,body').scrollTop(200*id)

    });

    //span을 클릭했을때 article 에 removeClass를 해라
    $('article span').click(function(){

        // $('article').removeClass('on') //아티클의 자식인 스팬에게 아티클을 닫으라고 하면 명령어가 전달되지 않음
        $(this).parent().removeClass('on') //그래서 parent라는 명령 값을 써서 명령함
    })
    







})



















//(---1---) $(document).ready(function(){

    

//     // 화면에서 스크롤바가 움직일때 상단의 위치값을 찾아라

//     $(window).scroll(function(){ //window=this
//         let sc = $(window).scrollTop();
//         $('h1').text(sc); //구한 스크롤값을 h1자리에 써보여라
//         $('section').stop().animate({'left':-sc},600)//section에 animate를 걸어주겠다 왼쪽을 기준으로 스크롤했을때 -(반대)로 가라 0.6초안에 그리고 오류날수 있으니 멈춰라

//     })
// })


//구해라 = 변수