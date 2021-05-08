function getName() {
    var name = prompt("Adınız nedir ? ");
    document.querySelector("#myName").innerText = name;
}
 
function showTime() {
    var dayTime = document.getElementById("dayTime");

    let date = new Date();
    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();  

    let sessionDay = date.getDay();

     
        if (sessionDay == 1) {
            sessionDay = "Pazartesi";
          } else if (session == 2) {
            sessionDay = "Salı";
          } else if (session == 3) {
            sessionDay = "Çarşamba";
          } else if (session == 4) {
            sessionDay = "Perşembe";
          } else if (session == 5) {
            sessionDay = "Cuma";
          } else if (session == 6) {
            sessionDay = "Cumartesi";
          } else if (session == 7) {
            sessionDay = "Pazar";
          }
        

            hour = hour < 10 ? "0" + hour:hour;
            minute = minute < 10 ? "0" + minute:minute;
            second = minute < 10 ? "0" + second:second;

       
    if(hour>7 && hour<12) {
        dayTime.innerText = "Günaydın !"
    }
    else if(hour>12 && hour<16) {
        dayTime.innerText = "İyi Öğlenler !";
    }

    else if(hour>16 && hour<24) {
        dayTime.innerText = "İyi Akşamlar !";
    }

    else if(hour<07) {
        dayTime.innerText = "İyi Geceler !";
    }


    var clockTime =  hour + ":" + minute + ":" + second + " " + sessionDay;
    document.querySelector("#myClock").innerText = clockTime;
    document.querySelector("#myClock").textContent = clockTime;

    setTimeout(showTime, 1000);
    
}

getName();
showTime();