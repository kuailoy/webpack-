import render from './index.art';
import './home.less';
import { fetchData, submit } from '@/services/home';

// fetchData({
//   params: {
//     num: 10,
//   },
// });

// submit({
//   data: {
//     num: 15,
//   },
// })
//   .then((res) => {
//     const data = {
//       list: res.data.data,
//       title: 'Home Page',
//     };
//     console.log(data);
//     const html = render({ data });
//     console.log(html);

//     if (typeof document === 'object') {
//       document.body.innerHTML = html;
//     }
//   })
//   .catch((err) => {
//     console.error(err);
//   });

const data = {
  title: 'Home Page',
};
console.log(data);
const html = render({ data });
console.log(html);

if (typeof document === 'object') {
  document.body.innerHTML = html;
}
