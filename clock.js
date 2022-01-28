
let userName = prompt("Kullanıcı Adınızı Giriniz: ");
let title = document.querySelector("#myName")

if (userName) {
    title.innerHTML =  ` ${userName} `
    startTime()

}
else{
    alert ("İsminizi girmediniz..")
}
function startTime() {
    const today = new Date();
    let hours = today.getHours(); 
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    //document.getElementById('myClock').innerHTML =hours + ":" + minutes + ":" + seconds;

    const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
  //  const d = new Date();
    let day = weekday[today.getDay()];
    document.getElementById('myClock').innerHTML =hours + ":" + minutes + ":" + seconds + " " + day;
    setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

