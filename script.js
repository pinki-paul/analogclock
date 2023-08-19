const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");


function updateClock(){
    const currentTimeandDate = new Date();

    setTimeout(updateClock, 1000);      //proti second k paowar jnno set timeout method use krte hbe.

    const hour =   currentTimeandDate.getHours();
    const minute = currentTimeandDate.getMinutes();
    const second = currentTimeandDate.getSeconds();
     
    const hourDegree = (hour / 12) * 360;//total 12 ta hour hoi and total ghurbe 360deg.tai 12 diye hour hand k divide kre 360 diye multipy hbe
    hourEl.style.transform = `rotate(${hourDegree}deg)`; //dynamically kata k ghorano hlo.

    const minuteDegree = (minute / 60) * 360;//total 60 ta minute hoi and total ghurbe 360deg.tai 60 diye minute hand k divide kre 360 diye multipy hbe
    minuteEl.style.transform = `rotate(${minuteDegree}deg)`; //dynamically kata k ghorano hlo.

    const secondDegree = (second / 60) * 360;//total 60 ta second a 1 ta minute hoi and total ghurbe 360deg.tai 60 diye second hand k divide kre 360 diye multipy hbe
    secondEl.style.transform = `rotate(${secondDegree}deg)`; //dynamically kata k ghorano hlo.
};

updateClock();