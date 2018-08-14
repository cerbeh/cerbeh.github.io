$(()=>{

  const $buttons = $('.button-style');
  const $modal = $('#modal');
  const $modalClose = $('.close-modal');
  const $modalContent = $('.modal-content');
  // const $main = $('#main');

  $buttons.on('click', ({ target: { id }}) => {
    $modalContent.load(`/assets/${id}.html`, () =>  {
      // $modal.removeAttr('class').addClass('content-enter');
      $modal.toggleClass('is-active');
      // $main.toggleClass('animate-out');
    });
  });

  $modalClose.on('click', () => {
    $modal.addClass('out');
    $modal.toggleClass('is-active');
    // $main.toggleClass('animate-out');
  });

});

//
// $('.button').click(function(){
//   var buttonId = $(this).attr('id');
//   $('#modal-container').removeAttr('class').addClass(buttonId);
//   $('body').addClass('modal-active');
// })
//
// $('#modal-container').click(function(){
//   $(this).addClass('out');
//   $('body').removeClass('modal-active');
// });
