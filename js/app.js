$(()=>{
  const $aboutButton = $('#about-me-button');
  const $projectsButton = $('#projects-button');
  const $skillsButton = $('#skills-button');
  const $contactButton = $('#contact-button');

  const $modal = $('#modal');
  const $modalBackground = $('.modal-background');
  const $modalContent = $('.modal-content');

  const modalContent = {
    aboutPage:
    `<figure class="image is-3by4">
        <img src="./assets/martin-cropped.jpg" alt="Picture of Martin Allgood">
    </figure>`,
    projectsPage:
    `<figure class="image is-3by4">
      <img src="./assets/martin-2.jpg" alt="Picture of Martin Allgood">
    </figure>`
  };

  $aboutButton.on('click', () => {
    $modalContent.html(modalContent.aboutPage);
    $modal.toggleClass('is-active');
  });

  $projectsButton.on('click', () => {
    $modalContent.html(modalContent.projectsPage);
    $modal.toggleClass('is-active');
  });

  $skillsButton.on('click', () => {
    $modal.toggleClass('is-active');
  });

  $contactButton.on('click', () => {
    $modal.toggleClass('is-active');
  });


  $modalBackground.on('click', () => {
    $modal.toggleClass('is-active');
  });

});
