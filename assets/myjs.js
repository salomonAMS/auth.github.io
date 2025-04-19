// Importez les librairies nécessaires
import AOS from 'aos';
import PureCounter from '@srexi/purecounterjs';

// Initialisez AOS (animation on scroll)
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true
});

// Initialisez PureCounter
new PureCounter();

document.addEventListener('DOMContentLoaded', () => {
    // Configuration des compteurs
    new PureCounter({
      selector: '.counter',
      duration: 2,
      delay: 10,
      once: true
    });

    // Configuration AOS
    AOS.init({
      offset: 120,
      duration: 600,
      easing: 'ease-out-quad',
      once: true
    });
  });


  