(() => {
    $('#profile-ripple').ripples({
        resolutions: 512,
        dropRadius: 10
    });

    // Bars
    const bars = document.querySelectorAll('.progress-bar');
    
    bars.forEach(el => {
      el.querySelector('.tooltip').innerHTML = el.dataset.percentage + '%';
      el.style.width =  el.dataset.percentage + '%';
    });

    // Counters

    const counters = document.querySelectorAll('.counter');

    runCounter = () => {
        counters.forEach(el => {
            el.innerHTML = 0;
            let target = +el.dataset.count;
            console.log(target);
        })
    };

    runCounter();
})();
