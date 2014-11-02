/* 
Jacob R. Minotti
Nov. 1st, 2014
Wk1. Assignment
 */

/*
 * Just testing files
alert ("Derp");
*/

(function(){
    console.log ("Fight!");
    //Players are prompted for a username of their choice.
   var playerOne = prompt("Player One please type in your username.");
   var playerTwo = prompt("Player Two please type in your username.");
   
   //player damage
   var playerOneDamage = 20;
   var playerTwoDamage = 20;
   
   //player's max health at start of the game
   var playerOneHealth = 100;
   var playerTwoHealth = 100;
   
   //Rounds
   var round = 0;
   
   function fight(){
       console.log("In the Fight Function.");
       //tells the player information about each other and what round the game is on.
       alert(playerOne+":"+playerOneHealth+" *START* "+playerTwo+":"+playerTwoHealth);
       
       for (var i=0; i < 10; i++){
           
           // Computer generates a number inbetween the minimum and maximum damage a player can take for each player
           var minDamageOne = playerOneDamage * .5;
           var minDamageTwo = playerTwoDamage * .5;
           var f1 = Math.floor(Math.random()*(playerOneDamage-minDamageOne)+minDamageOne);
           var f2 = Math.floor(Math.random()*(playerTwoDamage-minDamageTwo)+minDamageTwo);
           
           //console.log(f1);
           //console.log(f2);
           
           //Players get dealt damage based off of the numbers that the computer has generated for them.
           playerOneHealth-=f1;
           playerTwoHealth-=f2;
           
           console.log(playerOne+":"+playerOneHealth+" *START* "+playerTwo+":"+playerTwoHealth);
           
          var results = winnerCheck();
          console.log(results);
          
          // Looking for winner and stop the program when a winner can be found or if there is no winner after the end of the ten rounds. 
          if (results === "No Winner"){
              round++;
              alert(playerOne+":"+playerOneHealth+" *ROUND "+round+" OVER*"+playerTwo+":"+playerTwoHealth);
          }else{
              alert(results);
              break;
          }
           
       };
   };
   /*Look for a winner if there isn't a winner ignore it until the end of the tenth round.
    * If Player one's & two's Health both reach =>0 then tell the players they both died.
    * If either player one's or player two's health hit zero or below then print out the victor of the game.
   */
   function winnerCheck(){
       console.log("In Winner check function");
       var result = "No Winner";
       if (playerOneHealth<1 && playerTwoHealth<1) {
           result = "You Both Die.";
       }else if(playerOneHealth<1){
       result =playerTwo+ " Wins!";
    
       }
     else if(playerTwoHealth<1){
       result =playerOne+ " Wins!"; }
   
   return result;
       };
  

    /* Starting Program Here */
fight();
    
    }


)();

