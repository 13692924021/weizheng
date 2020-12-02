import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import iView from 'view-design'
import {  setTitle } from '@/libs/util'

Vue.use(Router)
const router = new Router({
  routes,
  mode: 'hash'
})

router.beforeEach((to, from, next) => {

  iView.LoadingBar.start()

    next()
})

router.afterEach(to => {
  setTitle(to, router.app)
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)

})

export default router
