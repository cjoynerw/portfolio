function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    // var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation)
    }

    function ease(t, b, c, d) {
        t /= d /2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) -1) + b;
    }

    requestAnimationFrame(animation);
}
    
var section1 = document.querySelector('.home');
var section2 = document.querySelector('.projects');
var section3 = document.querySelector('.about');
var section4 = document.querySelector('.contact');
var section5 = document.querySelector('.a');

section1.addEventListener('click', function(){
    smoothScroll('.box1', 1000)
})

section2.addEventListener('click', function(){
    smoothScroll('.box2', 1000)
})

section3.addEventListener('click', function(){
    smoothScroll('.box3', 1000)
})

section4.addEventListener('click', function(){
    smoothScroll('.box4', 1000)
})

section5.addEventListener('click', function(){
    smoothScroll('.box1', 1000)
})