$(document).ready(function(){

    // 실행문

    // 시간정보찾기

    let now = new Date();
    let hr = now.getHours() /*현재시간에서 시간을 가져오겠다*/
    let min = now.getMinutes();
    let sec = now.getSeconds();
    // $('h1').text(hr) 확인해보기

    /* $('.phone span').eq(0).text(hr);  폰의 스팬 첫번째에 hr를 텍스트해라
    $('.phone span').eq(1).text(min);
    $('.phone span').eq(2).text(sec);*/


    setInterval(function(){
    let now = new Date();
    let hr = now.getHours() ;
    let min = now.getMinutes();
    let sec = now.getSeconds();

    let hNum;
    let nNum;
    let sNum;   //(1)나 sNum라는 변수를 설정할건데 아직 정의는 하지않을게

    if(sec>=10){ //(2)만약에 sec이 10보다 크거나 같으면

        sNum=sec //(3)sNum에다가 sec를 대입시키고
    }else{ //(4)그렇지 않다면
        sNum='0' +sec //(5)sNum에다 문자0을 더한 sec으로 변경을 해라
    };


    if(min>=10){
        mNum = min
    }else{
        mNum = '0'+min
    };

    if(hr>=10){
        hNum = hr
    }else{
        hNum = '0'+hr
    };



    // $('.phone span').eq(0).text(hr); 
    $('.phone span').eq(0).text(hNum); 
    // $('.phone span').eq(1).text(min);
    $('.phone span').eq(1).text(mNum);
    // $('.phone span').eq(2).text(sec); 
    $('.phone span').eq(2).text(sNum); //(6) 그 아이를 출력해라


    // // 18시일때 자동으로 나이트로 바뀌게하는것
    if(hr>=18 && hr<24){ //hr이 18보다 크거나 같고 그리고 24보다 작을때 라면
        $('.wrap').addClass('night') //wrap의 클래스인 night을 더해줘라
    } //------>인데 18이라는 숫자로 오류가 남 그래서 숫자를 바꿔서 또 설정해줘야함 

    if(hr>=24 && hr<6){
        $('.wrap').addClass('morning')
    }

    if(hr>=6 && hr<12){
        $('.wrap').addClass('afternoon')
    }

    if(hr>=12 && hr<18){
        $('.wrap').addClass('evening')
    }
    




    },1000);  /*1초에 한번씩 안에 있는 일이 일어나라*/



    // //배경화면전환 =>afternoon누르면 style시트의 on값으로 변경=>afternoon이미지로 변경, index에도 on 더해줘야함
    // $('nav li').eq(1).click(function(){ //nav의 2번째 li를 클릭했을때 작동해라
    //     $('#wrap').addClass('on') //wrap에 클래스 on을 더해줘라
    // })
    
    $('nav li').click(function(){ //(1)nav의 li를 클릭했을때 작동해라
        let txt = $(this).text() //(2)  지금 이것(마우스)의 글씨를 txt라는 변수로 설정하겠다
        console.log(txt) //(3)콘솔에 txt를 표시해라

        $('#wrap').removeClass() //(5)전체 배경에 더한 값을 빼줘라
        //클래스에 설정을 안해도 되는이유=>인덱스에서 클래스값을 설정하지 않았기때문=>아이디값으로 설정했기때문=>이런경우 꼭 아이디값지정해주는게 중요
        $('#wrap').addClass(txt) //(4)전체배경에 txt를 더해줘라 
    })





})