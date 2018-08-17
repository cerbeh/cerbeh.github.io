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

    chooseProjectTab: ({currentTarget: { parentElement }}) => {
      const $currentButton = parentElement;
      $('#project-content').load(`/assets/${$currentButton.id}.html`);
      $('.projects-buttons').parent().removeAttr('class');
      $(`#${$currentButton.id}`).addClass('is-active');
    },

    navigateProjects: ({ target: { attributes: { navigateTo} } }) => {
      console.log(navigateTo);
      // const projectName = navigateTo.value;
      // $('#project-content').load(`/assets/${projectName}.html`);
      //I feel like the problem is here with the removeAttr command. It must somehow be removing the classes or something because they then dont exist? Or something?
      // $('.projects-buttons').parent().removeAttr('class');
      // $(`#${projectName}`).addClass('is-active');
    },

    closeModal: () => {
      $modal.addClass('out');
      $modal.toggleClass('is-active');
    }

  };

  $buttons.on('click', clickEvent.openTab);

  $modal.on('click', '.projects-buttons', clickEvent.chooseProjectTab);
  $modal.on('click', '.next-buttons', clickEvent.navigateProjects);

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
