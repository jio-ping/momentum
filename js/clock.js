const clock = document.querySelector("h2#clock");
const todayDate = document.querySelector("h3#date")
const weekDay =["Sun","Mon","Tue","Wed","Thur","Fri","Sat"]

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0"); 
    clock.innerHTML = `${hours} : ${minutes} : ${seconds}`
} 


function getDay(){
    const today = new Date();
    const day = today.getDay()
    const date = String(today.getDate()).padStart(2,"0");
    //getMonth 0부터 시작 
    const month =String(today.getMonth()+1).padStart(2,"0");
    const year = today.getFullYear();
    todayDate.innerHTML = `${year}-${month}-${date} ${weekDay[day]}`

}

getDay()
getClock() //창 열자마자 한번실행 immediately
setInterval(getClock,1000); 
// Timeout: 해당 시간이 지난뒤 한 번만 실행


/*
const date = new Date();

date.getDate() // 오늘의 날짜
date.getDay(); //요일을 숫자로
date.getFulYear(); // 년도 2023
date.getHours(); // 지금의 시간
date.getMinutes() ; // 지금 분 
date.getSeconds(); 지금 초

*/