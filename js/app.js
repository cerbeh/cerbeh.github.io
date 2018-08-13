$(()=>{

  const $buttons = $('.button-style');
  const $modal = $('#modal');
  const $modalClose = $('.close-modal');
  const $modalContent = $('.modal-content');
  const $main = $('#main');

  $buttons.on('click', ({ target: { id }}) => {
    $modalContent.load(`/assets/${id}.html`, () =>  {
      $modal.toggleClass('is-active');
      // $main.toggleClass('animate-out');
    });
  });

  $modalClose.on('click', () => {
    $modal.toggleClass('is-active');
    // $main.toggleClass('animate-out');
  });

});
