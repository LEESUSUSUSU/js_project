// document.addEventListener('DOMContentLoaded'()=> {

//     const boxs = document.querySelector('.main1')
//     const bt1 = document.querySelector('#bt1')

// //배열
//  let arr = [0,0,0,0,0,0,0,0,1];  // 0 = felse 1=true
// //클릭확인



// let 

// //하트개수

// //눌러진 순서

// //폭탄 섞기 버튼 (flag)

// // flag = false    true 일때 실행이 되지 않도록 하기 위해서 사용.
// // for


// //

   
//     for(let box of boxs)
//     //box.innerHrml = box.getAttribute('id').slice(-1);
//      box.innerHrml = box.getAttribute('id').replace('box', '');
       
//      //let n = parseInt(box.textContent);
//      //console.log('n=',n);

//      //박스마다 클릭 이벤트 달아주기  일반화 시켜줘야 함.

//      box.addEventListener('chlick',()=>{
//         //박스 번호 들고 오기

//         if(
//             //선택 항목 추가
//         )
//         //기존에 하트나 폭탄이 들어있는 경우

//         //폭탄 하트 구분

//         if(arr[n-1]==0){
//             box.innerHrml = '<img src = >;'
//         } else{
//             //폭탄 
            
//         }

//      })

// })

document.addEventListener('DOMContentLoaded', () => {
    const boxs = document.querySelectorAll('.box');
    const bt1 = document.querySelector('#bt1');

    //초기 배열 : 1이 폭탄 위치
    let arr = [0, 0, 0, 0, 0, 0, 0, 0, 1];
    //클릭확인
    let flag = true;
    //하트개수
    let cnt = 0;
    //눌러진 순서
    let selarr = [];

    //폭탄 섞기 버튼
    bt1.addEventListener('click', () => {
        if (flag) {
            arr.sort(() => Math.random() - 0.5);
            console.log(arr);
            flag = false;
            cnt = 0;
            selarr = [];
            document.querySelector('h2').innerHTML = '' ;
            for (let box of boxs) {
                box.innerHTML = box.getAttribute('id').replace('box', '');
            }
        }
    });

    //div박스 제어
    for (let box of boxs) {
        //박스 번호 넣기
        //box.innerHTML = box.getAttribute('id').slice(-1) ;
        box.innerHTML = box.getAttribute('id').replace('box', '');

        //박스 클릭이벤트 처리
        box.addEventListener('click', () => {
            //let n = parseInt(box.getAttribute('id').replace('box', ''));
            let n = parseInt(box.textContent);

            //기존에 하트나 폭탄이 들어있는 경우
            if (isNaN(n)) return ;

            //폭탄이 눌러지지 않은 경우
            if (!flag) {
                //선택 항목 추가
                selarr.push(n) ;
                console.log('n=', n, 'selarr=' , selarr);
                cnt++;
                console.log("cnt=", cnt)

                //폭탄 하트 구분
                if (arr[n - 1] == 0) {
                    //하트
                    box.innerHTML = '<img src="./images/hart.png">';
                    if (cnt == 8) {
                        flag = true;
                        document.querySelector('h2').innerHTML = '성공!!!' ;

                        let lastArr = [1,2,3,4,5,6,7,8,9].filter((item)=> !selarr.includes(item))
                        console.log(lastArr[0])
                        boxs[lastArr[0]-1].innerHTML = '<img src="./images/hart.png">';
                    }

                }
                else {
                    //폭탄
                    box.innerHTML = '<img src="./images/boom.png">';
                    flag = true;
                    document.querySelector('h2').innerHTML = '실패!!!' ;
                }
            }
        });
    }

});