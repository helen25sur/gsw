const btnRus = document.getElementById('btn-rus');
const btnEng = document.getElementById('btn-eng');

btnRus.addEventListener('click', () => {

  const origin = document.location.origin;
  const pathName = document.location.pathname;

  if (pathName === '/eng/') {
    document.location.href = `${origin}/`;
  } else if (pathName.includes('/eng/')) {
    document.location.href = `${origin}/pages/${pathName.slice(5)}`;
  }
})

btnEng.addEventListener('click', () => {
  const origin = document.location.origin;
  const pathName = document.location.pathname;

  if (pathName === '/') {
    document.location.href = `${origin}/eng/`;
  } else if (pathName.includes('/pages/')) {
    document.location.href = `${origin}/eng/${pathName.slice(7)}`;
  }
})