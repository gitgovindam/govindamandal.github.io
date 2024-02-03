(() => {
    $('#profile-ripple').ripples({
        resolutions: 512,
        dropRadius: 15
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
        counters.forEach(counter => {
            counter.innerHTML = 0;
            let target = +counter.dataset.count;
            
            let step = target/100;
            let countIt = function() {
                let displayedCount = +counter.innerHTML;

                if (displayedCount < target) {
                    counter.innerHTML = displayedCount + Math.ceil(step);                    
                    setInterval(() => {
                        countIt()
                    }, 10);
                } else {
                    counter.innerHTML = target;
                }
            }

            countIt();
        })
    };

    let intersected = 0;

    let counter_section = document.querySelector('.counter-section');
    let config = {
        rootMargin: '0px 0px -180px 0px'
    };
    const section_observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && intersected !== 1) {
            runCounter();
            intersected = 1;
        }
    }, config);

    section_observer.observe(counter_section);

    // Image filter
    var $wrraper = $('.portfolio-wrapper');

    // Initialize images
    $wrraper.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationOptions: {
            duration: 750,
            easing: 'linear'
        }
    });

    let tabs = document.querySelectorAll('.tabs a');
    tabs.forEach(link => {
        let selector = link.dataset.filter;
        link.addEventListener('click', (event) => {
            event.preventDefault();
            $wrraper.isotope({
                filter: selector,
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }
            });
            
            tabs.forEach(el => {
                el.classList.remove('active');
            });

            link.classList.add('active');
        });
    });

    $('.magnify').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true
        }
    });

    // Slider
    $('.slider').slick({
        arrows: false,
        autoplay: true
    });

})();

function downloadCV() {
    const link = document.createElement('a');
    link.target = '_blank';
    link.download = true;
    link.href = '../pdf/Govinda_Mandal_Full_Stack_Developer.pdf'
    link.click();
}