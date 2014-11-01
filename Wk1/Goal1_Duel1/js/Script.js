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
    //naming the players
   var playerOne = prompt("Player One please type in your name.");
   var playerTwo = prompt("Player Two please type in your name.");
   
   //player damage
   var playerOneDamage = 20;
   var playerTwoDamage = 20;
   
   //player health
   var playerOneHealth = 100;
   var playerTwoHealth = 100;
   
   //Rounds
   var round = 1;
   
   function fight(){
       console.log("In the Fight Function.");
       
       alert(playerOne+":"+playerOneHealth+" *START* "+playerTwo+":"+playerTwoHealth);
       
       for (var i=0; i < 10; i++){
           
           // Damage Generating
           var minDamageOne = playerOneDamage * .5;
           var minDamageTwo = playerTwoDamage * .5;
           var f1 = Math.floor(Math.random()*(playerOneDamage-minDamageOne)+minDamageOne);
           var f2 = Math.floor(Math.random()*(playerTwoDamage-minDamageTwo)+minDamageTwo);
           
           //console.log(f1);
           //console.log(f2);
           
           //Dealing Damaging
           playerOneHealth-=f1;
           playerTwoHealth-=f2;
           
           console.log(playerOne+":"+playerOneHealth+" *START* "+playerTwo+":"+playerTwoHealth);
           
           winnerCheck();
           
       };
   };
   
   function winnerCheck(){
       var results = "No Winner.";
       if (playerOneHealth<1 && playerTwoHealth<1) {
           
       }
   };

    /* Starting Program Here */
fight();
    
}


)();

