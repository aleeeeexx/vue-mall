import jsonp from 'jsonp';

export default(url, data, options) => {
  const parseParam = param => {
    let arr = [];
    for (const key in param) {
      arr.push([key, param[key]]);
    }
    return arr.map(value => value.join('=')).join('&');
  };

  url += (url.indexOf('?') < 0 ? '?' : '&') + parseParam(data);
  return new Promise((resolve, reject) => {
    jsonp(url, options, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
