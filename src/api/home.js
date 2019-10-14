import axios from 'axios';
import jsonp from 'assets/js/jsonp.js';

const shuffle = (arr) => {
  const arrLength = arr.length;
  let i = arrLength;
  let rndNum;
  while (i--) {
    if (i !== (rndNum = Math.floor(Math.random() * arrLength))) {
      [arr[i], arr[rndNum]] = [arr[rndNum], arr[i]];
    }
  }
  return arr;
};

export const getHomeSlider = () => {
  return axios.get('http://www.imooc.com/api/home/slider', {timeout: 10000}).then(res => {
    if (res.data.code === 0) {
      let sliders = res.data.slider;
      let slide = [sliders[Math.floor(Math.random() * sliders.length)]];
      sliders = shuffle(sliders.filter(() => Math.random() > 0.5));
      if (sliders.length === 0) {
        sliders = slide;
      }
      return sliders;
    }
    throw new Error('没有获取到数据');
  }).catch(err => {
    if (err) {
      console.log(err);
    }
    return [{linkUrl: 'https://github.com/aleeeeexx/vue-mall', picUrl: require('assets/img/404.png')}];
  }).then(data => {
    return new Promise(resolve => {
      resolve(data);
    });
  });
};

export const getHomeRecommend = (page = 1, psize = 20) => {
  const url = 'https://ju.taobao.com/json/tg/ajaxGetItemsV2.json';
  const params = {
    page,
    psize,
    type: 0,
    frontCatId: ''
  };
  return jsonp(url, params, {
    param: 'callback'
  }).then(res => {
    if (res.code === '200') {
      return res;
    }
    throw new Error('没有成功获取到数据');
  }).catch(err => {
    console.log(err);
  });
};
