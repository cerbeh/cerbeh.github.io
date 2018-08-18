$(()=>{

  // const $buttons = $('.button-style');
  const $modal = $('#modal');
  const $modalClose = $('.close-modal');
  const $modalContent = $('.modal-content');

  const clickEvent = {

    elements: {
      $buttons: () => $('.button-style')
    },

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

    navigateProjects: ({currentTarget: { attributes: { navigateTo }}}) => {
      const projectName = navigateTo.value;
      clickEvent.toggleProjectTabs(projectName);
    },

    toggleProjectTabs: (project) => {
      $('#project-content').load(`/assets/${project}.html`);
      $('.projects-buttons').parent().removeAttr('class');
      $(`#${project}`).addClass('is-active');
    },

    closeModal: () => {
      $modal.addClass('out');
      $modal.toggleClass('is-active');
    },

    buttonClick: () => {
      return clickEvent.elements.$buttons().on('click', clickEvent.openTab);
    }

  };

  // $buttons.on('click', clickEvent.openTab);

  $modal.on('click', '.projects-buttons', clickEvent.chooseProjectTab);
  $modal.on('click', '.next-buttons', clickEvent.navigateProjects);

  $modalClose.on('click', clickEvent.closeModal);

  clickEvent.buttonClick();

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
