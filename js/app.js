$(()=>{

  const $buttons = $('.button-style');
  const $modal = $('#modal');
  const $modalClose = $('.close-modal');
  const $modalContent = $('.modal-content');

  const userAction = {

    openTab: ({target: { id }}) => {
      $modalContent.load(`/views/${id}.html`, () =>  {
        $modal.toggleClass('is-active');
        if (id === 'aboutPage') {
          $('#project-content').load('/views/aboutProfessional.html');
          $('#aboutProfessional').addClass('is-active');
        }
        if (id === 'projectsPage') {
          $('#project-content').load('/views/projectOne.html');
          $('#projectOne').addClass('is-active');
        }
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
      $('#project-content').load(`/views/${project}.html`);
      $('.projects-buttons').parent().removeAttr('class');
      $(`#${project}`).addClass('is-active');
    },

    closeModal: () => {
      $modal.addClass('out');
      $modal.toggleClass('is-active');
    },

    keyPress: (e) => {
      if($('#modal').is(':visible')) {
        if (e.which === 37 && $('#back-button').is((i,e) => e)) {
          userAction.toggleProjectTabs($('#back-button')[0].attributes.navigateTo.value);
        }
        if (e.which === 39 && $('#forward-button').is((i,e) => e)) {
          userAction.toggleProjectTabs($('#forward-button')[0].attributes.navigateTo.value);
        }
        if (e.which === 27) {
          userAction.closeModal();
        }
      }
    }

  };

  $('body').keydown(userAction.keyPress);

  $buttons.on('click', userAction.openTab);

  $modal.on('click', '.projects-buttons', userAction.chooseProjectTab);
  $modal.on('click', '.next-buttons', userAction.navigateProjects);


  $modalClose.on('click', userAction.closeModal);


});
