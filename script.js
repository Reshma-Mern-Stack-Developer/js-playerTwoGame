
let counter = 0;
let heading= document.querySelector(".counter")
function counterUp () {
  counter++
  heading.innerHTML = counter;
  if ( counter == heading.dataset.number ) {
    clearInterval(countStop)
  }
}

let countStop =setInterval( () => {
  counterUp()
}, heading.dataset.time );