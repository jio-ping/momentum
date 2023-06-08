const quotes = [
    {
        quote: "평범하다 해도 반짝이지 않는다 해도 \n내가 써 내려가기에 소중한 나의 이야기",
        author:"인사이드 윌리엄"
    },
    {
        quote:"잘 해낼거야. \n 지금껏 그래왔듯이",
        author:"은하철도의 밤"
    },
    {
        quote:"넌 나의 가장 완벽한 글, 넌 나의 오지 않은 내일, 넌 내가 아직 꾸지 않은 꿈",
        author:"브론테"
    },
    {
        quote:"새로 배운 것들이 날 계속 반짝이게 해 \n나의 두 손으로 온전히 껴안아 보는 나의 새 나의 삶",
        author:"라흐헤스트"
    },
    {
        quote:"역경은 진리에 도달하는 첫 번째 길이다.",
        author:"더 테일 에이프릴 풀스 "
    },
    {
        quote:"할 수 있지? 그럼!",
        author:"시데레우스"
    },
    {
        quote:"수많은 우주들 가운데 랜덤하게 선택된 나의 우주.",
        author:"이토록 보통의"
    },
    {
        quote:"방랑의 길 위에서 만난 모든 것들이\n 나의 안에 새겨져 새로운 것들이 보여",
        author:"나르치스와 골드문트"
    },
    {
        quote:"누구나 할 수 있는 성공보단 역사에 하나뿐인 실패가 낫지",
        author:"디아길레프"
    },
    {
        quote:"해피엔딩이 아니면 어때\n먼 길을 빙돌아 다시 시작하면 되잖아",
        author:"무인도 탈출기"
    },
    {
        quote:"며칠 밤을 꼬박 새워서 마침내 완성했을 때 심장이 터질 것 같았어.\n환희. 희열.\n가슴이 벅차서 잠들지 않아도 꿈을 꾸는 기분이었어.",
        author:"랭보"
    },
    
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child ");

//Math.random() 사용하면 0~1 사이의 랜덤한 수가 나와
//Math.ceil() >> 다올려
//Math.floor()>>다 내려

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];


quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;

function openYoutube(){
    window.open(`https://www.youtube.com/results?search_query=${todayQuote.author}`)
}
author.addEventListener("click",openYoutube)