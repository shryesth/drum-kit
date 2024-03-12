// document.querySelector(".w").addEventListener("click", handleClick)
// document.querySelector(".a").addEventListener("click", handleClick)
// document.querySelector(".s").addEventListener("click", handleClick)
// document.querySelector(".d").addEventListener("click", handleClick)
// document.querySelector(".j").addEventListener("click", handleClick)
// document.querySelector(".k").addEventListener("click", handleClick)
// document.querySelector(".l").addEventListener("click", handleClick)

var drum = document.getElementsByClassName("drum")

for (var i = 0; i < drum.length; i++) {
    drum[i].addEventListener("click", function () {
        var button = this.innerHTML
        makeSound(button)
        buttonAnimation(button)
    })
}

document.addEventListener("keydown", function (event) {
    makeSound(event.key)
    buttonAnimation(event.key)
})

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3")
            tom1.play()
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3")
            tom2.play()
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3")
            tom3.play()
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3")
            tom4.play()
            break;
        case "j":
            var snare = new Audio("./sounds/snare.mp3")
            snare.play()
            break;
        case "k":
            var crash = new Audio("./sounds/crash.mp3")
            crash.play()
            break;
        case "l":
            var kick_bass = new Audio("./sounds/kick-bass.mp3")
            kick_bass.play()
            break;
        default:
            console.log(button)
            break;
    }
}

function buttonAnimation(currentKey) {
    var active = document.querySelector("." + currentKey)
    active.classList.add("pressed")
    setTimeout(function () { active.classList.remove("pressed") }, 100)

}

function handleClick() {
    this.style.color = "white"
    // this.setAttribute('style','color:green')
}





