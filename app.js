let emojiAll = ["๐","๐","๐","๐","โค","๐คทโโ๏ธ","๐งจ","๐ก","๐ฆพ","๐ต",
"๐","๐ฉ","๐ฅ","๐ฆ","๐","โ","๐ญ","๐ฉโ๐ฆผ","๐","๐",
"๐","โ","๐ฃ","๐","๐น","๐บ","๐ค","๐","๐ฏ","A"];


 const genrateBtn = document.getElementById("btn");
 document.getElementById("emoji").textContent = emojiAll[0];

 genrateBtn.addEventListener('click', function () {
    let output = emojiAll[Math.floor(Math.random() * emojiAll.length)];
    document.getElementById("emoji").textContent = output;
    
 })
 
