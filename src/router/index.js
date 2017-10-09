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
  path: '/topic/:id',
  name: 'topic',
  component (resolve) {
    require.ensure(['../views/topic.vue'], () => {
      resolve(require('../views/topic.vue'))
    })
  }
}, {
  path: '/message/:id',
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
