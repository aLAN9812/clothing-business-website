const icon = document.getElementById("icon")
const links = document.getElementById("links")
const hiddenaccount = document.getElementById("hiddenaccount")

icon.addEventListener("click", () => {
    links.classList.toggle("open")
})