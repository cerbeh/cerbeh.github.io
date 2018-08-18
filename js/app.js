$(()=>{

  const $buttons = $('.button-style');
  const $modal = $('#modal');
  const $modalClose = $('.close-modal');
  const $modalContent = $('.modal-content');

  const userAction = {

    openTab: ({target: { id }}) => {
      $modalContent.load(`/assets/${id}.html`, () =>  {
        $modal.toggleClass('is-active');
      });
    },

    chooseProjectTab: ({currentTarget: { parentElement }}) => {
      const $currentButton = parentElement.id;
      userAction.toggleProjectTabs($currentButton);
    },

    navigateProjects: ({currentTarget: { attributes: { navigateTo }}}) => {
      const projectName = navigateTo.value;
      userAction.toggleProjectTabs(projectName);
    },

    toggleProjectTabs: (project) => {
      $('#project-content').load(`/assets/${project}.html`);
      $('.projects-buttons').parent().removeAttr('class');
      $(`#${project}`).addClass('is-active');
    },

    closeModal: () => {
      $modal.addClass('out');
      $modal.toggleClass('is-active');
    }

  };

  $buttons.on('click', userAction.openTab);

  $modal.on('click', '.projects-buttons', userAction.chooseProjectTab);
  $modal.on('click', '.next-buttons', userAction.navigateProjects);

  $modalClose.on('click', userAction.closeModal);


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
