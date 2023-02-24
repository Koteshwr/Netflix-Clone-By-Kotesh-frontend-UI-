let mainpage = document.getElementById("mainpage");
let loginpage = document.getElementById("loginpage");
let sbtn = document.getElementById("signinbtn");
let plus = document.getElementById("plus");
let git = document.getElementById("giticon")
let qns = Array.from(document.getElementsByClassName("faq-card-ans"))
let ans = Array.from(document.getElementsByClassName("faq-card-qn"))
var qnno;

for (i in qns) {
    qns[i].style.visibility = "hidden"
    qns[i].style.height = "0px"
}
let reveal = (j) => {
    if (qns[j].style.visibility == "hidden") {
        qns[j].style.visibility = "visible";
        qns[j].style.height = "auto"
    }
    else {
    qns[j].style.height = "0px"
    qns[j].style.visibility = "hidden";
    }
}
let closeother = (i) => {
    for (j in qns) {
        if (j != i) {
    qns[j].style.height = "0px"
    qns[j].style.visibility = "hidden"

        }
    }
}

ans.forEach(element => {
    element.addEventListener('click', () => {
        reveal(element.id)
        closeother(element.id)
    })
});


function openSigninPage() {
    sbtn.style.display = "none"
    mainpage.style.display = "none"
    loginpage.style.display = "contents"
}



git.addEventListener("click",()=>{
    window.open("https://github.com/Koteshwr/Netflix-Clone-By-Kotesh-frontend-UI-.git");
})

let main = document.getElementById("main");
var l = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (i in l) {
    let el = document.createElement("div");
    el.classList.add("box");
    main.appendChild(el);
};
