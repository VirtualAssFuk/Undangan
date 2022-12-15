    //set date yang akan di countdown
    var countDownDate = new Date("dec 26, 2022 11:00:00").getTime();


    //update date setiap detik
    var x = setInterval(function() {
        var now = new Date().getTime()
    
        //tentukan jarak
        var distance = countDownDate - now;
    
    
        var days = Math.floor(distance / (1000 * 60 * 60 * 24))
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        var seconds = Math.floor((distance % (1000 * 60)) / 1000)
    
        //log
        document.getElementById("hari").innerHTML = days;
        document.getElementById("jam").innerHTML = hours;
        document.getElementById("menit").innerHTML = minutes;
        document.getElementById("detik").innerHTML = seconds;
    
        if (distance < 0) {
            clearInterval(x)
            document.getElementById("hari").innerHTML = 0;
            document.getElementById("jam").innerHTML = 0;
            document.getElementById("menit").innerHTML = 0;
            document.getElementById("detik").innerHTML = 0;
        }
    
    }, 1000)