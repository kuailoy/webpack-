// const render = require('./index.art');
import render from './index.art';

const data = {
  title: 'Home Page',
};
const html = render(data);
console.log(html);

if (typeof document === 'object') {
  document.body.innerHTML = html;
}
