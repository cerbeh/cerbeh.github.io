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
  </figure>`

};

$(()=>{
  
  const $buttons = $('.button-style');

  const $modal = $('#modal');
  const $modalClose = $('.close-modal');
  const $modalContent = $('.modal-content');

  $buttons.on('click', ({ currentTarget: { id } }) => {
    $modalContent.html(modalContent[id]);
    $modal.toggleClass('is-active');
  });

  $modalClose.on('click', () => {
    $modal.toggleClass('is-active');
  });


  //Do i have a navburger at the moment?
  $('.navbar-burger').click(function() {
    $('.navbar-burger').toggleClass('is-active');
    $('.navbar-menu').toggleClass('is-active');
  });

});
