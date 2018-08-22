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
    }

  };

  $('body').keydown(function(e) {
    const code = e.keyCode;
    const valid = e.target.children.modal.children[1].firstChild;
    // console.log(valid, 'valid');

    if (valid) {
      const leftArrowPage = e.target.children.modal.children[1].children[1].children[0].children[0].attributes.navigateTo.value;
      // console.log(e.target.children.modal.children[1].children[1].children[0].children[0]); //left
      const rightArrowPage = e.target.children.modal.children[1].children[1].children[0].children[2].attributes.navigateTo.value;
      // console.log(e.target.children.modal.children[1].children[1].children[0].children[2]); //right
      // console.log(e.target.lastElementChild.children[1]);
      if (code === 37) { //left
        userAction.toggleProjectTabs(leftArrowPage);
      }
      if (code === 39) { //right
        userAction.toggleProjectTabs(rightArrowPage);
      }
    }
  });


  $buttons.on('click', userAction.openTab);

  $modal.on('click', '.projects-buttons', userAction.chooseProjectTab);
  $modal.on('click', '.next-buttons', userAction.navigateProjects);

  $modalClose.on('click', userAction.closeModal);


});
