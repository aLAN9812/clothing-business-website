const loadText = document.querySelector(".loading-text")
const bg = document.querySelector(".bg")

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
    load+=2

    if(load > 102) {
        clearInterval(int)
        alertAndGoToHome()
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}

function alertAndGoToHome() {
    if(!alert("Register account sucessfully.")) {
        window.open("homepage.html", "_self")
    } 
}