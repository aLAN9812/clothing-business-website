function login() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    if(email != "" && password != "" && email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        if(!alert("Login Sucessfully")) {
            window.open("hometpage.html", "_self")
        }
    } else {
        alert("Please enter a valid email and password.")
    }
}

function goToCreateaccount() {
    window.open("createaccountpage.html", "_self")
}