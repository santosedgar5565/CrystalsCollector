// $(".jewel1, .jewel2, .jewel3, .jewel4").click(function(e) {
//   console.log("Whatsapp");
//   e.preventdefault;
// });

var wins = 0;

$("#startButton").click(function() {
  var total = [];


  var randomNumber = Math.floor(Math.random() * 100);
  $("#randomNumber1").html(randomNumber);
  // console.log(randomNumber);

  var button1 = Math.floor(Math.random() * 10);
  // console.log(button1);

  var button2 = Math.floor(Math.random() * 10);
  // console.log(button2);

  var button3 = Math.floor(Math.random() * 10);
  // console.log(button3);

  var button4 = Math.floor(Math.random() * 10);
  // console.log(button4);

  // if ((button1 + button2 + button3 + button4) == randomNumber) {
  //   console.log("Numbers added up");
  // } else {
  //   console.log("Not yet");
  // }

  // if (button1 < 10 && button2 < 10 && button3 < 10 && button4 < 10) {
 $(".jewel1").click(function() {
   
   total.push(button1);
   sum= total.reduce(function (a, b) {return a + b;}, 0);
   console.log(sum);
   if (sum == randomNumber) {
     alert("You Win!!!");
     location.reload();

   
  
    //  location.reload();
   } else {
     if(sum > randomNumber) {
      alert("You Lose!!!!");
      location.reload();
 
    

      // location.reload();
     }
   }

   console.log(sum);
  //  var total = [];

   $(".scoreTotal").html(sum);
  //  for(i = 0; i < total.length; i++) {
     
  //  }
 });
  
 $(".jewel2").click(function() {
  total.push(button2);
  sum= total.reduce(function (a, b) {return a + b;}, 0);
   console.log(sum);
   if (sum == randomNumber) {
    alert("You Win!!!!");
      location.reload();
  } else {
    if(sum > randomNumber) {
      alert("You Lose!!!!");
      location.reload();
    }
  }
  $(".scoreTotal").html(sum);

});

$(".jewel3").click(function() {
  total.push(button3);
  sum= total.reduce(function (a, b) {return a + b;}, 0);
   console.log(sum);
   if (sum == randomNumber) {
    alert("You Win!!!!");
      location.reload();
  } else {
    if(sum > randomNumber) {
      alert("You Lose!!!!");
      location.reload();
    }
  }
  $(".scoreTotal").html(sum);

});

$(".jewel4").click(function() {
  total.push(button4);
  sum= total.reduce(function (a, b) {return a + b;}, 0);
  console.log(sum);
  if (sum == randomNumber) {
    alert("You Win!!!!");
      location.reload();
  } else {
    if(sum > randomNumber) {
      alert("You Lose!!!!");
      location.reload();
    }
  }
  $(".scoreTotal").html(sum);

});




});