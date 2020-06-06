import render from './index.art';
import './home.less';

const data = {
  title: 'Home Page',
};
const html = render(data);
console.log(html);

if (typeof document === 'object') {
  document.body.innerHTML = html;
}
