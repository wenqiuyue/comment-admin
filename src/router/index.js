import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes';
import type from '../commons/type';
import { Message } from 'element-ui';
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

/**
 * 全局前置守卫
 */
router.beforeEach((to, from, next) => {
  if (localStorage.getItem(type.TOKEN) && localStorage.getItem(type.USER)) {
    if (to.name == '/') {
      next({ path: '/home' });
    } else {
      next();
    }
  } else if (to.name != '/') {
    Message({
      message: 'Identity information is lost, please login again',
      type: 'warning',
      duration:6000
    })
    next({ path: '/' });
  } else {
    next();
  }
  
});

export default router
