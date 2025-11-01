const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');

controles.addEventListener('change', handleChange);

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;

  handleStyle[name](value);
  showCss();
}

const handleStyle = {
  backgroundColor (value) {
    btn.style.backgroundColor = value;
  },
  height(value) {
    btn.style.height = value + 'px';
  },
  width(value) {
    btn.style.width = value + 'px';
  },
  texto(value) {
    btn.innerText = value;
  },
  color(value) {
    btn.style.color = value;
  },
  border(value) {
    btn.style.border = value;
  },
  borderRadius(value) {
    btn.style.borderRadius = value + 'px';
  },
  fontFamily(value) {
    btn.style.fontFamily = value;
  },
  fontSize(value) {
    btn.style.fontSize = value + 'rem';
  },
}

function showCss() {
  cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
}