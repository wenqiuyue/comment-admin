import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes';
import type from '../commons/type';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
