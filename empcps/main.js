const ver = "p1.2"
console.log(ver);

const version = document.getElementById("version")

version.textContent = "Version: " + ver


var score;
const duration = 5;
var start_time;
var ended = true
const defalut_zero = 0

const timer_txt = document.getElementById("timer")
const score_txt = document.getElementById("clicks")
const clicks_txt = document.getElementById("cps")
const begin_btn = document.getElementById("begin")
const click_area = document.getElementById("clickarea")
const reset_btn = document.getElementById("reset")

var show = function(element) {
    element.style.display = "inline"
}
var hide = function(element) {
    element.style.display = "none"
}

function start_game() {
    hide(begin_btn)
    hide(reset_btn)
    score = 0
    ended = false

    start_time = new Date().getTime();
    console.log(start_time);

    var timer_id = setInterval(function() {
        var total = (new Date().getTime() - start_time) / 1000
        
        if (total < duration) {
            timer_txt.textContent = total.toFixed(3)
            if ((score / total).toFixed(2) < 0) {
                clicks_txt.textContent = "0"
            } else {
                clicks_txt.textContent = (score / total).toFixed(2)
            }
        } else {
            ended = true
            clearInterval(timer_id)
            timer_txt.textContent = duration + ".000"
            end_game()
        }
    })
}

function end_game() {
    var clicks_by_seconds = (score / duration).toFixed(2);
    show(begin_btn)
    show(reset_btn)
    setTimeout(function() {
        alert("You made " + score + " clicks in " + duration +
        " seconds. It is a " + clicks_by_seconds + " clicks by second. Try again!")
    
    }, 10)
}


begin_btn.addEventListener("click", function(e) {
    start_game()
})

click_area.addEventListener("click", function(e) {
    if (!ended) {
        score++;
        score_txt.textContent = score
        console.log("clicked");
    }
})

reset_btn.addEventListener("click", function(e) {
    if (ended = true) {
        timer_txt.textContent = defalut_zero
        score_txt.textContent = defalut_zero
        clicks_txt.textContent = defalut_zero
    }
})
