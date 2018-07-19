const modalContent = {
  aboutPage:
  `<figure class="image is-3by4">
      <img src="./assets/martin-cropped.jpg" alt="Picture of Martin Allgood">
  </figure>`,

  projectsPage:

  `<div class="tabs is-centered is-boxed is-medium">
    <ul>
      <li class="is-active">
        <a>
          <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
          <span>Pictures</span>
        </a>
      </li>
      <li>
        <a>
          <span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
          <span>Music</span>
        </a>
      </li>
      <li>
        <a>
          <span class="icon is-small"><i class="fas fa-film" aria-hidden="true"></i></span>
          <span>Videos</span>
        </a>
      </li>
      <li>
        <a>
          <span class="icon is-small"><i class="far fa-file-alt" aria-hidden="true"></i></span>
          <span>Documents</span>
        </a>
      </li>
    </ul>
  </div>
  <figure class="image is-3by4">
    <img src="./assets/martin-2.jpg" alt="Picture of Martin Allgood">
  </figure>`,

  skillsPage: '<h1 class="title is-3">Skills</h1>',
  contactPage:
  `Find me on:
  <ul>
    <li>linkedIn</li>
    <li>
      <a class="button is-large">
        <span class="icon is-medium">
          <i class="fab fa-github"></i>
        </span>
        <span>GitHub</span>
      </a>
    </li>
  </ul>`
};

$(()=>{

  const $buttons = $('.button-style');

  const $modal = $('#modal');
  const $modalClose = $('.close-modal');
  const $modalContent = $('.modal-content');

  $buttons.on('click', ({ target: { id }}) => {
    $modalContent.html(modalContent[id]);
    $modal.toggleClass('is-active');
  });

  $modalClose.on('click', () => {
    $modal.toggleClass('is-active');
  });

});
