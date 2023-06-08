
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
// 관용으로 string만 있는 변수를 대문자로 ㅛ시해
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"
        
//localStorage: 브라우저에 저장할 수 있게 해줌 localStorage.setItem("myCat", "tom");
// localStorage.setItem("username","peter");
// localStroage.getItem("username"); 없으면 null임
// localStorage.removeItem("username");



function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(username);
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
    toDoForm.classList.remove(HIDDEN_CLASSNAME)
    toDoList.classList.remove(HIDDEN_CLASSNAME)
}

function paintGreetings(username){
    greeting.innerText =`${username}, Have a good day !`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
//show the form
loginForm.classList.remove(HIDDEN_CLASSNAME)
loginForm.addEventListener("submit", onLoginSubmit);

}else{
//show the greetings
paintGreetings(savedUsername)

}
