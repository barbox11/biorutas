    // Función para cambiar idioma
    document.querySelectorAll('[data-lang]').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const lang = this.getAttribute('data-lang');
        
        // Actualizar texto del botón
        document.querySelector('#languageDropdown').innerHTML = 
        `<i class="bi bi-globe me-1"></i> ${lang.toUpperCase()}`;
        
        // Actualizar clase activa
        document.querySelectorAll('.dropdown-item').forEach(el => {
        el.classList.remove('active');
        });
        this.classList.add('active');
        
        // Aquí iría tu lógica de cambio de idioma real
        console.log('Idioma cambiado a:', lang);
        
        // Ejemplo de cambio de texto en los enlaces
        const menuItems = {
        en: {
            destinations: 'Destinations',
            hotels: 'Hotels',
            flights: 'Flights',
            bookings: 'Bookings'
        },
        es: {
            destinations: 'Destinos',
            hotels: 'Hoteles',
            flights: 'Vuelos',
            bookings: 'Reservas'
        },
        fr: {
            destinations: 'Destinations',
            hotels: 'Hôtels',
            flights: 'Vols',
            bookings: 'Réservations'
        }
        };
        
        // Actualizar textos del menú
        if (menuItems[lang]) {
        document.querySelector('a[href="destinations.html"]').textContent = menuItems[lang].destinations;
        document.querySelector('a[href="hotels.html"]').textContent = menuItems[lang].hotels;
        document.querySelector('a[href="flights.html"]').textContent = menuItems[lang].flights;
        document.querySelector('a[href="bookings.html"]').textContent = menuItems[lang].bookings;
        }
    });
    });

    // Inicializar menú activo según página actual
    document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname.split('/').pop();
    
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
        link.classList.add('active');
        }
    });
    });