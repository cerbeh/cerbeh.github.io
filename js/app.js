$(()=>{

  const $buttons = $('.button-style');
  const $modal = $('#modal');
  const $modalClose = $('.close-modal');
  const $modalContent = $('.modal-content');

  const clickEvent = {

    openTab: ({target: { id }}) => {
      $modalContent.load(`/assets/${id}.html`, () =>  {
        $modal.toggleClass('is-active');
      });
    },

    chooseProject: ({currentTarget: { parentElement }}) => {
      const $currentButton = parentElement;
      $('#project-content').load(`/assets/${$currentButton.id}.html`);
      $('.projects-buttons').parent().removeAttr('class');
      $(`#${$currentButton.id}`).addClass('is-active');
    },

    nextProject: () => {
      console.log('hello');
    },

    closeModal: () => {
      $modal.addClass('out');
      $modal.toggleClass('is-active');
    }

  };

  $buttons.on('click', clickEvent.openTab);

  $modal.on('click', '.projects-buttons', clickEvent.chooseProject);
  $modal.on('click', '.next-buttons', clickEvent.nextProject);

  $modalClose.on('click', clickEvent.closeModal);

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
