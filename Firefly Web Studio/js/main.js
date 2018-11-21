let toggleNavStatus = false;

let toggleNav = function() {
  let getSidebar = document.querySelector('.sidemenu');
  let getContent = document.querySelector('.pg-content');
  let getIcon = document.querySelector('.menu-container');
  let getLogo = document.querySelector('.logo');

  if (toggleNavStatus === false) {
    getSidebar.style.width = '300px';
    getIcon.style.marginLeft = '220px';
    getLogo.style.paddingLeft = '60px';
    toggleNavStatus = true;

  } else if (toggleNavStatus === true) {
    getSidebar.style.width = '0px';
    getIcon.style.marginLeft = '0px';
    getLogo.style.paddingLeft = '0px';
    toggleNavStatus = false;
    }
  }

function myFunction(x) {
      x.classList.toggle("change");
  }
