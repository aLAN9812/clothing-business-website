const progress = document.getElementById("progress")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const circles = document.querySelectorAll(".circle")
const registersteps = document.querySelectorAll(".register")
const submit = document.getElementById("submit")

let currentActive = 1

let email, fname, lname, gender, dob, address, city, state, zip 

next.addEventListener("click", () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = 3
    }
    
    updateprogress()
    updateform()
})

prev.addEventListener("click", () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    updateprogress()
    updateform()
})

function getformdata() {
    email = document.getElementById("email").value
    fname = document.getElementById("fname").value
    lname = document.getElementById("lname").value
    gender = document.getElementById("gender").value
    dob = document.getElementById("dob").value
    address = document.getElementById("address").value
    city = document.getElementById("city").value
    state = document.getElementById("state").value
    zip = document.getElementById("zip").value
}

function updateprogress() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add("active")
        } else {
            circle.classList.remove("active")
        }
    })

    const actives = document.querySelectorAll(".active")

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%"

    if(currentActive === 1) {
        next.innerHTML = "Next"
        prev.disabled = true
        submit.classList.add("inactive")
    } else if(currentActive === circles.length){
        next.disabled = true
        submit.classList.remove("inactive")
    } else {
        next.innerHTML = "Next"
        prev.disabled = false
        next.disabled = false
        submit.classList.add("inactive")
    }
}

function updateform() {
    switch(currentActive) {
        case 1:
            registersteps.forEach((registerstep, idx) => {
                if(idx == 0) {
                    registerstep.classList.remove("inactive")
                    circles[0].classList.add("current")
                    circles[1].classList.remove("current")
                    circles[2].classList.remove("current")
                } else {
                    registerstep.classList.add("inactive")
                }
            })
            break
        case 2:
            registersteps.forEach((registerstep, idx) => {
                if(idx == 1) {
                    registerstep.classList.remove("inactive")
                    circles[0].classList.remove("current")
                    circles[1].classList.add("current")
                    circles[2].classList.remove("current")
                } else {
                    registerstep.classList.add("inactive")
                }
            })
            break
        case 3:
            registersteps.forEach((registerstep, idx) => {
                if(idx == 2) {
                    registerstep.classList.remove("inactive")
                    circles[0].classList.remove("current")
                    circles[1].classList.remove("current")
                    circles[2].classList.add("current")
                } else {
                    registerstep.classList.add("inactive")
                }
            })
            getformdata()
            document.getElementById("emailinput").innerHTML = email
            document.getElementById("fnameinput").innerHTML = fname
            document.getElementById("lnameinput").innerHTML = lname
            document.getElementById("genderinput").innerHTML = gender
            document.getElementById("dobinput").innerHTML = dob
            document.getElementById("addressinput").innerHTML = address
            document.getElementById("cityinput").innerHTML = city
            document.getElementById("stateinput").innerHTML = state
            document.getElementById("zipinput").innerHTML = zip
            break
    }
}