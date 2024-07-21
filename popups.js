const btns = document.querySelectorAll(".btn");
const output = document.querySelector(".notifications");
const closeBtn = document.querySelector(".close-btn");

const message = document.createElement("div");
const success = document.createElement("div");
const danger = document.createElement("div");

notification = [
    message,success,danger
];

notifications.forEach(n=>{
    n.classList.add("notification");
});

message.classList.add("info");
success.classList.add("success");
danger.classList.add("danger");

message.innerHTML = '<div> <span class="material-symbols-outlined icon"> chat_bubble</span> <div> <h3>John Doe </h3> <p> Great, thanks a lot for the quick reply!</p> </div> <span class="material-symbols-outlined close-btn"> close </span> </div>';
btns.forEach(btn =>{
 btn.addEventListener("click",()=> {
    const id = btn.dataset.alert;
    const n = notifications[id].cloneNode(true);
    output.appendChild(n);
 });
});

window.addEventListener("animationend", e=>{
    
})