/**
 * 控制路由，router
 * home目录下有article页面
 * 还有bonus页面
 */
'use strict';
//注册路由
export default function (router) {
  router.map({
    '/home': {
      name: 'home',
      component: require('./components/Home.vue'),
      subRoutes: {
        '/article': {
          name: 'article',
          component: require('./components/Article.vue')
        }
      }
    },
    '/bonus': {
      name: "bonus",
      component: require('./components/Bonus.vue')
    },
  })
}
