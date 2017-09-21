

(function () {

    function timer(timeInSec) {

        let val = 0,
            $circle = $('.timer #bar'),
            r = $circle.attr('r'),
            c = Math.PI * (r * 2),
            currTime = timeInSec,
            $counter = $(".timer_left_time");

        if (val < 0) { val = 0; }
        if (val > 100) { cal = 100;}

        $circle.css("opacity", 1);

        let interval = setInterval(function () {
            
            let pct = ((100 - val) / 100) * c,
            minutes = Math.floor(currTime / 60);
            sec = currTime % 60 ;

            $circle.css({ strokeDashoffset: pct });

            $('.timer').attr('data-pct', val);

            if (val  >= 100) {
                clearInterval(interval);
                $counter.css("opacity", 0);     
            }

            val= val + (100 / timeInSec );
            currTime--;

            if(minutes < 10 ) minutes = `0${minutes}`;
            if(sec < 10 ) sec = `0${sec}`;

            $counter.html(`${minutes} min<span class="enter"></span>${sec} sek`);  

        }, 1000);
        

        
    }
    timer(120);


})();