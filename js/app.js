$(()=>{

  const $buttons = $('.button-style');
  const $modal = $('#modal');
  const $modalClose = $('.close-modal');
  const $modalContent = $('.modal-content');

  $buttons.on('click', ({ target: { id }}) => {
    console.log(id);
    $modalContent.load(`/assets/${id}.html`, () =>  {
      $modal.toggleClass('is-active');
    });
  });

  $modalClose.on('click', () => {
    $modal.toggleClass('is-active');
  });

});
