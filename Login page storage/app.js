let password = document.querySelector("#password")
let email = document.querySelector("#email")
function auth(){
    let data = {
        email: email.value,
        password: password.value
    }

        if(email.value && password.value){
            localStorage.setItem("data" , JSON.stringify(data))        
            window.location.href = "index2.html"
        }

        if (!email.value) email.style.borderColor = "red"
        if (!password.value) password.style.borderColor = "red"
}

let datas = JSON.parse(localStorage.getItem("data"))

if (datas){
    window.location.href = "index2.html"
}