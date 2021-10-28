const menuList = document.querySelectorAll('.menu-list');
const mobileMenuArr = [...menuList];

const btn = document.getElementById('burger-menu');
const nav = document.querySelector('.main-menu');
const blockMenu = document.createElement('div');
blockMenu.classList.add('mobile-block-menu');

const list = document.createElement('ul');
list.classList.add('mobile-menu');
menuList.forEach(menu => {
  const items = menu.querySelectorAll('.menu-item');
  items.forEach(li => {
    list.appendChild(li.cloneNode(true));
  })
})

blockMenu.appendChild(list);

nav.appendChild(blockMenu);

btn.addEventListener('click', () => {
  blockMenu.classList.toggle('mobile-block-menu_active');
  btn.classList.toggle('open');
})


// если будет нужно включить закрытие меню по скролу

// window.addEventListener('scroll', () => {
//   blockMenu.classList.remove('mobile-block-menu_active');
//   btn.classList.remove('open');
// })