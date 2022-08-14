let inputValue = document.querySelector( ".inputValue" );
let button = document.querySelector( "button" );
let ul = document.querySelector( "ul" );

button.addEventListener( "click", function () {
  ul.innerHTML=""
  for ( i = 1; i <= 10; i++ ) {
  
    ul.innerHTML+=`<li>${inputValue.value}  x ${i}  =  ${inputValue.value*i}</li>`
  console.log(inputValue.value + " x " + i + " = "+ inputValue.value*i);
  }
  inputValue.value=""
})






