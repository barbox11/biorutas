    window.addEventListener('scroll', function () {
            const header = document.querySelector('.main-header');
            if (window.scrollY > 40) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
