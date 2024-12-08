function moveCarousel(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    const images = carousel.querySelector('.carousel-images');
    const imageWidth = carousel.offsetWidth; // Karusellin leveys
    const currentScroll = images.style.transform
      ? parseInt(images.style.transform.replace('translateX(', '').replace('px)', ''))
      : 0;
  
    // Lasketaan uusi siirtymän arvo
    const newScroll = currentScroll - direction * imageWidth;
  
    // Lasketaan kuvien maksimi- ja minimisiirtymä
    const maxScroll = -(images.children.length - 1) * imageWidth;
    const minScroll = 0;
  
    // Varmistetaan, ettei ylitetä rajoja
    if (newScroll <= minScroll && newScroll >= maxScroll) {
      images.style.transform = `translateX(${newScroll}px)`;
    }
  }