let h1 = document.querySelector('h1')
let btn = document.querySelector('button')
let bar = document.querySelector(".inner")

let grow = 0
let timeC = 10 + Math.floor(Math.random()*20)

btn.addEventListener("click", () => {
    btn.style.pointerEvents = 'none'
    bar.style.animation = `clr ${timeC*100}ms ease-in-out forwards`;
   let i = setInterval(() => {
        grow++;
        h1.textContent = `${grow + '%'}`
        bar.style.width = `${grow}%`
    }, timeC)

    setTimeout(() => {
        clearInterval(i);
        btn.textContent = `downloaded`
        btn.style.opacity = 0.5
        btn.style.backgroundColor = 'grey'
    },timeC*100)
    setTimeout(() => {
         alert(`the file downloaded in ${(timeC/10).toFixed(2)} seconds`)
    },timeC*100 + 100)
})
