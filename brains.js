(function(){

  var quotes = [
    "I am confident in my abilities, and my work quality shows it.",
    "I am capable, worthy, and supported.",
    "This challenge is one that can be overcome, one step at a time.",
    "I do not fear challenges, I face them head on.",
    "I am in charge of my emotions, and choose how to respond to situations.",
    "Computers are stupid. I give them power, life, and meaning.",
    "I am amazing. I am powerful. I am strong.",
    "This code will not defeat me. I've got this.",
    "This is just a small portion of my day. It'll get better from here.",
    "I am worthy of success. I invite success into my life and work.",
    "I am deserving of all the happiness life has to offer.",
    "There's nothing that can stop my flow today. Time to win.",
    "My voice is valuable. My voice is useful. My voice is powerful.",
    "I will succeed on this task and all others put before me.",
    "I find beauty and value in each moment.",
    "Tabs are better than spaces."

    ];

  var images = [
    "1.gif",
    "2.gif",
    "3.gif",
    "4.gif",
    "5.gif",
    "6.gif",
    "7.gif",
    "8.gif",
    "9.gif",
    "breathe.gif",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg"
  ];

  function chooseOne(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  window.onload = function() {
    var randomImage = chooseOne(images);
    var randomQuote = chooseOne(quotes);

    document.getElementById('background-image').style.backgroundImage = 'url("img/'+ randomImage +'")';
    document.getElementById('quote').innerHTML = randomQuote;

    document.getElementById('quote').className = 'move';
  };



// Clock

var d = new Date();
var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

var date = document.getElementById("date");
var time = document.getElementById("time");

function getDate() {
    date.innerHTML = monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
}

function timer() {
    setTimeout(timer, 1000);
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var ampm = hours <= 11 ? 'am' : 'pm';
    var strTime = [hours % 12,
                  (minutes < 10 ? "0" + minutes : minutes)
                  ].join(':') + ampm;
    time.innerHTML = strTime;
    setTimeout(timer, 1000);
}

getDate();
timer();

})();
