//

let player = document.querySelector( ".player" );
let player1Input = document.querySelector( ".player_1_input" );
let player1Btn = document.querySelector( ".player_1_btn" );
let player1Err = document.querySelector( ".player_1_err" );

let player2Input = document.querySelector( ".player_2_input" );
let player2Btn = document.querySelector( ".player_2_btn" );

let attamp = 0;



player1Btn.addEventListener( "click", function () {

  if ( Boolean( player1Input.value - 10 ) &&  player1Input.value != "") {
    if ( player1Input.value > 10) {
      player1Err.innerHTML="Give a number less than 10";
    } else {
      player.innerHTML = "player 2";
      player1Input.style.display = "none";
      player1Btn.style.display = "none";

      player2Input.style.display = "inline-block";
      player2Btn.style.display = "inline-block";

      
    }
    
  } else {
    player1Err.innerHTML="Give a right number ";
  }
} );

player2Btn.addEventListener( "click", function () {
  attamp++;

  let playerOneNum = player1Input.value;
  let playerTwoNum = player2Input.value;
  
  if ( attamp <= 5 ) {
    
    if (playerOneNum == playerTwoNum) {
      console.log( " Player 2 is winner " );
      
    } else if ( attamp == 5 && playerOneNum != playerTwoNum ) {
      console.log("player 1 winner");
      
    }
  }


  
})





































