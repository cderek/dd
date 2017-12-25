const Home = resolve => {
  require.ensure(['../views/index.vue'], () => {
    resolve(require('../views/index.vue'))
  })
}

const Hot = resolve => {
  require.ensure(['../views/hot.vue'], () => {
    resolve(require('../views/hot.vue'))
  })
}

const routers = [{
  path: '/',
  name: 'home',
  component: Home
}, {
  path: '/hot',
  name: 'hot',
  component: Hot
}, {
  path: '/recommend/feed',
  name: 'recommendFeed',
  component (resolve) {
    require.ensure(['../views/recommendFeed.vue'], () => {
      resolve(require('../views/recommendFeed.vue'))
    })
  }
}, {
  path: '/discover',
  name: 'discover',
  component (resolve) {
    require.ensure(['../views/discover.vue'], () => {
      resolve(require('../views/discover.vue'))
    })
  },
  meta: { keepAlive: true }
}, {
  path: '/profile',
  name: 'profile',
  component (resolve) {
    require.ensure(['../views/profile.vue'], () => {
      resolve(require('../views/profile.vue'))
    })
  },
  meta: { keepAlive: true }
}, {
  path: '/topic/:id',
  name: 'topic',
  component (resolve) {
    require.ensure(['../views/topic.vue'], () => {
      resolve(require('../views/topic.vue'))
    })
  }
}, {
  path: '/message/:id?',
  name: 'message',
  component (resolve) {
    require.ensure(['../views/message.vue'], () => {
      resolve(require('../views/message.vue'))
    })
  }
}, {
  path: '*',
  component: Home
}]

export default routers
