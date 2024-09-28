var countDownDate = new Date("june 21, 2025 00:00:00").getTime();

var x = setInterval(function() {
     var now = new Date().getTime();
     var distance = countDownDate - now;
     
     const days = document.getElementById("days");
     const hours = document.getElementById("hours");
     const minutes = document.getElementById("minutes");
     const seconds = document.getElementById("seconds");

     var d = Math.floor(distance / (1000 * 60 * 60 * 24));
     var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     var s = Math.floor((distance % (1000 * 60)) / 1000);

     days.innerHTML = d < 10 ? '0' + d : d;
     hours.innerHTML = h < 10 ? '0' + h : h;
     minutes.innerHTML = m < 10 ? '0' + m : m;
     seconds.innerHTML = s < 10 ? '0' + s : s; 

     if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML =  "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
        
      }
    }, 1000);
