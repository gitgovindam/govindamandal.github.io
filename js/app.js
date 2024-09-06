(function () {
    emailjs.init({
        publicKey: 'A_VOPig4TVoVBb50T',
        // Do not allow headless browsers
        blockHeadless: true,
        limitRate: {
            // Set the limit rate for the application
            id: 'app',
            // Allow 1 request per 10s
            throttle: 10000,
        },
    });
})();


(() => {
    $('#profile-ripple').ripples({
        resolutions: 512,
        dropRadius: 15
    });

    document.getElementById('year').innerHTML = new Date().getFullYear();

    // Bars
    const bars = document.querySelectorAll('.progress-bar');

    bars.forEach(el => {
        el.querySelector('.tooltip').innerHTML = el.dataset.percentage + '%';
        el.style.width = el.dataset.percentage + '%';
    });

    // Counters

    const counters = document.querySelectorAll('.counter');

    runCounter = () => {
        counters.forEach(counter => {
            counter.innerHTML = 0;
            let target = +counter.dataset.count;

            let step = target / 100;
            let countIt = function () {
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

    // Exprience popup

    const items = document.querySelectorAll('.experience .item');

    items.forEach((item) => {
        item.addEventListener('mouseover', function () {
            const experience = item.querySelector('.experience-detail');
            experience.classList.add('active');
        });
        item.addEventListener('mouseleave', function () {
            const experience = item.querySelector('.experience-detail');
            experience.classList.remove('active');
        });
    });

    // Close Experience Details

    const closes = document.querySelectorAll('.close');
    closes.forEach((close) => {
        close.addEventListener('click', function () {
            close.parentElement.parentElement.classList.remove('active')
        })
    })
})();

function downloadCV() {
    const link = document.createElement('a');
    link.target = '_blank';
    link.download = 'Govinda-Mandal-Full-Stack-Developer';
    link.href = '../pdf/Govinda-Mandal-Full-Stack-Developer.pdf'
    link.click();
}

function printResume() {
    const printWindow = window.open('../pdf/Govinda-Mandal-Full-Stack-Developer.pdf', '__blank', 'width=800,height=1000,left=500,top=200');
    setTimeout(() => {
        printWindow.focus();
        printWindow.print();
    }, 0)
}

function sendEmail() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name.length < 2) {
        return snackbar.error(`Enter at least 2 characters in the name!`);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.length === 0) {
        return snackbar.error(`Enter an email!`);
    } else if (!emailRegex.test(email)) {
        return snackbar.error(`Email is not valid!`);
    }

    if (message.length < 10) {
        return snackbar.error(`Enter at least 10 characters in the message!`);
    }

    const templateParams = {
        from_name: name,
        message,
        reply_to: email,
        from_email: email
    };

    emailjs.send('service_getan9a', 'template_z40vh5b', templateParams)
        .then(function (response) {
            snackbar.success(`Status: ${response.statusText}: Your message was sent successfully!`);
        }, function (error) {
            snackbar.warn(`Something went wrong!`);
        });
}