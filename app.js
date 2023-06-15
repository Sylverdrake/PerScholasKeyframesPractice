const hide = () => {
    let pcount = document.querySelector('.playerCount')
    pcount.classList.toggle('hide')
}

const hidebanner = () => {
    let banner = document.querySelector('.banner')
    banner.classList.toggle('hide')
}

let text1 = true

let target = document.querySelector('.worldSelect')

const changeText = () => {
    if (text1 === true){
        text1 = false
        target.innerHTML = "Manually select world"
    }else {
        text1 = true
        target.innerHTML = "Trimming armor is impossible."
    }
}

const login = () => {
    alert("Please insert login details.")
}
const download = () => {
    alert("This should make you download a program. But all it does is say a thing.")
}

