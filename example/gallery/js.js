$(document).ready(function(){

    // container 안에 li를 클릭했을때 각 순번을 찾아라.

    $('.container li').click(function(){
    let i = $(this).index()    //디스=클릭한나자신
    console.log(i)

    // 변환받은 i 값을 gallery image 의 p 값에 부여해라
    // 변환받은 p값은 보여라
        $('#image p').eq(i).fadeIn('fast')  //fadeIn = 서서히보여라, fadeOut = 서서히 사라져라 / (속도=>천분의 일초쓰기, 빠르게, 느리게)
        $('#image p').fadeOut('slow') //fadeOut 서서히사라져라(속도)

    });
    //left를 클릭하면 일정거리만큼 container를 움직여라. 1

    // 레프트를 
    let a = 0;

    $('.left').click(function(){

        //레프트를 클릭할때마다 숫자가 1씩늘어나라 (=> a++;) 4  //a가 14보다 작을때=옆에 레프트를 클릭한 수가 중복이다 6
        if(a<14)a++;
        // 클릭햇을때 변수로 와이드값 찾아내자 2
        let wd = $('.container li').width()
        console.log(a)

        $('.container ul').css({'left':(-wd-1.7)*a}); //css에 트랜지션이 있으면 css로 아니면 애니메이트로 3  //레프트를 누를떄 컨테이너넓이의 값을 곱해줘라 5 ->1.7=css컨테이너의 마진값(빼주기)
        $('#image p').fadeOut('slow')
        $('#image p').eq(a).fadeIn('fast')

    });




    //right를 클릭하면 일정거리만큼 container를 움직여라.
    $('.right').click(function(){

        if(a>0)a--;
        console.log(a)
        let wd = $('.container li').width()
        $('.container ul').css({'left':(-wd)*a});
        $('#image p').fadeOut('slow')
        $('#image p').eq(a).fadeIn('fast')


    });


    // 자동으로 image p 가 순차적으로 보여라.

    // setInterval(함수,지연시간)

    let b = 0;
    setInterval(function(){
        if(b<5) b++;
        if(b==5)b=0; //만약 b가 5와 같다면 0으로 반환된다 = 무한루프
        console.log(b)

        $('#image p').fadeOut('slow')
        $('#image p').eq(b).fadeIn('fast')


    },2000) //setInterval(function(){},2000)2초에 한번씩 보여라.



    


})