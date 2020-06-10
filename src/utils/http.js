import axios from 'axios';

const getBaseUrl = (env) => {
  let base = {
    production: '/',
    development: '/api',
    test: '/',
  }[env];

  if (!base) {
    base = '/';
  }

  return base;
};

class WrappedAxios {
  constructor() {
    this.baseURL = getBaseUrl(process.env.NODE_ENV);
    this.timeout = 10000;
    this.withCredentials = true;
  }

  request(options) {
    // 每次请求创建新的axios实例
    const instance = axios.create();
    const config = {
      ...options,
      baseURL: this.baseURL,
      timeout: this.timeout,
      withCredentials: this.withCredentials,
    };
    // 设置拦截器
    this.setInterceptors(instance, options.url);
    return instance(config);
  }

  setInterceptors(instance, url) {
    // 设置请求拦截器
    instance.interceptors.request.use(
      (config) => {
        // 在这里添加loading
        // ...

        // 设置token
        config.headers.AuthorizationToken = localStorage.getItem('AuthorizationToken') || '';
        return config;
      },
      (err) => Promise.reject(err)
    );

    // 设置响应拦截器
    instance.interceptors.response.use(
      (response) => {
        // 在这里移除loading
        // todo: 想根据业务需要，对响应结果预先处理的，都放在这里
        return response;
      },
      (err) => {
        if (err.response) {
          switch (
            err.response.status // 错误响应码处理
          ) {
            case '403':
              // todo handler server forbidden error
              break;
            // todo: handler other status code
            default:
              break;
          }
        }
        return Promise.reject(err.response);
      }
    );
  }
}

export default new WrappedAxios();
