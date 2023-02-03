let emojiAll = ["😃","😋","😂","😍","❤","🤷‍♂️","🧨","😡","🦾","🐵",
"🚗","🚩","💥","🕦","💕","✌","👭","👩‍🦼","🎁","🏀",
"🏏","⚔","💣","🍗","🌹","🌺","🌤","🌈","🏯","A"];


 const genrateBtn = document.getElementById("btn");
 document.getElementById("emoji").textContent = emojiAll[0];

 genrateBtn.addEventListener('click', function () {
    let output = emojiAll[Math.floor(Math.random() * emojiAll.length)];
    document.getElementById("emoji").textContent = output;
    
 })
 
