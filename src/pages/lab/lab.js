import render from './index.art';

const data = {
  title: 'Lab Page',
};
const html = render(data);
console.log(html);

if (typeof document === 'object') {
  document.body.innerHTML = html;
}
