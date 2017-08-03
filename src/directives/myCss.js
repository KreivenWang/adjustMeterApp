import Vue from 'vue';
Vue.directive('myCss', {
  inserted(el, binding) {
    // console.log('inserted');
    // console.log(el, binding);
    let styleObj = binding.value;
    let arr = [];
    for (let key in styleObj) {
      arr.push(key + ':' + styleObj[key]);
    };
    arr = arr.join(';');
    el.style.cssText = arr;
  },
  bind(el, binding) {
    // console.log('bind');
    // console.log(el, binding);
  }
});
export default {
};