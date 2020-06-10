import axios from '@/utils/http';

// get请求
const fetchData = (options = {}) => {
  axios.request({
    ...options,
    url: '/api/new/wbtop',
  });
};

// post
const submit = (options = {}) =>
  axios.request({
    ...options,
    method: 'POST',
    url: '/api/new/wbtop',
  });

export { fetchData, submit };
