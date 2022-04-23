let mobileMenuButtonOpen = document.querySelector('#mobile-menu-button-open');
let mobileMenuButtonClose = document.querySelector('#mobile-menu-button-close');
let topMenu = document.querySelector('#top-menu');
let header = document.querySelector('header');
let overflowDiv = document.createElement('div');
overflowDiv.className = 'overflow';
document.body.append(overflowDiv);

const popupMenu = () => {

  mobileMenuButtonOpen.addEventListener('click', () => {
    topMenu.style.display = 'flex';
    header.className = 'static';
    mobileMenuButtonOpen.style.transform = 'rotate(90deg)';
    mobileMenuButtonClose.style.transform = 'rotate(90deg)';
    document.body.style.overflowY= 'hidden';
    overflowDiv.style.display = 'block';
    topMenu.style.right = '0px';
  });

  topMenu.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      closePopup();
    };
  });
  
  mobileMenuButtonClose.addEventListener('click', () => {
    closePopup();
  });
  
  overflowDiv.addEventListener('click', () => {
    closePopup();
  });
}

const closePopup = () => {
  mobileMenuButtonOpen.style.transform = 'rotate(0deg)';
  mobileMenuButtonClose.style.transform = 'rotate(0deg)';
  header.classList.remove("static");
  topMenu.style.right = '-320px';
  overflowDiv.style.display = 'none';
  document.body.style.overflowY= 'auto';
}

export default popupMenu